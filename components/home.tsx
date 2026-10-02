"use client";

import About from "@/components/ui/about";
import ExperienceTimeline from "@/components/ui/experience-timeline";
import VitExplainer from "@/components/ui/vit-explainer";
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
  readingPosts,
  type Paper,
  type Product,
  type ReadingPost,
} from "@/content/profile";
import { Card, Link, Tabs } from "@heroui/react";
import Image from "next/image";
import { useState, type ReactNode } from "react";
import { FaLinkedin } from "react-icons/fa";
import {
  LuBookMarked,
  LuBriefcase,
  LuChevronDown,
  LuHouse,
  LuLayers,
  LuNewspaper,
  LuScrollText,
  LuUser,
} from "react-icons/lu";

function AuthorLine({ authors, firstAuthor }: Paper) {
  if (!authors.includes("A. K. Yadav")) {
    return <span>{authors}</span>;
  }

  const parts = authors.split(/(A\. K\. Yadav)/g);

  return (
    <>
      {parts.map((part, index) =>
        part === "A. K. Yadav" ? (
          <span
            className={firstAuthor ? "font-semibold text-foreground" : undefined}
            key={`${part}-${index}`}
          >
            {part}
            {firstAuthor ? "†" : ""}
          </span>
        ) : (
          <span key={`${part}-${index}`}>{part}</span>
        ),
      )}
    </>
  );
}

function EntryTitle({
  title,
  meta,
  action,
}: {
  title: string;
  meta: ReactNode;
  action?: ReactNode;
}) {
  return (
    <Card.Header className="font-semibold">
      <div className="flex items-start gap-3">
        <p className="min-w-0 flex-1 break-words">{title}</p>
        <div className="flex shrink-0 items-center gap-3">
          {action}
          <span className="text-sm font-medium text-default-500">{meta}</span>
        </div>
      </div>
    </Card.Header>
  );
}

function PaperList({ papers }: { papers: Paper[] }) {
  return (
    <div className="flex flex-col gap-4">
      {papers.map((paper) => (
        <Card key={paper.title}>
          <EntryTitle
            action={
              paper.href ? (
                <a
                  aria-label={`Publisher page for ${paper.title}`}
                  className="shrink-0"
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
              ) : undefined
            }
            meta={paper.year}
            title={paper.title}
          />
          <Card.Content>
            <p className="text-sm text-default-600">
              <AuthorLine {...paper} />
            </p>
            <p className="mt-1 text-sm text-default-500 break-words">
              {paper.venue}
              {paper.note ? ` · ${paper.note}` : ""}
              {paper.firstAuthor ? " · First author" : ""}
            </p>
          </Card.Content>
        </Card>
      ))}
    </div>
  );
}

