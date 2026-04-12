/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '@/sections/Header/Header';
import Footer from '@/sections/Footer/Footer';

// Pages
import Home from '@/pages/Home';
import BlogPage from '@/pages/BlogPage';
import ContactUsPage from '@/pages/ContactUsPage';
import AllCoursesPage from '@/pages/AllCoursesPage';
import FindCenterPage from '@/pages/FindCenterPage';

function Layout() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900 flex flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/courses" element={<AllCoursesPage />} />
          <Route path="/find-center" element={<FindCenterPage />} />
        </Routes>
      </main>
      <Footer />
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
