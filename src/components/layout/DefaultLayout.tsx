'use client';
import { AnimatePresence } from 'framer-motion';
import AppHeader from '../shared/AppHeader';
import UseScrollToTop from '@/hooks/useScrollToTop';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AppFooter from '../shared/AppFooter';

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient()
  return (
    <div>
      <AnimatePresence>
        <div>
          <div className="bg-secondary-light dark:bg-primary-dark transition duration-300 min-h-screen">
            <AppHeader />
            <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
            <UseScrollToTop />
        <AppFooter />
          </div>
        </div>
      </AnimatePresence>
    </div>
  );
};

export default DefaultLayout;
