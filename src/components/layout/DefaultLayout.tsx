"use client";
import { AnimatePresence } from "framer-motion";
import AppHeader from "../shared/AppHeader";
import UseScrollToTop from "@/hooks/useScrollToTop";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <AnimatePresence>
        <div>
          <div className="bg-secondary-light dark:bg-primary-dark transition duration-300 min-h-screen">
            <AppHeader />
            {children}
            <UseScrollToTop />
          </div>
        </div>
        {/* <AppFooter /> */}
      </AnimatePresence>
    </div>
  );
};

export default DefaultLayout;
