"use client";

import { useEffect } from "react";

export default function TawkTo() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    (function () {
      const s1 = document.createElement("script");
      const s0 = document.getElementsByTagName("script")[0];

      s1.async = true;
      s1.src = process.env.NEXT_PUBLIC_TAWK_TO_SRC;
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");

      s0.parentNode.insertBefore(s1, s0);
      
    })();
  }, []);

  return null;
}
