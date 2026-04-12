import React from 'react';
import Hero from '@/sections/Hero/Hero';
import { HeroScrollDemo } from '@/sections/Hero/HeroScroll';
import Categories from '@/sections/Categories/Categories';
import Stats from '@/sections/Stats/Stats';
import TrendingCourses from '@/sections/TrendingCourses/TrendingCourses';
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
      <HeroScrollDemo />
      <Categories />
      <Stats />
      <TrendingCourses />
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
