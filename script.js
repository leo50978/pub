const particleData = [
  { x: 10, y: 18, size: 1.4, opacity: 0.22, shiftX: "7px", shiftY: "-10px", twinkle: "5.8s", drift: "13s", delay: "-0.8s" },
  { x: 18, y: 62, size: 1.8, opacity: 0.32, shiftX: "-9px", shiftY: "8px", twinkle: "6.8s", drift: "12.5s", delay: "-3.2s" },
  { x: 26, y: 30, size: 1.2, opacity: 0.2, shiftX: "6px", shiftY: "6px", twinkle: "4.8s", drift: "10.8s", delay: "-1.7s" },
  { x: 34, y: 76, size: 1.5, opacity: 0.24, shiftX: "-8px", shiftY: "-12px", twinkle: "6.2s", drift: "14s", delay: "-5.4s" },
  { x: 42, y: 42, size: 1.9, opacity: 0.3, shiftX: "10px", shiftY: "-7px", twinkle: "5.1s", drift: "11.6s", delay: "-0.5s" },
  { x: 52, y: 14, size: 1.5, opacity: 0.23, shiftX: "-11px", shiftY: "9px", twinkle: "5.9s", drift: "12.8s", delay: "-4.4s" },
  { x: 60, y: 58, size: 1.2, opacity: 0.18, shiftX: "8px", shiftY: "-6px", twinkle: "4.7s", drift: "10.4s", delay: "-2.1s" },
  { x: 68, y: 22, size: 1.7, opacity: 0.28, shiftX: "-6px", shiftY: "10px", twinkle: "6.4s", drift: "13.6s", delay: "-5.7s" },
  { x: 74, y: 72, size: 1.3, opacity: 0.22, shiftX: "11px", shiftY: "-8px", twinkle: "5.2s", drift: "11.2s", delay: "-1.1s" },
  { x: 82, y: 36, size: 1.8, opacity: 0.32, shiftX: "-10px", shiftY: "-9px", twinkle: "6.6s", drift: "12.9s", delay: "-3.8s" },
  { x: 14, y: 46, size: 1.1, opacity: 0.17, shiftX: "5px", shiftY: "-5px", twinkle: "4.6s", drift: "10.1s", delay: "-2.4s" },
  { x: 22, y: 84, size: 1.4, opacity: 0.24, shiftX: "8px", shiftY: "7px", twinkle: "5.7s", drift: "12.2s", delay: "-4.9s" },
  { x: 40, y: 10, size: 1.3, opacity: 0.19, shiftX: "-7px", shiftY: "9px", twinkle: "6s", drift: "11.9s", delay: "-0.2s" },
  { x: 58, y: 84, size: 1.6, opacity: 0.27, shiftX: "9px", shiftY: "-10px", twinkle: "5.3s", drift: "13.4s", delay: "-3.1s" },
  { x: 72, y: 52, size: 1.2, opacity: 0.2, shiftX: "-5px", shiftY: "6px", twinkle: "4.9s", drift: "10.7s", delay: "-1.5s" },
  { x: 88, y: 18, size: 1.6, opacity: 0.25, shiftX: "7px", shiftY: "11px", twinkle: "6.1s", drift: "12.6s", delay: "-4.2s" }
];

const qs = (selector) => document.querySelector(selector);
const qsa = (selector) => Array.from(document.querySelectorAll(selector));

const SCENE_PACE = 1.4;

function scaleTimings(timings, factor) {
  return Object.fromEntries(
    Object.entries(timings).map(([key, value]) => [key, Number((value * factor).toFixed(2))])
  );
}

