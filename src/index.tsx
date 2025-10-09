import { StrictMode, useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { Desktop } from "./screens/Desktop/Desktop";
import { Mobile } from "./screens/Mobile/Mobile";

// Small wrapper that picks Desktop or Mobile depending on viewport width.
// Uses matchMedia so it updates on resize without remounting the whole app.
function ResponsiveRoot(): JSX.Element {
  const query = useMemo(() => window.matchMedia("(max-width: 767px)"), []);
  const [isMobile, setIsMobile] = useState(query.matches);

  useEffect(() => {
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    // For older browsers where addEventListener on MediaQueryList isn't available
    if (typeof query.addEventListener === "function") {
      query.addEventListener("change", handler as any);
      return () => query.removeEventListener("change", handler as any);
    }
    query.addListener(handler as any);
    return () => query.removeListener(handler as any);
  }, [query]);

  return isMobile ? <Mobile /> : <Desktop />;
}

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <ResponsiveRoot />
  </StrictMode>,
);
