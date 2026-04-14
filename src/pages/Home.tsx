import React from 'react';
import Hero from '@/sections/Hero/Hero';
import MacbookScrollDemo from '@/components/macbook-scroll-demo';
import Categories from '@/sections/Categories/Categories';
import Stats from '@/sections/Stats/Stats';
import ExplorePrograms from '@/sections/ExplorePrograms/ExplorePrograms';
import InstructorBanner from '@/sections/Instructor/InstructorBanner';
import Certification from '@/sections/Certification/Certification';
import WhyChooseUs from '@/sections/WhyChooseUs/WhyChooseUs';
import OurExperts from '@/sections/OurExperts/OurExperts';
import Testimonials from '@/sections/Testimonials/Testimonials';
import FAQ from '@/sections/FAQ/FAQ';
import Blog from '@/sections/Blog/Blog';

export default function Home() {
  return (
    <>
      <Hero />
      <MacbookScrollDemo />
      <Categories />
      <Stats />
      {/* <TrendingCourses /> */}
      <ExplorePrograms />
      <InstructorBanner />
      <Certification />
      <WhyChooseUs />
      <OurExperts />

      <Testimonials />
      <FAQ />
      <Blog />
    </>
  );
}
