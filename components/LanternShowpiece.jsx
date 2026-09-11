"use client";

import React, { useEffect, useState } from "react";
import { getLanternMotionProfile } from "../lib/lantern-motion.js";

export function LanternShowpiece() {
  const [energized, setEnergized] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  const motion = getLanternMotionProfile(reducedMotion, energized);

  return (
    <div
      className={`lantern-stage${energized ? " is-energized" : ""}`}
      style={{
        "--rotation-duration": motion.rotationDuration,
        "--sway-duration": motion.swayDuration,
        "--depth-duration": motion.depthDuration,
        "--glow-intensity": motion.glowIntensity,
      }}
    >
      <div className="lantern-aura" aria-hidden="true" />
      <div className="energy-rays" aria-hidden="true">
        {Array.from({ length: 10 }, (_, index) => <i key={index} />)}
      </div>
      <div className="lantern-heat" aria-hidden="true"><i /><i /><i /></div>
      <div className="ember-field" aria-hidden="true">
        {Array.from({ length: 18 }, (_, index) => <i key={index} />)}
      </div>
      <div className="lantern-sparks" aria-hidden="true">
        {Array.from({ length: 14 }, (_, index) => <i key={index} />)}
      </div>
      <button
        className="lantern-control"
        type="button"
        aria-pressed={energized}
        aria-label={energized ? "Set emerald lantern to idle glow" : "Energize emerald lantern"}
        onClick={() => setEnergized((value) => !value)}
        onPointerEnter={() => setEnergized(true)}
        onPointerLeave={() => setEnergized(false)}
      >
        <span className="lantern-sway">
          <span className="lantern-ground-shadow" aria-hidden="true" />
          <span className="lantern-rotator">
            <span className="lantern-depth" aria-hidden="true">
              <img src="/emerald-sentinel-lantern.webp" alt="" />
            </span>
            <span className="lantern-face">
              <img
                src="/emerald-sentinel-lantern.webp"
                alt="Ornate emerald lantern glowing with arcane energy"
              />
            </span>
            <span className="lantern-sheen" aria-hidden="true" />
          </span>
        </span>
      </button>
      <div className="lantern-readout">
        <span>Luminous Sentinel</span>
        <strong><i aria-hidden="true" /> Online</strong>
      </div>
      <p className="lantern-hint">Tap to amplify the signal</p>
    </div>
  );
}
