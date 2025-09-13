import { BrowserRouter, Route, Routes, useLocation } from "react-router";

import { NotFound } from "../../pages/NotFound";
import { Home } from "../../pages/Home";
import { useEffect } from "react";
import { AbountPomodoro } from "../../pages/AbountPomodoro";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}

export function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-pomodoro/" element={<AbountPomodoro />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ScrollToTop />
    </BrowserRouter>
  );
}
