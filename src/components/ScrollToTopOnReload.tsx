"use client";

import { useEffect } from "react";

export default function ScrollToTopOnReload() {
  useEffect(() => {
    // Temporarily disable smooth scroll for instant jump
    const html = document.documentElement;
    const originalScrollBehavior = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    // Restore scroll behavior after scrollTo
    html.style.scrollBehavior = originalScrollBehavior;
  }, []);

  return null;
}
