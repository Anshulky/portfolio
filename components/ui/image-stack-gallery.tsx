"use client";

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

export type GalleryImage = {
  src: string;
  alt: string;
  caption?: string;
};

type ImageStackGalleryProps = {
  images: GalleryImage[];
  className?: string;
};

export default function ImageStackGallery({
  images,
  className,
}: ImageStackGalleryProps) {
  const [open, setOpen] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const galleryRef = React.useRef<HTMLDivElement>(null);

  const showImage = React.useCallback(
    (index: number) => {
      const nextIndex = (index + images.length) % images.length;
      setActiveIndex(nextIndex);
      galleryRef.current?.children[nextIndex]?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    },
    [images.length],
  );

  const handleScroll = () => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    const index = Math.round(gallery.scrollLeft / gallery.clientWidth);
    setActiveIndex(Math.min(images.length - 1, Math.max(0, index)));
  };

  if (images.length === 0) return null;

  return (
    <>
      <button
        aria-label={`Open photo gallery with ${images.length} images`}
        className={`group relative h-16 ${images.length === 1 ? "w-16" : "w-28"} shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${className ?? ""}`}
        onClick={() => {
          setActiveIndex(0);
          setOpen(true);
        }}
        type="button"
      >
        {images.slice(0, 3).map((image, index) => (
          <img
            alt=""
            aria-hidden="true"
            className="absolute top-1/2 aspect-square w-14 -translate-y-1/2 rounded-2xl border-2 border-background object-cover shadow-sm transition-transform duration-200 group-hover:-translate-y-[55%]"
            key={image.src}
            loading="lazy"
            src={image.src}
            style={{ left: `${index * 25}px`, zIndex: images.length - index }}
          />
        ))}
        {images.length > 3 && (
          <span className="absolute right-0 bottom-0 z-10 rounded-full bg-foreground px-1.5 py-0.5 text-xs font-medium text-background">
            +{images.length - 3}
          </span>
        )}
      </button>

      <Dialog onOpenChange={setOpen} open={open}>
        <DialogContent
          className="w-[min(calc(100%-1rem),64rem)] max-w-none gap-0 overflow-hidden bg-popover p-0 text-popover-foreground sm:max-w-none"
          showCloseButton={false}
        >
          <DialogTitle className="sr-only">Photo gallery</DialogTitle>
          <Button
            aria-label="Close gallery"
            className="absolute top-3 right-3 z-20 bg-background/80 text-foreground shadow-sm hover:bg-background hover:text-foreground"
            onClick={() => setOpen(false)}
            size="icon"
            type="button"
            variant="ghost"
          >
            <X />
          </Button>

          <div className="relative bg-muted">
            <div
              aria-label="Photo gallery. Swipe left or right to browse images."
              className="flex max-h-[min(80dvh,calc(100dvh-6rem))] snap-x snap-mandatory overflow-x-auto overscroll-x-contain scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              onScroll={handleScroll}
              ref={galleryRef}
              role="region"
            >
              {images.map((image) => (
                <div
                  className="flex w-full shrink-0 snap-start items-center justify-center"
                  key={image.src}
                >
                  <img
                    alt={image.alt}
                    className="max-h-[min(80dvh,calc(100dvh-6rem))] w-full select-none object-contain"
                    draggable={false}
                    src={image.src}
                  />
                </div>
              ))}
            </div>

            {images.length > 1 && (
              <>
                <Button
                  aria-label="Previous image"
                  className="absolute top-1/2 left-3 -translate-y-1/2 bg-background/80 text-foreground shadow-sm hover:bg-background hover:text-foreground"
                  onClick={() => showImage(activeIndex - 1)}
                  size="icon"
                  type="button"
                  variant="ghost"
                >
                  <ChevronLeft />
                </Button>
                <Button
                  aria-label="Next image"
                  className="absolute top-1/2 right-3 -translate-y-1/2 bg-background/80 text-foreground shadow-sm hover:bg-background hover:text-foreground"
                  onClick={() => showImage(activeIndex + 1)}
                  size="icon"
                  type="button"
                  variant="ghost"
                >
                  <ChevronRight />
                </Button>
              </>
            )}
          </div>

          <div className="flex min-h-11 items-center justify-center bg-muted px-12 text-center text-sm text-muted-foreground">
            {images[activeIndex].caption || images[activeIndex].alt}
            {images.length > 1 && (
              <span className="ml-2 text-muted-foreground/70">
                {activeIndex + 1} / {images.length}
              </span>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
