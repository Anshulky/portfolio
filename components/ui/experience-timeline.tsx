"use client";

import { Card } from "@heroui/react";
import Image from "next/image";
import { useState } from "react";
import { LuChevronDown, LuExternalLink } from "react-icons/lu";

import { cn } from "@/lib/utils";
import type { TimelineEntry } from "@/content/profile";

type ExperienceTimelineProps = {
  entries: TimelineEntry[];
  className?: string;
  label?: string;
  openFirst?: boolean;
  showVisit?: boolean;
};

function TimelineItem({
  entry,
  initiallyOpen = false,
  showVisit = true,
}: {
  entry: TimelineEntry;
  initiallyOpen?: boolean;
  showVisit?: boolean;
}) {
  const [open, setOpen] = useState(initiallyOpen);
  const hasDetails =
    Boolean(entry.description) || Boolean(entry.roles && entry.roles.length > 0);

  return (
    <li>
      <Card className={hasDetails ? "clickable-card" : undefined}>
        <Card.Header>
          <button
            aria-expanded={open}
            className="flex w-full cursor-pointer items-start gap-3 text-left"
            type="button"
            onClick={() => {
              if (hasDetails) setOpen((value) => !value);
            }}
          >
            <Image
              alt=""
              className="mt-0.5 size-12 shrink-0 rounded-xl object-cover"
              height={48}
              src={entry.logo}
              width={48}
            />
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium text-default-500">
                {entry.period}
              </p>
              <p className="font-semibold break-words">{entry.title}</p>
              <p className="font-medium break-words">{entry.organisation}</p>
            </div>
            {hasDetails && (
              <LuChevronDown
                aria-hidden="true"
                className={cn(
                  "mt-1 size-4 shrink-0 text-default-500 transition-transform duration-200",
                  open && "rotate-180",
                )}
              />
            )}
          </button>
        </Card.Header>
        {open && (
          <Card.Content>
            {entry.description && (
              <p className="text-sm leading-6 text-default-500">
                {entry.description}
              </p>
            )}
            {showVisit && entry.href && (
              <a
                className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-accent underline-offset-4 hover:underline"
                href={entry.href}
                rel="noopener noreferrer"
                target="_blank"
              >
                Visit organisation
                <LuExternalLink className="size-3.5" />
              </a>
            )}
            {entry.roles && entry.roles.length > 0 && (
              <ol className="relative mt-4 space-y-6 before:absolute before:top-2 before:bottom-2 before:left-4 before:w-px before:bg-border">
                {entry.roles.map((role) => (
                  <li
                    className="relative grid grid-cols-[2rem_minmax(0,1fr)] items-start gap-x-4"
                    key={`${role.title}-${role.period}`}
                  >
                    <div
                      aria-hidden="true"
                      className="col-start-1 row-start-1 z-10 mt-1.5 size-3 justify-self-center rounded-full bg-accent ring-4 ring-background"
                    />
                    <div className="col-start-2 row-start-1">
                      <p className="text-sm font-medium text-default-500">
                        {role.period}
                      </p>
                      <p className="font-semibold">{role.title}</p>
                      <p className="font-medium">{role.detail}</p>
                      <p className="mt-1 text-sm leading-6 text-default-500">
                        {role.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            )}
          </Card.Content>
        )}
      </Card>
    </li>
  );
}

export default function ExperienceTimeline({
  entries,
  className,
  label = "Experience timeline",
  openFirst = false,
  showVisit = true,
}: ExperienceTimelineProps) {
  return (
    <ol aria-label={label} className={cn("flex flex-col gap-4", className)}>
      {entries.map((entry, index) => (
        <TimelineItem
          entry={entry}
          initiallyOpen={openFirst && index === 0}
          key={`${entry.organisation}-${entry.title}`}
          showVisit={showVisit}
        />
      ))}
    </ol>
  );
}