const baseSceneTiming = {
  backgroundDriftDuration: 11.6,
  cameraDriftDuration: 7.2,
  createLettersStart: 1.1,
  createLetterStagger: 0.28,
  createLetterDuration: 0.78,
  createDepthStart: 2.55,
  createDepthDuration: 1.28,
  captiverStart: 3.25,
  captiverEntryDuration: 0.62,
  captiverExitDuration: 0.82,
  elevStart: 4.55,
  elevEntryDuration: 0.24,
  elevExitDuration: 0.44,
  mesurerStart: 5.12,
  mesurerEntryDuration: 0.22,
  mesurerExitDuration: 0.4,
  marquerStart: 5.63,
  marquerEntryDuration: 0.2,
  marquerExitDuration: 0.38,
  transformerStart: 6.45,
  transformerEntryDuration: 0.94,
  transformerPulseStart: 7.55,
  cameraResetStart: 7.85,
  cameraResetDuration: 0.92,
  waveStart: 8.1,
  coreFlashDuration: 0.24,
  ringADuration: 1.15,
  ringBDuration: 1.35,
  coreFadeDuration: 1.18,
  whiteFloodDuration: 1.72,
  universeFadeStart: 8.32,
  universeFadeDuration: 1.18,
  transformerFadeStart: 8.34,
  transformerFadeDuration: 0.64,
  interfaceRevealStart: 9.92,
  interfaceRevealDuration: 0.18,
  hamburgerStart: 10.04,
  hamburgerDuration: 0.56,
  searchStart: 10.14,
  searchDuration: 0.52,
  heroImageStart: 10.3,
  heroImageDuration: 0.74,
  subtitleStart: 10.82,
  subtitleDuration: 0.42,
  indicatorStart: 11.1,
  indicatorDuration: 0.32,
  interfaceRetreatStart: 11.62,
  interfaceRetreatPrimeDuration: 0.52,
  interfaceRetreatDuration: 1.36,
  interfaceRetreatLostDuration: 0.86,
  interfaceNextRevealStart: 12.18,
  interfaceNextRevealDuration: 0.52,
  interfaceNextSettleDuration: 1.18,
  interfaceNextScrollStart: 14.24,
  interfaceNextScrollFeaturedDuration: 0.8,
  interfaceNextScrollTrustStart: 15.1,
  interfaceNextScrollTrustDuration: 0.56,
  interfaceTraverseStart: 15.84,
  interfaceTraverseDuration: 0.88,
  interfaceZeroFocusDuration: 1.02,
  interfaceZeroHandoffStart: 16.42,
  interfaceZeroHandoffDuration: 0.96,
  interfaceThirdRevealStart: 16.46,
  interfaceThirdRevealDuration: 1.22,
  interfaceThirdSettleDuration: 0.56,
  interfaceThirdScrollStart: 18.28,
  interfaceThirdScrollMetricsDuration: 0.78,
  interfaceThirdScrollInsightsStart: 19.14,
  interfaceThirdScrollInsightsDuration: 0.58,
  interfaceFourRevealStart: 19.96,
  interfaceFourFlattenDuration: 0.26,
  interfaceFourScrollDuration: 1.08,
  interfaceFourInnerScrollStart: 21.22,
  interfaceFourInnerFeaturesDuration: 0.82,
  interfaceFourInnerAnalyticsStart: 22.12,
  interfaceFourInnerAnalyticsDuration: 0.58,
  finalBreathStart: 22.7,
  finalBreathDuration: 0.52,
  finalCursorLiftStart: 23.34,
  finalCursorLiftDuration: 0.64,
  finalCursorDeployStart: 24,
  finalCursorDeployDuration: 0.88,
  finalSheetRevealDuration: 0.98,
  finalCopyStart: 24.94,
  finalCopyLetterStagger: 0.024,
  finalCopyLetterDuration: 0.48,
  finalButtonStart: 26.42,
  finalButtonDuration: 0.54,
  finalCursorMorphStart: 26.9,
  finalCursorMorphDuration: 0.24,
  finalCursorMoveStart: 27.12,
  finalCursorMoveDuration: 0.72,
  finalButtonHoverStart: 27.7,
  finalButtonHoverDuration: 0.24,
  finalButtonClickStart: 28.06,
  finalButtonClickDuration: 0.16,
  finalButtonReleaseDuration: 0.24
};

const sceneTiming = scaleTimings(baseSceneTiming, SCENE_PACE);

const interfaceZeroRetreat = {
  prime: {
    x: 4,
    y: -1,
    z: -18,
    scale: 0.98,
    rotationY: -4,
    rotationX: 1.5,
    filter: "blur(0px)"
  },
  drift: {
    x: 66,
    y: -12,
    z: -238,
    scale: 0.79,
    rotationY: -22,
    rotationX: 7,
    filter: "blur(0.18px)"
  },
  lost: {
    x: 142,
    y: -18,
    z: -522,
    scale: 0.55,
    rotationY: -28,
    rotationX: 9,
    filter: "blur(0.48px)"
  }
};

const interfaceNextEntrance = {
  start: {
    x: -24,
    y: -4,
    z: 236,
    scale: 1.14,
    rotationY: 10,
    rotationX: 3,
    filter: "blur(3.2px)"
  },
  front: {
    x: -28,
    y: 0,
    z: 138,
    scale: 1.08,
    rotationY: 8,
    rotationX: 3,
    filter: "blur(0.08px)"
  },
  settle: {
    x: -44,
    y: 10,
    z: -132,
    scale: 0.96,
    rotationY: 16,
    rotationX: 5,
    filter: "blur(0px)"
  }
};

const interfaceNextTraverse = {
  pass: {
    x: -322,
    y: 34,
    z: 524,
    scale: 1.82,
    rotationY: 30,
    rotationX: 9,
    filter: "blur(3.1px) brightness(1.03)"
  }
};

const interfaceZeroDepth = {
  focus: {
    x: 0,
    y: 2,
    z: 238,
    scale: 1.28,
    rotationY: -2,
    rotationX: 1,
    filter: "blur(0px)"
  },
  handoff: {
    x: 0,
    y: 0,
    z: 980,
    scale: 2.44,
    rotationY: 0,
    rotationX: 0,
    filter: "blur(9px)"
  }
};

const interfaceThirdEntrance = {
  start: {
    x: -42,
    y: 14,
    z: -1540,
    scale: 0.24,
    rotationY: -18,
    rotationX: 7,
    filter: "blur(10px)"
  },
  reveal: {
    x: -26,
    y: 8,
    z: -560,
    scale: 0.58,
    rotationY: -15,
    rotationX: 5,
    filter: "blur(1.2px)"
  },
  settle: {
    x: -24,
    y: 6,
    z: -136,
    scale: 0.96,
    rotationY: -18,
    rotationX: 6,
    filter: "blur(0px)"
  }
};

