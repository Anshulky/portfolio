"use client";

import Image from "next/image";
import { LuFileText, LuMail, LuMapPin } from "react-icons/lu";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGooglescholar, SiOrcid } from "react-icons/si";

import { profile, readingPosts } from "@/content/profile";
import ThemeToggle from "@/components/ui/theme-toggle";
import { Button, Card, Link } from "@heroui/react";

const actions = [
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    icon: LuMail,
    variant: "primary" as const,
  },
  {
    label: "GitHub",
    href: profile.links.github,
    icon: FaGithub,
    variant: "tertiary" as const,
  },
  {
    label: "CV",
    href: profile.links.cv,
    icon: LuFileText,
    variant: "tertiary" as const,
  },
  {
    label: "LinkedIn",
    href: profile.links.linkedin,
    icon: FaLinkedin,
    variant: "tertiary" as const,
  },
  {
    label: "Scholar",
    href: profile.links.scholar,
    icon: SiGooglescholar,
    variant: "tertiary" as const,
  },
  {
    label: "ORCID",
    href: profile.links.orcid,
    icon: SiOrcid,
    variant: "tertiary" as const,
  },
];

export default function About() {
  return (
    <main className="w-full min-w-0 lg:w-[22rem] lg:shrink-0 lg:self-start xl:w-[26rem]">
      <Card>
        <Card.Content className="flex flex-col gap-4">
          <div className="flex flex-row items-center gap-3 sm:gap-4">
            <Image
              alt="Anshul Kumar Yadav"
              className="size-20 shrink-0 rounded-2xl object-cover sm:size-[120px]"
              height={120}
              src="/portrait.jpeg"
              width={120}
            />
            <div className="flex min-w-0 flex-col gap-2">
              <div className="flex items-center justify-between gap-2">
                <p>Hey there,</p>
                <ThemeToggle />
              </div>
              <p className="text-xl font-semibold sm:text-2xl">I&apos;m Anshul.</p>
              <div className="flex items-center gap-1 text-sm">
                <LuMapPin className="shrink-0" />
                {profile.location}
              </div>
            </div>
          </div>
          <div className="text-pretty text-[0.95rem] leading-6">
            <p>
          I&apos;m Research Staff at the{" "}
          <Link className="hover:underline" href="https://www.kcdh.iitb.ac.in/">
            Koita Centre for Digital Health
            <Link.Icon />
          </Link>
          ,{" "}
          <Link className="hover:underline" href="https://www.iitb.ac.in/">
            IIT Bombay
            <Link.Icon />
          </Link>
          , and a Master&apos;s by Research student in Healthcare Informatics
          under{" "}
          <Link
            className="hover:underline"
            href="https://www.kcdh.iitb.ac.in/kshitij"
          >
            Prof. Kshitij Jadhav
            <Link.Icon />
          </Link>
          . Alongside this, I work as a member of technical staff at{" "}
          <Link className="hover:underline" href="https://www.radailabs.in/">
            Radai Pvt. Limited
            <Link.Icon />
          </Link>
          , a medical AI startup building decision support tools.
            </p>
          </div>
        </Card.Content>
      </Card>

      <Card className="mt-4">
        <Card.Header className="font-semibold">
          <p>Reading</p>
        </Card.Header>
        <Card.Content className="flex flex-col gap-2">
          {readingPosts.slice(0, 2).map((post) => (
            <a
              key={post.href}
              className="line-clamp-1 text-sm hover:underline"
              href={post.href}
              rel="noopener noreferrer"
              target="_blank"
              title={post.title}
            >
              {post.title}
            </a>
          ))}
        </Card.Content>
      </Card>

      <Card className="mt-4">
        <Card.Header className="font-semibold">
          <p>Exploring</p>
        </Card.Header>
        <Card.Content className="flex flex-col gap-3 text-sm">
          <p>
            <span className="font-medium">VLM distillation learning:</span>{" "}
            Invoice and Receipt Structured Extraction via Knowledge Distillation from a Large VLM to a Compact Student Model
          </p>
          <p>
            <span className="font-medium">Continual learning: </span> Negative
            transfer detection strategies.
          </p>
        </Card.Content>
      </Card>

      <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
        {actions.map((action) => (
          <Button
            key={action.label}
            className="min-w-0 w-full px-2 text-sm"
            variant={action.variant}
            onPress={() => {
              window.location.href = action.href;
            }}
          >
            <action.icon />
            {action.label}
          </Button>
        ))}
      </div>
    </main>
  );
}
