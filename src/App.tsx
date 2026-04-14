import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from '@/sections/Header/Header';
import Footer from '@/sections/Footer/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { motion, AnimatePresence } from 'motion/react';

// Pages
import Home from '@/pages/Home';
import BlogPage from '@/pages/BlogPage';
import ContactUsPage from '@/pages/ContactUsPage';
import AllCoursesPage from '@/pages/AllCoursesPage';
import FindCenterPage from '@/pages/FindCenterPage';

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="flex-1 flex flex-col"
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/courses" element={<AllCoursesPage />} />
          <Route path="/find-center" element={<FindCenterPage />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

function Layout() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-100 selection:text-blue-900 flex flex-col">
      <ScrollToTop />
      <Header />
      <div className="flex-1 flex flex-col relative w-full">
        <main className="flex-1 flex flex-col">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
