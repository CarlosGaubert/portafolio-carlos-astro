import type { TransitionDirectionalAnimations } from "astro";

export const smoothPageTransition: TransitionDirectionalAnimations = {
  forwards: {
    old: {
      name: "smoothFadeOut",
      duration: "0.18s",
      easing: "cubic-bezier(0.4, 0, 0.2, 1)",
      fillMode: "both",
    },
    new: {
      name: "smoothFadeIn",
      duration: "0.24s",
      delay: "0.03s",
      easing: "cubic-bezier(0.16, 1, 0.3, 1)",
      fillMode: "both",
    },
  },
  backwards: {
    old: {
      name: "smoothFadeOut",
      duration: "0.18s",
      easing: "cubic-bezier(0.4, 0, 0.2, 1)",
      fillMode: "both",
    },
    new: {
      name: "smoothFadeIn",
      duration: "0.24s",
      delay: "0.03s",
      easing: "cubic-bezier(0.16, 1, 0.3, 1)",
      fillMode: "both",
    },
  },
};