function buildParticles() {
  const container = qs(".particles");
  if (!container) {
    return;
  }

  particleData.forEach((dot) => {
    const particle = document.createElement("span");
    particle.className = "particle";
    particle.style.left = `${dot.x}%`;
    particle.style.top = `${dot.y}%`;
    particle.style.width = `${dot.size}px`;
    particle.style.height = `${dot.size}px`;
    particle.style.setProperty("--opacity", dot.opacity);
    particle.style.setProperty("--shift-x", dot.shiftX);
    particle.style.setProperty("--shift-y", dot.shiftY);
    particle.style.setProperty("--twinkle-duration", dot.twinkle);
    particle.style.setProperty("--drift-duration", dot.drift);
    particle.style.setProperty("--delay", dot.delay);
    container.appendChild(particle);
  });
}

function fitWordsToViewport() {
  const stage = qs(".phone-stage");
  const words = qsa(".word");

  if (!stage || words.length === 0) {
    return;
  }

  const safeWidth = Math.max(stage.clientWidth - 44, 0);

  words.forEach((word) => {
    const computed = window.getComputedStyle(word);
    const baseFontSize = Number(word.dataset.baseFontSize || parseFloat(computed.fontSize));
    const baseLetterSpacing = parseFloat(computed.letterSpacing);

    if (!word.dataset.baseFontSize) {
      word.dataset.baseFontSize = String(baseFontSize);
    }

    if (!word.dataset.baseLetterSpacing && Number.isFinite(baseLetterSpacing)) {
      word.dataset.baseLetterSpacing = String(baseLetterSpacing);
    }

    word.style.fontSize = `${baseFontSize}px`;

    if (word.dataset.baseLetterSpacing) {
      word.style.letterSpacing = `${Number(word.dataset.baseLetterSpacing)}px`;
    }

    const currentWidth = word.scrollWidth;
    if (currentWidth <= safeWidth || currentWidth === 0) {
      return;
    }

    const ratio = safeWidth / currentWidth;
    const fittedFontSize = Math.max(baseFontSize * ratio, 18);
    word.style.fontSize = `${fittedFontSize}px`;

    if (word.dataset.baseLetterSpacing) {
      const fittedLetterSpacing = Number(word.dataset.baseLetterSpacing) * Math.min(ratio, 1);
      word.style.letterSpacing = `${Math.max(fittedLetterSpacing, 0)}px`;
    }
  });
}

function fitFinalCopyToViewport() {
  const stage = qs(".phone-stage");
  const lines = qsa(".final-cta-copy-line");

  if (!stage || lines.length === 0) {
    return;
  }

  const safeWidth = Math.max(stage.clientWidth - 72, 0);

  lines.forEach((line) => {
    const computed = window.getComputedStyle(line);
    const baseFontSize = Number(line.dataset.baseFontSize || parseFloat(computed.fontSize));

    if (!line.dataset.baseFontSize) {
      line.dataset.baseFontSize = String(baseFontSize);
    }

    line.style.fontSize = `${baseFontSize}px`;

    const currentWidth = line.scrollWidth;
    if (currentWidth <= safeWidth || currentWidth === 0) {
      return;
    }

    const ratio = safeWidth / currentWidth;
    line.style.fontSize = `${Math.max(baseFontSize * ratio, 18)}px`;
  });
}

function prepareFinalCopy() {
  qsa(".final-cta-copy-line").forEach((line) => {
    if (line.dataset.prepared === "true") {
      return;
    }

    const text = line.textContent || "";
    line.textContent = "";

    Array.from(text).forEach((character) => {
      const letter = document.createElement("span");
      letter.className = "final-copy-letter";
      letter.textContent = character === " " ? "\u00A0" : character;
      line.appendChild(letter);
    });

    line.dataset.prepared = "true";
  });
}

function getStageRelativePoint(selector, xFactor = 0.5, yFactor = 0.5) {
  const stage = qs(".phone-stage");
  const target = qs(selector);

  if (!stage || !target) {
    return { x: 0, y: 0 };
  }

  const stageRect = stage.getBoundingClientRect();
  const targetRect = target.getBoundingClientRect();

  return {
    x: (targetRect.left + (targetRect.width * xFactor)) - (stageRect.left + (stageRect.width / 2)),
    y: (targetRect.top + (targetRect.height * yFactor)) - (stageRect.top + (stageRect.height / 2))
  };
}

