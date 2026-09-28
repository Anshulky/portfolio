import Image from "next/image";
import { LuFileText, LuMail, LuMapPin } from "react-icons/lu";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGooglescholar, SiOrcid } from "react-icons/si";

import { profile } from "@/content/profile";
import ThemeToggle from "@/components/ui/theme-toggle";
import { Button, Link } from "@heroui/react";

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
      <div className="flex flex-row items-center gap-3 pt-4 sm:gap-4">
        <Image
          alt="Anshul Kumar Yadav"
          className="size-20 shrink-0 rounded-2xl object-cover sm:size-[120px]"
          height={120}
          src="/portrait.jpeg"
          width={120}
        />
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between gap-2">
            <p>Hey there,</p>
            <ThemeToggle />
          </div>
          <p className="text-xl font-semibold sm:text-2xl">I&apos;m Anshul.</p>
          <div className="flex gap-1 items-center text-sm">
            <LuMapPin />
            {profile.location}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 pt-4 text-pretty">
        <p>
          I&apos;m a Master&apos;s by Research student in Healthcare Informatics
          at{" "}
          <Link className="hover:underline" href="https://www.iitb.ac.in/">
            IIT Bombay
            <Link.Icon />
          </Link>
          , under{" "}
          <Link
            className="hover:underline"
            href="https://www.kcdh.iitb.ac.in/kshitij"
          >
            Prof. Kshitij Jadhav
            <Link.Icon />
          </Link>
          , working at the intersection of computer vision,
          and healthcare. At IIT Bombay, I also hold a concurrent role of Research Staff at the{" "}
          <Link className="hover:underline" href="https://www.kcdh.iitb.ac.in/">
            Koita Centre for Digital Health (KCDH)
            <Link.Icon />
          </Link>
          . Alongside this, I work as a member of technical staff at{" "}
          <Link className="hover:underline" href="https://www.radailabs.in/">
            Radai Pvt. Limited
            <Link.Icon />
          </Link>
          , a medical AI startup.
        </p>
        <p>
          My research centers on designing new architectures, probing what these
          models actually learn, and optimizing them to be fast and reliable at
          scale. More recently, I&apos;ve been chasing a bigger question: can
          AI research in healthcare be translated into usable clinical workflows?
          That question has pulled me into medical image understanding, vision-language models, 
          continual learning, and self-supervised learning. 
        </p>
        <p>
          My research has been generously supported by industry partners
          including the{" "}
          <Link
            className="hover:underline"
            href="https://www.koitafoundation.org/"
          >
            Koita Foundation
            <Link.Icon />
          </Link>
          ,{" "}
          <Link className="hover:underline" href="https://oraibio.com/">
            Oraibio
            <Link.Icon />
          </Link>{" "}
          (UK), and{" "}
          <Link className="hover:underline" href="https://www.wadhwaniai.org/">
            Wadhwani AI
            <Link.Icon />
          </Link>
          , among others.
        </p>
      </div>
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
