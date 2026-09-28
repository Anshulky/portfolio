"use client";

import About from "@/components/ui/about";
import ExperienceTimeline from "@/components/ui/experience-timeline";
import ImageStackGallery, {
  type GalleryImage,
} from "@/components/ui/image-stack-gallery";
import {
  conferencePapers,
  education,
  experience,
  journalPapers,
  newsItems,
  products,
  type Paper,
} from "@/content/profile";
import { Card, Link, Tabs } from "@heroui/react";
import Image from "next/image";
import {
  LuBookOpen,
  LuBox,
  LuBriefcaseBusiness,
  LuGraduationCap,
  LuNewspaper,
} from "react-icons/lu";
import type { ReactNode } from "react";

function PaperList({ papers }: { papers: Paper[] }) {
  return (
    <div className="flex flex-col gap-4">
      {papers.map((paper) => (
        <Card key={paper.title}>
          <div className="flex items-center gap-3">
            <div className="min-w-0 flex-1">
              <Card.Header className="font-semibold">
                <p className="break-words">{paper.title}</p>
              </Card.Header>
              <Card.Content>
                <p className="text-sm text-default-500 break-words">
                  {paper.venue}
                  {paper.note ? ` · ${paper.note}` : ""}
                </p>
              </Card.Content>
            </div>
            {paper.href && (
              <a
                aria-label={`Publisher page for ${paper.title}`}
                className="mr-3 shrink-0 sm:mr-4"
                href={paper.href}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Image
                  alt=""
                  className="size-6"
                  height={24}
                  src="/pdf_icon.png"
                  width={24}
                />
              </a>
            )}
          </div>
        </Card>
      ))}
    </div>
  );
}

function MediaCopy({
  images,
  children,
}: {
  images: GalleryImage[];
  children: ReactNode;
}) {
  return (
    <div className="flex min-w-0 flex-col gap-4 sm:flex-row sm:items-start">
      {images.length > 0 && <ImageStackGallery images={images} />}
      <div className="min-w-0">{children}</div>
    </div>
  );
}

export default function Home({
  newsImages,
  productImages,
}: {
  newsImages: Record<string, GalleryImage[]>;
  productImages: Record<string, GalleryImage[]>;
}) {
  const news = newsItems.map((item) => ({
    ...item,
    images: newsImages[item.imageFolder] ?? [],
  }));
  const productCards = products.map((product) => ({
    ...product,
    images: productImages[product.imageFolder] ?? [],
  }));

  return (
    <div className="flex w-full min-w-0 flex-col items-start gap-6 lg:h-[calc(100dvh-4rem)] lg:flex-row lg:gap-6">
      <About />
      <div className="flex min-h-0 min-w-0 w-full flex-1 flex-col lg:h-full lg:self-start lg:overflow-hidden">
        <Tabs
          className="tab-workspace w-full"
          defaultSelectedKey="products"
          variant="secondary"
        >
          <Tabs.ListContainer>
            <Tabs.List aria-label="Portfolio sections">
              <Tabs.Tab id="products">
                <LuBox />
                <span className="ml-2">Products</span>
                <Tabs.Indicator />
              </Tabs.Tab>
              <Tabs.Tab id="publications">
                <LuBookOpen />
                <span className="ml-2">Publications</span>
                <Tabs.Indicator />
              </Tabs.Tab>
              <Tabs.Tab id="news">
                <LuNewspaper />
                <span className="ml-2">News</span>
                <Tabs.Indicator />
              </Tabs.Tab>
              <Tabs.Tab id="experience">
                <LuBriefcaseBusiness />
                <span className="ml-2">Experience</span>
                <Tabs.Indicator />
              </Tabs.Tab>
              <Tabs.Tab id="education">
                <LuGraduationCap />
                <span className="ml-2">Education</span>
                <Tabs.Indicator />
              </Tabs.Tab>
            </Tabs.List>
          </Tabs.ListContainer>

          <Tabs.Panel id="products">
            <div className="flex flex-col gap-4">
              {productCards.map((product) => (
                <Card key={product.name}>
                  <Card.Header>
                    <p className="text-lg font-semibold break-words sm:text-xl">
                      {product.name}
                    </p>
                    <p className="font-medium">{product.tagline}</p>
                  </Card.Header>
                  <Card.Content>
                    <MediaCopy images={product.images}>
                      <p className="text-pretty">{product.summary}</p>
                      {product.shaped.length > 0 && (
                        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-6">
                          {product.shaped.map((point) => (
                            <li key={point}>{point}</li>
                          ))}
                        </ul>
                      )}
                    </MediaCopy>
                  </Card.Content>
                </Card>
              ))}
            </div>
          </Tabs.Panel>

          <Tabs.Panel id="publications">
            <div className="flex flex-col gap-6">
              <section>
                <h2 className="mb-3 font-semibold">
                  Journal ({journalPapers.length})
                </h2>
                <PaperList papers={journalPapers} />
              </section>
              <section>
                <h2 className="mb-3 font-semibold">
                  Conference ({conferencePapers.length})
                </h2>
                <PaperList papers={conferencePapers} />
              </section>
            </div>
          </Tabs.Panel>

          <Tabs.Panel id="news">
            <div className="flex flex-col gap-4">
              {news.map((item) => (
                <Card key={item.title}>
                  <Card.Header className="font-semibold break-words">
                    {item.title}
                  </Card.Header>
                  <Card.Content>
                    <MediaCopy images={item.images}>
                      <p className="text-pretty">{item.body}</p>
                      {item.href && item.hrefLabel && (
                        <p className="mt-2">
                          <Link href={item.href}>{item.hrefLabel}</Link>
                        </p>
                      )}
                    </MediaCopy>
                  </Card.Content>
                </Card>
              ))}
            </div>
          </Tabs.Panel>

          <Tabs.Panel id="experience">
            <ExperienceTimeline entries={experience} />
          </Tabs.Panel>

          <Tabs.Panel id="education">
            <ExperienceTimeline entries={education} label="Education" />
          </Tabs.Panel>
        </Tabs>
      </div>
    </div>
  );
}
