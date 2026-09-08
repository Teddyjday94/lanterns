"use client";

import React, { useState } from "react";
import { getSkillGroup, skillGroups } from "../lib/portfolio-data.js";

function SkillIcon({ label }) {
  const shared = {
    className: "skill-icon",
    viewBox: "0 0 48 48",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    "data-skill-icon": label.toLowerCase(),
  };

  if (label === "Build") {
    return (
      <svg {...shared}>
        <path className="icon-frame" d="M8 15V8h7M33 8h7v7M40 33v7h-7M15 40H8v-7" />
        <rect x="13" y="13" width="22" height="22" rx="2" />
        <path d="M13 19h22M19 13v22M25 24h6M28 21v6" />
        <circle className="icon-node" cx="16" cy="16" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (label === "Broadcast") {
    return (
      <svg {...shared}>
        <rect x="19" y="10" width="10" height="19" rx="5" />
        <path d="M15 24a9 9 0 0 0 18 0M24 33v6M19 39h10" />
        <path className="icon-signal" d="M13 14a14 14 0 0 0 0 17M35 14a14 14 0 0 1 0 17" />
        <path className="icon-signal icon-signal-far" d="M9 10a20 20 0 0 0 0 25M39 10a20 20 0 0 1 0 25" />
      </svg>
    );
  }

  if (label === "Motion") {
    return (
      <svg {...shared}>
        <path className="icon-path" d="M9 34C14 12 25 12 29 25c3 9 6 11 11 3" />
        <circle cx="9" cy="34" r="3" />
        <rect x="21" y="12" width="6" height="6" transform="rotate(45 24 15)" />
        <path d="m36 24 5 4-5 4M12 12h9M8 16h8" />
      </svg>
    );
  }

  return (
    <svg {...shared}>
      <path d="m24 7 15 9v16l-15 9-15-9V16l15-9Z" />
      <path d="m9 16 15 9 15-9M24 25v16M15 21l5-4 7 2 5-4" />
      <path className="icon-star" d="m31 8 1.2 3.1L35 12l-2.8 1L31 16l-1-3-3-1 3-.9L31 8Z" fill="currentColor" stroke="none" />
      <path d="M14 30c5-3 14-3 20 0" />
    </svg>
  );
}

export function SkillConsole() {
  const [selected, setSelected] = useState("Build");
  const active = getSkillGroup(selected);

  return (
    <div className="skill-console surface-panel">
      <div className="skill-console-nav" role="tablist" aria-label="Select skill group">
        {skillGroups.map((group, index) => (
          <button
            key={group.label}
            type="button"
            role="tab"
            aria-selected={selected === group.label}
            className={selected === group.label ? "is-active" : ""}
            onClick={() => setSelected(group.label)}
          >
            <span className="skill-index">0{index + 1}</span>
            <span className="skill-glyph"><SkillIcon label={group.label} /></span>
            <span>{group.label}</span>
          </button>
        ))}
      </div>

      <div className="skill-console-detail" role="tabpanel">
        <div className="skill-orbit" aria-hidden="true">
          <SkillIcon label={active.label} />
        </div>
        <div className="skill-copy">
          <p className="eyebrow">{active.eyebrow}</p>
          <h4>{active.label}</h4>
          <p>{active.summary}</p>
          <ul>
            {active.skills.map((skill) => (
              <li key={skill}><i aria-hidden="true" />{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
