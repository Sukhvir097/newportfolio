
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ScrollToTopOnReload() {
  const router = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);

    if (window.location.hash) {
      history.replaceState(null, "", window.location.pathname);
      router.replace(window.location.pathname);
    }
  }, [router]);

  return null;
}
