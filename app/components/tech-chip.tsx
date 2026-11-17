"use client";

import { useState } from "react";
import type { Tech } from "../data";

export function TechChip({ tech }: { tech: Tech }) {
  const [broken, setBroken] = useState(false);
  const showIcon = tech.slug && !broken;

  return (
    <li className="flex h-8 items-center gap-2 rounded-md border border-line bg-bg px-2.5 text-[13px] text-fg/90 transition-colors hover:border-fg/25 hover:bg-surface">
      {showIcon ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`https://cdn.simpleicons.org/${tech.slug}`}
          alt=""
          width={14}
          height={14}
          loading="lazy"
          onError={() => setBroken(true)}
          className={`size-3.5 ${tech.mono ? "dark:invert" : ""}`}
        />
      ) : (
        <span className="size-1.5 rounded-full bg-muted" aria-hidden />
      )}
      {tech.name}
    </li>
  );
}