function setInitialState() {
  gsap.set(".word", {
    xPercent: -50,
    yPercent: -50,
    transformOrigin: "50% 50%"
  });

  gsap.set(".letter", {
    opacity: 0,
    y: 34,
    scale: 1.1,
    filter: "blur(18px)"
  });

  gsap.set(".word-create", {
    opacity: 1,
    scale: 1,
    z: 0,
    filter: "blur(0px)"
  });

  gsap.set(".word-captiver, .word-elever, .word-mesurer, .word-marquer", {
    scale: 1.7,
    z: 220,
    filter: "blur(18px)"
  });

  gsap.set(".word-transformer", {
    scale: 1.4,
    z: 0,
    filter: "blur(14px)"
  });

  gsap.set(".ripple-core", {
    scale: 0.2,
    opacity: 0
  });

  gsap.set(".ripple-ring-a", {
    scale: 0.35,
    opacity: 0
  });

  gsap.set(".ripple-ring-b", {
    scale: 0.2,
    opacity: 0
  });

  gsap.set(".white-flood", {
    opacity: 0,
    clipPath: "circle(0% at 50% 50%)"
  });

  gsap.set(".interface-layer", {
    opacity: 0
  });

  gsap.set(".ui-hamburger", {
    y: -26,
    opacity: 0
  });

  gsap.set(".ui-search", {
    x: 18,
    opacity: 0
  });

  gsap.set(".hero-image", {
    y: 42,
    opacity: 0,
    scale: 0.96
  });

  gsap.set(".hero-subtitle", {
    y: 18,
    opacity: 0
  });

  gsap.set(".home-indicator", {
    opacity: 0,
    scaleX: 0.72,
    transformOrigin: "50% 50%"
  });

  gsap.set(".interface-zero", {
    opacity: 1,
    visibility: "visible",
    scale: 1,
    x: 0,
    z: 0,
    rotationY: 0,
    rotationX: 0,
    y: 0,
    filter: "blur(0px)",
    transformOrigin: "50% 50%"
  });

  gsap.set(".interface-next", {
    visibility: "hidden",
    opacity: 1,
    xPercent: -50,
    yPercent: -50,
    x: interfaceNextEntrance.start.x,
    y: interfaceNextEntrance.start.y,
    z: interfaceNextEntrance.start.z,
    scale: interfaceNextEntrance.start.scale,
    rotationY: interfaceNextEntrance.start.rotationY,
    rotationX: interfaceNextEntrance.start.rotationX,
    filter: interfaceNextEntrance.start.filter,
    transformOrigin: "50% 50%"
  });

  gsap.set(".interface-next-scroll", {
    y: 0
  });

  gsap.set(".interface-third", {
    visibility: "hidden",
    opacity: 1,
    xPercent: -50,
    yPercent: -50,
    x: interfaceThirdEntrance.start.x,
    y: interfaceThirdEntrance.start.y,
    z: interfaceThirdEntrance.start.z,
    scale: interfaceThirdEntrance.start.scale,
    rotationY: interfaceThirdEntrance.start.rotationY,
    rotationX: interfaceThirdEntrance.start.rotationX,
    filter: interfaceThirdEntrance.start.filter,
    transformOrigin: "50% 50%"
  });

  gsap.set(".interface-third-scroll", {
    y: 0
  });

  gsap.set(".interface-four", {
    visibility: "hidden",
    scale: 1,
    x: 0,
    y: 0,
    filter: "blur(0px) brightness(1)",
    yPercent: 112
  });

  gsap.set(".interface-four-scroll", {
    y: 0
  });

  gsap.set(".final-cta", {
    visibility: "hidden"
  });

  gsap.set(".final-cta-sheet", {
    yPercent: 108
  });

  gsap.set(".final-cursor", {
    xPercent: -50,
    yPercent: -50,
    x: 0,
    y: 486,
    scale: 1,
    opacity: 1
  });

  gsap.set(".final-cursor-drag", {
    opacity: 1,
    scale: 1
  });

  gsap.set(".final-cursor-click", {
    opacity: 0,
    scale: 0.62
  });

  gsap.set(".final-copy-letter", {
    opacity: 0,
    y: 8,
    filter: "blur(6px)"
  });

  gsap.set(".final-cta-button", {
    opacity: 0,
    y: 18,
    scale: 0.96,
    backgroundColor: "#0f141d",
    boxShadow: "0 20px 42px rgba(15, 20, 29, 0.18), inset 0 1px 0 rgba(255, 255, 255, 0.08)"
  });

  gsap.set(".final-cta-button-ripple", {
    xPercent: -50,
    yPercent: -50,
    scale: 0.2,
    opacity: 0
  });
}

function pushWordToDepth(timeline, selector, startAt, duration, depthScale) {
  timeline.to(selector, {
    z: -950,
    scale: depthScale,
    opacity: 0.14,
    filter: "blur(10px)",
    duration,
    ease: "power2.in"
  }, startAt);
}

function launchDepthWord(timeline, selector, config) {
  timeline.fromTo(selector, {
    opacity: 0,
    scale: config.entryScale,
    z: config.entryZ,
    filter: "blur(18px)"
  }, {
    opacity: 1,
    scale: 1,
    z: 0,
    filter: "blur(0px)",
    duration: config.entryDuration,
    ease: "power3.out"
  }, config.start);

  pushWordToDepth(
    timeline,
    selector,
    config.start + config.entryDuration - config.overlap,
    config.exitDuration,
    config.depthScale
  );
}

