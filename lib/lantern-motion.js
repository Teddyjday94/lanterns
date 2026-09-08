export function getLanternMotionProfile(reducedMotion = false, energized = false) {
  return {
    rotationDuration: reducedMotion ? "0s" : "22s",
    swayDuration: reducedMotion ? "0s" : "6.5s",
    glowIntensity: energized ? 1 : 0.72,
  };
}
