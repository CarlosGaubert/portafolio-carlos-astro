import type { TransitionDirectionalAnimations } from "astro";

export const smoothPageTransition: TransitionDirectionalAnimations = {
  forwards: {
    old: {
      name: "smoothFadeOut",
      duration: "0.2s",
      easing: "cubic-bezier(0.4, 0, 0.2, 1)",
      fillMode: "both",
    },
    new: {
      name: "smoothFadeIn",
      duration: "0.28s",
      delay: "0.04s",
      easing: "cubic-bezier(0.16, 1, 0.3, 1)",
      fillMode: "both",
    },
  },
  backwards: {
    old: {
      name: "smoothFadeOut",
      duration: "0.2s",
      easing: "cubic-bezier(0.4, 0, 0.2, 1)",
      fillMode: "both",
    },
    new: {
      name: "smoothFadeIn",
      duration: "0.28s",
      delay: "0.04s",
      easing: "cubic-bezier(0.16, 1, 0.3, 1)",
      fillMode: "both",
    },
  },
};