function ReadingList({ posts }: { posts: ReadingPost[] }) {
  return (
    <div className="flex flex-col gap-4">
      {posts.map((post) => (
        <Card key={post.href}>
          <EntryTitle
            action={
              <a
                aria-label={`Read ${post.title}`}
                className="shrink-0 text-sm font-medium text-accent"
                href={post.href}
                rel="noopener noreferrer"
                target="_blank"
              >
                ↗
              </a>
            }
            meta={post.date}
            title={post.title}
          />
          <Card.Content>
            <p className="text-sm text-default-600">{post.author}</p>
          </Card.Content>
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

function ProductCard({
  product,
}: {
  product: Product & { images: GalleryImage[] };
}) {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((value) => !value);

  return (
    <Card className="clickable-card">
      <div className="flex min-w-0 flex-col gap-4 p-4 sm:flex-row sm:items-start">
        {product.images.length > 0 && (
          <ImageStackGallery images={product.images} />
        )}
        <button
          aria-expanded={open}
          className="flex min-w-0 flex-1 cursor-pointer flex-col gap-3 text-left"
          type="button"
          onClick={toggle}
        >
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="text-lg font-semibold break-words sm:text-xl">
                {product.name}
              </p>
              <p className="font-medium">{product.tagline}</p>
            </div>
            <LuChevronDown
              aria-hidden="true"
              className={`mt-1 size-4 shrink-0 text-default-500 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
            />
          </div>
          <p className={`text-pretty ${open ? "" : "line-clamp-2"}`}>
            {product.summary}
          </p>
          {open && product.shaped.length > 0 && (
            <ul className="list-disc space-y-1 pl-5 text-sm leading-6">
              {product.shaped.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          )}
        </button>
      </div>
    </Card>
  );
}

export default function Home({
  newsImages,
  productImages,
}: {
  newsImages: Record<string, GalleryImage[]>;
  productImages: Record<string, GalleryImage[]>;
}) {
  const [picked, setPicked] = useState(false);
  const [selectedTab, setSelectedTab] = useState("products");
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
      <div className="workspace-panel relative flex min-h-[calc(100dvh-6rem)] min-w-0 w-full flex-1 flex-col lg:h-full lg:min-h-0 lg:self-start lg:overflow-hidden">
        <div aria-hidden="true" className="workspace-backdrop" />
        <Tabs
          className={`tab-workspace relative z-10 w-full ${picked ? "" : "tabs-unpicked"}`}
          selectedKey={selectedTab}
          variant="secondary"
          onSelectionChange={(key) => {
            setPicked(true);
            setSelectedTab(String(key));
          }}
        >
          <Tabs.ListContainer
            onPointerDown={(event) => {
              const tab = (event.target as HTMLElement).closest("[role='tab']");
              if (tab) setPicked(true);
            }}
          >
            <div className="nav-shell">
              <button
                aria-label="Home"
                className={`nav-home ${picked ? "" : "is-on"}`}
                type="button"
                onClick={() => setPicked(false)}
              >
                <LuHouse />
              </button>
              <Tabs.List aria-label="Portfolio sections">
              <Tabs.Tab id="about">
                <LuUser />
                <span className="ml-2">About me</span>
                <Tabs.Indicator />
              </Tabs.Tab>
              <Tabs.Tab id="products">
                <LuLayers />
                <span className="ml-2">Products</span>
                <Tabs.Indicator />
              </Tabs.Tab>
              <Tabs.Tab id="publications">
                <LuScrollText />
                <span className="ml-2">Publications</span>
                <Tabs.Indicator />
              </Tabs.Tab>
              <Tabs.Tab id="news">
                <LuNewspaper />
                <span className="ml-2">News</span>
                <Tabs.Indicator />
              </Tabs.Tab>
              <Tabs.Tab id="experience">
                <LuBriefcase />
                <span className="ml-2">Experience</span>
                <Tabs.Indicator />
              </Tabs.Tab>
              <Tabs.Tab id="education">
                <LuBookMarked />
                <span className="ml-2">Education</span>
                <Tabs.Indicator />
              </Tabs.Tab>
            </Tabs.List>
            </div>
          </Tabs.ListContainer>

          <Tabs.Panel className="tab-panel-animate" id="products">
            <div className="flex flex-col gap-4">
              {productCards.map((product) => (
                <ProductCard key={product.name} product={product} />
              ))}
            </div>
          </Tabs.Panel>

          <Tabs.Panel className="tab-panel-animate" id="publications">
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

          <Tabs.Panel className="tab-panel-animate" id="news">
            <div className="flex flex-col gap-4">
              {news.map((item) => (
                <Card key={item.title}>
                  <EntryTitle
                    action={
                      item.href ? (
                        <a
                          aria-label={
                            item.href.includes("linkedin.com") ||
                            item.href.includes("lnkd.in")
                              ? `LinkedIn post: ${item.title}`
                              : item.hrefLabel || `Open link for ${item.title}`
                          }
                          className="shrink-0 text-[#0A66C2] dark:text-[#5B9BD5]"
                          href={item.href}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          {item.href.includes("linkedin.com") ||
                          item.href.includes("lnkd.in") ? (
                            <FaLinkedin className="size-6" />
                          ) : (
                            <span className="text-sm font-medium text-accent">
                              ↗
                            </span>
                          )}
                        </a>
                      ) : undefined
                    }
                    meta={item.date}
                    title={item.title}
                  />
                  <Card.Content>
                    <MediaCopy images={item.images}>
                      <p className="text-pretty">{item.body}</p>
                    </MediaCopy>
                  </Card.Content>
                </Card>
              ))}
            </div>
          </Tabs.Panel>

          <Tabs.Panel className="tab-panel-animate" id="experience">
            <ExperienceTimeline openFirst entries={experience} />
          </Tabs.Panel>

          <Tabs.Panel className="tab-panel-animate" id="education">
            <ExperienceTimeline
              entries={education}
              label="Education"
              showVisit={false}
            />
          </Tabs.Panel>

          <Tabs.Panel className="tab-panel-animate" id="about">
            <div className="flex flex-col gap-6">
              <Card>
                <Card.Content>
                  <div className="flex flex-col gap-4 text-pretty leading-7">
                    <p>
                      My research centers on designing new architectures, probing
                      what these models actually learn, and optimizing them to be
                      fast and reliable at scale. More recently, I&apos;ve been
                      chasing a bigger question: can AI research in healthcare be
                      translated into usable clinical workflows? That question has
                      pulled me into medical image understanding, vision-language
                      models, continual learning, and self-supervised learning.
                    </p>
                    <p>
                    Before IIT Bombay, I was a Junior Research Fellow at CSIR-CEERI, Pilani, working on applied AI across mural restoration, redox-flow battery state-of-charge estimation, additive-manufacturing anomaly detection, and X-ray baggage screening.
                    I completed my B.Tech. in Electrical Engineering at SKIT Jaipur in 2023.
                    </p>
                    <p>
                      My research has been generously supported by industry
                      partners including the{" "}
                      <Link
                        className="hover:underline"
                        href="https://www.koitafoundation.org/"
                      >
                        Koita Foundation
                        <Link.Icon />
                      </Link>
                      ,{" "}
                      <Link
                        className="hover:underline"
                        href="https://oraibio.com/"
                      >
                        Oraibio
                        <Link.Icon />
                      </Link>{" "}
                      (UK), and{" "}
                      <Link
                        className="hover:underline"
                        href="https://www.wadhwaniai.org/"
                      >
                        Wadhwani AI
                        <Link.Icon />
                      </Link>
                      , among others.
                    </p>
                  </div>
                </Card.Content>
              </Card>
              <section>
                <h2 className="mb-3 font-semibold">Reading</h2>
                <ReadingList posts={readingPosts} />
              </section>
            </div>
          </Tabs.Panel>
        </Tabs>
        {!picked && (
          <div className="relative z-10 min-h-0 flex-1 overflow-auto">
            <VitExplainer />
          </div>
        )}
      </div>
    </div>
  );
}
