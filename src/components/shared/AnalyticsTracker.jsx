"use client";

import { useEffect, useMemo } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function AnalyticsTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

 
  const search = useMemo(() => searchParams?.toString() ?? "", [searchParams]);

  useEffect(() => {
    if (typeof window !== "undefined" && typeof window.gtag !== "undefined") {
      const page_path = search ? `${pathname}?${search}` : pathname;
      window.gtag("config", "G-4DE50EK29H", { page_path });
    }
  }, [pathname, search]);

  return null;
}