function buildTimeline() {
  const letters = qsa(".word-create .letter");
  const finalButtonPoint = getStageRelativePoint(".final-cta-button", 0.42, 0.54);

  const timeline = gsap.timeline({
    defaults: {
      ease: "power3.out"
    }
  });

  gsap.to(".universe-gradient", {
    scale: 1.08,
    xPercent: -3,
    yPercent: 4,
    duration: sceneTiming.backgroundDriftDuration,
    ease: "sine.inOut"
  });

  gsap.to(".universe-aurora", {
    xPercent: 3,
    yPercent: -4,
    scale: 1.06,
    duration: sceneTiming.backgroundDriftDuration,
    ease: "sine.inOut"
  });

  gsap.to(".word-lane", {
    rotationX: 6,
    rotationY: -8,
    z: -40,
    transformOrigin: "50% 50%",
    duration: sceneTiming.cameraDriftDuration,
    ease: "none"
  });

  letters.forEach((letter, index) => {
    timeline.to(letter, {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      duration: sceneTiming.createLetterDuration,
      ease: "power3.out"
    }, sceneTiming.createLettersStart + (index * sceneTiming.createLetterStagger));
  });

  pushWordToDepth(
    timeline,
    ".word-create",
    sceneTiming.createDepthStart,
    sceneTiming.createDepthDuration,
    0.42
  );

  launchDepthWord(timeline, ".word-captiver", {
    start: sceneTiming.captiverStart,
    entryScale: 2.5,
    entryZ: 280,
    entryDuration: sceneTiming.captiverEntryDuration,
    exitDuration: sceneTiming.captiverExitDuration,
    overlap: 0.1,
    depthScale: 0.42
  });

  launchDepthWord(timeline, ".word-elever", {
    start: sceneTiming.elevStart,
    entryScale: 2.7,
    entryZ: 320,
    entryDuration: sceneTiming.elevEntryDuration,
    exitDuration: sceneTiming.elevExitDuration,
    overlap: 0.05,
    depthScale: 0.33
  });

  launchDepthWord(timeline, ".word-mesurer", {
    start: sceneTiming.mesurerStart,
    entryScale: 2.8,
    entryZ: 340,
    entryDuration: sceneTiming.mesurerEntryDuration,
    exitDuration: sceneTiming.mesurerExitDuration,
    overlap: 0.05,
    depthScale: 0.29
  });

  launchDepthWord(timeline, ".word-marquer", {
    start: sceneTiming.marquerStart,
    entryScale: 2.95,
    entryZ: 360,
    entryDuration: sceneTiming.marquerEntryDuration,
    exitDuration: sceneTiming.marquerExitDuration,
    overlap: 0.04,
    depthScale: 0.25
  });

  timeline.fromTo(".word-transformer", {
    opacity: 0,
    scale: 1.4,
    filter: "blur(14px)"
  }, {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    duration: sceneTiming.transformerEntryDuration,
    ease: "power3.out"
  }, sceneTiming.transformerStart);

  timeline.to(".word-transformer", {
    scale: 1.02,
    duration: 0.44,
    yoyo: true,
    repeat: 1,
    ease: "sine.inOut"
  }, sceneTiming.transformerPulseStart);

  timeline.to(".word-lane", {
    rotationX: 0,
    rotationY: 0,
    z: 0,
    duration: sceneTiming.cameraResetDuration,
    ease: "power2.out"
  }, sceneTiming.cameraResetStart);

  timeline.to(".ripple-core", {
    opacity: 1,
    scale: 1.4,
    duration: sceneTiming.coreFlashDuration,
    ease: "power2.out"
  }, sceneTiming.waveStart);

  timeline.to(".ripple-ring-a", {
    opacity: 0.9,
    scale: 7.2,
    duration: sceneTiming.ringADuration,
    ease: "power2.out"
  }, sceneTiming.waveStart + 0.08);

  timeline.to(".ripple-ring-b", {
    opacity: 0.62,
    scale: 11.4,
    duration: sceneTiming.ringBDuration,
    ease: "power2.out"
  }, sceneTiming.waveStart + 0.16);

  timeline.to(".ripple-core", {
    opacity: 0,
    scale: 7.8,
    duration: sceneTiming.coreFadeDuration,
    ease: "power2.out"
  }, sceneTiming.waveStart + 0.08);

  timeline.to(".white-flood", {
    opacity: 1,
    clipPath: "circle(150% at 50% 50%)",
    duration: sceneTiming.whiteFloodDuration,
    ease: "power3.inOut"
  }, sceneTiming.waveStart + 0.08);

  timeline.to(".scene-universe", {
    opacity: 0,
    duration: sceneTiming.universeFadeDuration,
    ease: "power2.out"
  }, sceneTiming.universeFadeStart);

  timeline.to(".word-transformer", {
    opacity: 0,
    scale: 1.08,
    duration: sceneTiming.transformerFadeDuration,
    ease: "power2.out"
  }, sceneTiming.transformerFadeStart);

  timeline.to(".interface-layer", {
    opacity: 1,
    duration: sceneTiming.interfaceRevealDuration,
    ease: "none"
  }, sceneTiming.interfaceRevealStart);

  timeline.to(".ui-hamburger", {
    y: 0,
    opacity: 1,
    duration: sceneTiming.hamburgerDuration,
    ease: "power3.out"
  }, sceneTiming.hamburgerStart);

  timeline.to(".ui-search", {
    x: 0,
    opacity: 1,
    duration: sceneTiming.searchDuration,
    ease: "power3.out"
  }, sceneTiming.searchStart);

  timeline.to(".hero-image", {
    y: 0,
    opacity: 1,
    scale: 1,
    duration: sceneTiming.heroImageDuration,
    ease: "power3.out"
  }, sceneTiming.heroImageStart);

  timeline.to(".hero-subtitle", {
    y: 0,
    opacity: 1,
    duration: sceneTiming.subtitleDuration,
    ease: "power2.out"
  }, sceneTiming.subtitleStart);

  timeline.to(".home-indicator", {
    opacity: 1,
    scaleX: 1,
    duration: sceneTiming.indicatorDuration,
    ease: "power2.out"
  }, sceneTiming.indicatorStart);

  timeline.to(".interface-zero", {
    x: interfaceZeroRetreat.prime.x,
    y: interfaceZeroRetreat.prime.y,
    z: interfaceZeroRetreat.prime.z,
    scale: interfaceZeroRetreat.prime.scale,
    rotationY: interfaceZeroRetreat.prime.rotationY,
    rotationX: interfaceZeroRetreat.prime.rotationX,
    filter: interfaceZeroRetreat.prime.filter,
    duration: sceneTiming.interfaceRetreatPrimeDuration,
    ease: "sine.inOut"
  }, sceneTiming.interfaceRetreatStart);

  timeline.to(".interface-zero", {
    x: interfaceZeroRetreat.drift.x,
    y: interfaceZeroRetreat.drift.y,
    z: interfaceZeroRetreat.drift.z,
    scale: interfaceZeroRetreat.drift.scale,
    rotationY: interfaceZeroRetreat.drift.rotationY,
    rotationX: interfaceZeroRetreat.drift.rotationX,
    filter: interfaceZeroRetreat.drift.filter,
    duration: sceneTiming.interfaceRetreatDuration,
    ease: "power3.inOut"
  }, sceneTiming.interfaceRetreatStart + sceneTiming.interfaceRetreatPrimeDuration);

  timeline.set(".interface-next", {
    visibility: "visible"
  }, sceneTiming.interfaceNextRevealStart);

  timeline.to(".interface-next", {
    x: interfaceNextEntrance.front.x,
    y: interfaceNextEntrance.front.y,
    z: interfaceNextEntrance.front.z,
    scale: interfaceNextEntrance.front.scale,
    rotationY: interfaceNextEntrance.front.rotationY,
    rotationX: interfaceNextEntrance.front.rotationX,
    filter: interfaceNextEntrance.front.filter,
    duration: sceneTiming.interfaceNextRevealDuration,
    ease: "power2.out"
  }, sceneTiming.interfaceNextRevealStart);

  timeline.to(".interface-zero", {
    x: interfaceZeroRetreat.lost.x,
    y: interfaceZeroRetreat.lost.y,
    z: interfaceZeroRetreat.lost.z,
    scale: interfaceZeroRetreat.lost.scale,
    rotationY: interfaceZeroRetreat.lost.rotationY,
    rotationX: interfaceZeroRetreat.lost.rotationX,
    filter: interfaceZeroRetreat.lost.filter,
    duration: sceneTiming.interfaceRetreatLostDuration,
    ease: "power2.in"
  }, sceneTiming.interfaceRetreatStart + sceneTiming.interfaceRetreatPrimeDuration + (sceneTiming.interfaceRetreatDuration * 0.42));

  timeline.to(".interface-next", {
    x: interfaceNextEntrance.settle.x,
    y: interfaceNextEntrance.settle.y,
    z: interfaceNextEntrance.settle.z,
    scale: interfaceNextEntrance.settle.scale,
    rotationY: interfaceNextEntrance.settle.rotationY,
    rotationX: interfaceNextEntrance.settle.rotationX,
    filter: interfaceNextEntrance.settle.filter,
    duration: sceneTiming.interfaceNextSettleDuration,
    ease: "power3.inOut"
  }, sceneTiming.interfaceNextRevealStart + sceneTiming.interfaceNextRevealDuration + 0.04);

  timeline.to(".interface-next-scroll", {
    y: -86,
    duration: sceneTiming.interfaceNextScrollFeaturedDuration,
    ease: "power1.inOut"
  }, sceneTiming.interfaceNextScrollStart);

  timeline.to(".interface-next-scroll", {
    y: -134,
    duration: sceneTiming.interfaceNextScrollTrustDuration,
    ease: "power1.inOut"
  }, sceneTiming.interfaceNextScrollTrustStart);

  timeline.to(".interface-next", {
    x: interfaceNextTraverse.pass.x,
    y: interfaceNextTraverse.pass.y,
    z: interfaceNextTraverse.pass.z,
    scale: interfaceNextTraverse.pass.scale,
    rotationY: interfaceNextTraverse.pass.rotationY,
    rotationX: interfaceNextTraverse.pass.rotationX,
    filter: interfaceNextTraverse.pass.filter,
    duration: sceneTiming.interfaceTraverseDuration,
    ease: "power3.in"
  }, sceneTiming.interfaceTraverseStart);

  timeline.to(".interface-zero", {
    x: interfaceZeroDepth.focus.x,
    y: interfaceZeroDepth.focus.y,
    z: interfaceZeroDepth.focus.z,
    scale: interfaceZeroDepth.focus.scale,
    rotationY: interfaceZeroDepth.focus.rotationY,
    rotationX: interfaceZeroDepth.focus.rotationX,
    filter: interfaceZeroDepth.focus.filter,
    duration: sceneTiming.interfaceZeroFocusDuration,
    ease: "power3.out"
  }, sceneTiming.interfaceTraverseStart);

  timeline.set(".interface-third", {
    visibility: "visible"
  }, sceneTiming.interfaceThirdRevealStart - 0.08);

  timeline.to(".interface-zero", {
    x: interfaceZeroDepth.handoff.x,
    y: interfaceZeroDepth.handoff.y,
    z: interfaceZeroDepth.handoff.z,
    scale: interfaceZeroDepth.handoff.scale,
    rotationY: interfaceZeroDepth.handoff.rotationY,
    rotationX: interfaceZeroDepth.handoff.rotationX,
    filter: interfaceZeroDepth.handoff.filter,
    duration: sceneTiming.interfaceZeroHandoffDuration,
    ease: "power2.inOut"
  }, sceneTiming.interfaceZeroHandoffStart);

  timeline.set(".interface-zero", {
    zIndex: 1
  }, sceneTiming.interfaceThirdRevealStart + (sceneTiming.interfaceThirdRevealDuration * 0.44));

  timeline.set(".interface-third", {
    zIndex: 3
  }, sceneTiming.interfaceThirdRevealStart);

  timeline.to(".interface-third", {
    x: interfaceThirdEntrance.reveal.x,
    y: interfaceThirdEntrance.reveal.y,
    z: interfaceThirdEntrance.reveal.z,
    scale: interfaceThirdEntrance.reveal.scale,
    rotationY: interfaceThirdEntrance.reveal.rotationY,
    rotationX: interfaceThirdEntrance.reveal.rotationX,
    filter: interfaceThirdEntrance.reveal.filter,
    duration: sceneTiming.interfaceThirdRevealDuration,
    ease: "power3.out"
  }, sceneTiming.interfaceThirdRevealStart);

  timeline.to(".interface-third", {
    x: interfaceThirdEntrance.settle.x,
    y: interfaceThirdEntrance.settle.y,
    z: interfaceThirdEntrance.settle.z,
    scale: interfaceThirdEntrance.settle.scale,
    rotationY: interfaceThirdEntrance.settle.rotationY,
    rotationX: interfaceThirdEntrance.settle.rotationX,
    filter: interfaceThirdEntrance.settle.filter,
    duration: sceneTiming.interfaceThirdSettleDuration,
    ease: "power2.out"
  }, sceneTiming.interfaceThirdRevealStart + (sceneTiming.interfaceThirdRevealDuration * 0.78));

  timeline.to(".interface-third-scroll", {
    y: -92,
    duration: sceneTiming.interfaceThirdScrollMetricsDuration,
    ease: "power1.inOut"
  }, sceneTiming.interfaceThirdScrollStart);

  timeline.to(".interface-third-scroll", {
    y: -154,
    duration: sceneTiming.interfaceThirdScrollInsightsDuration,
    ease: "power1.inOut"
  }, sceneTiming.interfaceThirdScrollInsightsStart);

  timeline.to(".interface-third", {
    x: 0,
    y: 0,
    z: 0,
    scale: 1,
    rotationY: 0,
    rotationX: 0,
    filter: "blur(0px)",
    duration: sceneTiming.interfaceFourFlattenDuration,
    ease: "power2.out"
  }, sceneTiming.interfaceFourRevealStart - 0.12);

  timeline.set(".interface-four", {
    visibility: "visible"
  }, sceneTiming.interfaceFourRevealStart);

  timeline.to(".interface-third", {
    yPercent: -108,
    duration: sceneTiming.interfaceFourScrollDuration,
    ease: "power2.inOut"
  }, sceneTiming.interfaceFourRevealStart);

  timeline.to(".interface-four", {
    yPercent: 0,
    duration: sceneTiming.interfaceFourScrollDuration,
    ease: "power2.inOut"
  }, sceneTiming.interfaceFourRevealStart);

  timeline.to(".interface-four-scroll", {
    y: -94,
    duration: sceneTiming.interfaceFourInnerFeaturesDuration,
    ease: "power1.inOut"
  }, sceneTiming.interfaceFourInnerScrollStart);

  timeline.to(".interface-four-scroll", {
    y: -152,
    duration: sceneTiming.interfaceFourInnerAnalyticsDuration,
    ease: "power1.inOut"
  }, sceneTiming.interfaceFourInnerAnalyticsStart);

  timeline.to(".interface-four", {
    scale: 0.974,
    y: -8,
    filter: "blur(0.35px) brightness(0.84)",
    duration: sceneTiming.finalBreathDuration,
    ease: "sine.out"
  }, sceneTiming.finalBreathStart);

  timeline.to(".interface-four-scroll", {
    y: -164,
    duration: sceneTiming.finalBreathDuration,
    ease: "sine.out"
  }, sceneTiming.finalBreathStart);

  timeline.set(".final-cta", {
    visibility: "visible"
  }, sceneTiming.finalCursorLiftStart - 0.04);

  timeline.to(".final-cursor", {
    y: 246,
    duration: sceneTiming.finalCursorLiftDuration,
    ease: "power2.out"
  }, sceneTiming.finalCursorLiftStart);

  timeline.to(".final-cta-sheet", {
    yPercent: 64,
    duration: sceneTiming.finalCursorLiftDuration,
    ease: "power2.out"
  }, sceneTiming.finalCursorLiftStart);

  timeline.to(".final-cursor", {
    y: 316,
    duration: sceneTiming.finalCursorDeployDuration,
    ease: "power2.inOut"
  }, sceneTiming.finalCursorDeployStart);

  timeline.to(".final-cta-sheet", {
    yPercent: 0,
    duration: sceneTiming.finalSheetRevealDuration,
    ease: "power3.inOut"
  }, sceneTiming.finalCursorDeployStart);

  timeline.to(".final-copy-letter", {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    stagger: sceneTiming.finalCopyLetterStagger,
    duration: sceneTiming.finalCopyLetterDuration,
    ease: "power2.out"
  }, sceneTiming.finalCopyStart);

  timeline.to(".final-cta-button", {
    opacity: 1,
    y: 0,
    scale: 1,
    duration: sceneTiming.finalButtonDuration,
    ease: "power3.out"
  }, sceneTiming.finalButtonStart);

  timeline.to(".final-cursor-drag", {
    opacity: 0,
    scale: 0.84,
    duration: sceneTiming.finalCursorMorphDuration,
    ease: "power2.out"
  }, sceneTiming.finalCursorMorphStart);

  timeline.to(".final-cursor-click", {
    opacity: 1,
    scale: 1,
    duration: sceneTiming.finalCursorMorphDuration,
    ease: "power2.out"
  }, sceneTiming.finalCursorMorphStart);

  timeline.to(".final-cursor", {
    x: finalButtonPoint.x,
    y: finalButtonPoint.y,
    duration: sceneTiming.finalCursorMoveDuration,
    ease: "power3.inOut"
  }, sceneTiming.finalCursorMoveStart);

  timeline.to(".final-cta-button", {
    backgroundColor: "#1a2029",
    y: -2,
    scale: 1.02,
    boxShadow: "0 26px 52px rgba(15, 20, 29, 0.24), inset 0 1px 0 rgba(255, 255, 255, 0.12)",
    duration: sceneTiming.finalButtonHoverDuration,
    ease: "power2.out"
  }, sceneTiming.finalButtonHoverStart);

  timeline.to(".final-cursor", {
    y: finalButtonPoint.y + 8,
    scale: 0.96,
    duration: sceneTiming.finalButtonClickDuration,
    ease: "power2.in"
  }, sceneTiming.finalButtonClickStart);

  timeline.to(".final-cta-button", {
    y: 0,
    scale: 0.985,
    duration: sceneTiming.finalButtonClickDuration,
    ease: "power2.in"
  }, sceneTiming.finalButtonClickStart);

  timeline.to(".final-cta-button-ripple", {
    opacity: 0.24,
    scale: 1.64,
    duration: sceneTiming.finalButtonClickDuration + 0.08,
    ease: "power2.out"
  }, sceneTiming.finalButtonClickStart);

  timeline.to(".final-cursor", {
    y: finalButtonPoint.y,
    scale: 1,
    duration: sceneTiming.finalButtonReleaseDuration,
    ease: "back.out(1.3)"
  }, sceneTiming.finalButtonClickStart + sceneTiming.finalButtonClickDuration);

  timeline.to(".final-cta-button", {
    y: -1,
    scale: 1,
    duration: sceneTiming.finalButtonReleaseDuration,
    ease: "back.out(1.2)"
  }, sceneTiming.finalButtonClickStart + sceneTiming.finalButtonClickDuration);

  timeline.to(".final-cta-button-ripple", {
    opacity: 0,
    duration: sceneTiming.finalButtonReleaseDuration,
    ease: "power1.out"
  }, sceneTiming.finalButtonClickStart + sceneTiming.finalButtonClickDuration + 0.02);
}

function startScene() {
  if (!window.gsap) {
    document.documentElement.classList.add("no-gsap");
    return;
  }

  fitWordsToViewport();
  prepareFinalCopy();
  fitFinalCopyToViewport();
  setInitialState();
  buildTimeline();
}

function waitForFonts() {
  if (!document.fonts || !document.fonts.ready) {
    startScene();
    return;
  }

  Promise.race([
    document.fonts.ready,
    new Promise((resolve) => window.setTimeout(resolve, 800))
  ]).then(startScene);
}

buildParticles();
window.addEventListener("load", waitForFonts);
window.addEventListener("resize", () => {
  fitWordsToViewport();
  fitFinalCopyToViewport();
});
