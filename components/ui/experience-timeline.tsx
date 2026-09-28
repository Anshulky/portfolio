import { Card } from "@heroui/react";

import { cn } from "@/lib/utils";

export type TimelineRole = {
  period: string;
  title: string;
  detail: string;
  description: string;
};

export type TimelineEntry = {
  period: string;
  title: string;
  organisation: string;
  description: string;
  roles?: TimelineRole[];
};

type ExperienceTimelineProps = {
  entries: TimelineEntry[];
  className?: string;
  label?: string;
};

export default function ExperienceTimeline({
  entries,
  className,
  label = "Experience timeline",
}: ExperienceTimelineProps) {
  return (
    <ol
      aria-label={label}
      className={cn(
        "relative space-y-8 before:absolute before:top-4 before:bottom-4 before:left-4 before:w-px before:bg-border",
        className,
      )}
    >
      {entries.map((entry) => (
        <li
          className="relative grid grid-cols-[2rem_minmax(0,1fr)] items-start gap-x-4"
          key={`${entry.organisation}-${entry.title}`}
        >
          <div
            aria-hidden="true"
            className="col-start-1 row-start-1 z-10 mt-2 size-3 justify-self-center rounded-full bg-accent ring-4 ring-background"
          />
          <Card className="col-start-2 row-start-1">
            <Card.Header>
              <p className="text-sm font-medium text-default-500">
                {entry.period}
              </p>
              <p className="font-semibold break-words">{entry.title}</p>
              <p className="font-medium break-words">{entry.organisation}</p>
            </Card.Header>
            <Card.Content>
              {entry.description && (
                <p className="text-sm leading-6 text-default-500">
                  {entry.description}
                </p>
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
          </Card>
        </li>
      ))}
    </ol>
  );
}
