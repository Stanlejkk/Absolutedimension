import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scroll the viewport to the top whenever the route's pathname changes.
 * Hash-links (e.g. /#featured) are left alone so in-page anchors still work.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, hash]);

  return null;
}
