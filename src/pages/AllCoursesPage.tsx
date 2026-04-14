import React, { useState } from 'react';
import { Users, Filter, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export default function AllCoursesPage() {
  const [showFilters, setShowFilters] = useState(false);
  const COURSES = [
    { title: "Full-Stack Web Development with React & Node.js", img: "https://picsum.photos/seed/c1/400/250", inst: "Dr. Pavan Shimpi", rating: "4.9/5", reviews: "1,250", price: "$199" },
    { title: "Python for Data Science & Machine Learning", img: "https://picsum.photos/seed/c2/400/250", inst: "Pankaj Wankhede", rating: "4.9/5", reviews: "1,250", price: "Free" },
    { title: "Cyber Security Analyst Certification", img: "https://picsum.photos/seed/c3/400/250", inst: "Pankaj Wankhede", rating: "4.9/5", reviews: "1,250", price: "Subscription" },
    { title: "Python for Data Science & Machine Learning", img: "https://picsum.photos/seed/c4/400/250", inst: "Dr. Pavan Shimpi", rating: "4.9/5", reviews: "1,250", price: "$199" },
    { title: "Python for Data Science & Machine Learning", img: "https://picsum.photos/seed/c5/400/250", inst: "Pankaj Wankhede", rating: "4.9/5", reviews: "1,250", price: "Free" },
    { title: "Cyber Security Analyst Certification", img: "https://picsum.photos/seed/c6/400/250", inst: "Pankaj Wankhede", rating: "4.9/5", reviews: "1,250", price: "Free" },
    { title: "Python for Data Science & Machine Learning", img: "https://picsum.photos/seed/c7/400/250", inst: "Dr. Pavan Shimpi", rating: "4.9/5", reviews: "1,250", price: "$199" },
    { title: "Python for Data Science & Machine Learning", img: "https://picsum.photos/seed/c8/400/250", inst: "Pankaj Wankhede", rating: "4.8/5", reviews: "1,250", price: "Free" },
    { title: "Cyber Security Analyst Certification", img: "https://picsum.photos/seed/c9/400/250", inst: "Pankaj Wankhede", rating: "4.9/5", reviews: "1,250", price: "Free" },
    { title: "Python for Data Science & Machine Learning", img: "https://picsum.photos/seed/c10/400/250", inst: "Dr. Pavan Shimpi", rating: "4.8/5", reviews: "1,250", price: "$199" },
    { title: "Cyber Security Analyst Certification", img: "https://picsum.photos/seed/c11/400/250", inst: "Pankaj Wankhede", rating: "4.9/5", reviews: "1,250", price: "Free" },
    { title: "Cyber Security Analyst Certification", img: "https://picsum.photos/seed/c12/400/250", inst: "Pankaj Wankhede", rating: "4.9/5", reviews: "1,250", price: "$199" },
  ];

  const FilterSidebar = () => (
    <div className="space-y-8 border pr-4 p-4 rounded-xl border-gray-100 shadow-sm align-start self-start bg-white">
      <h2 className="text-xl font-bold text-gray-900 border-b pb-4">Filters</h2>
      
      <div>
        <h3 className="font-semibold text-gray-900 mb-3 flex justify-between">Category <span className="text-gray-400">^</span></h3>
        <div className="space-y-2">
          {['Digital Marketing', 'Web Development', 'IoT', 'Cyber Security', 'DevOps', 'AI/ML', 'Data Science'].map(cat => (
            <label key={cat} className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="rounded text-blue-600 focus:ring-blue-500 w-4 h-4 border-gray-300" />
              <span className="text-sm text-gray-700">{cat}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-gray-900 mb-3 flex justify-between">Price <span className="text-gray-400">^</span></h3>
        <div className="space-y-2 mb-4">
          {['Free', 'Paid', 'Subscription'].map(price => (
            <label key={price} className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="rounded text-blue-600 focus:ring-blue-500 w-4 h-4 border-gray-300" />
              <span className="text-sm text-gray-700">{price}</span>
            </label>
          ))}
        </div>
        
        <div>
          <p className="text-xs text-black font-semibold mb-2">Price Range</p>
          <input type="range" className="w-full accent-blue-700" min="0" max="3000" />
          <div className="flex justify-between text-sm mt-1">
            <span className="font-medium">$free</span>
            <span className="font-medium">$3000</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-gray-900 mb-3 flex justify-between">Level <span className="text-gray-400">^</span></h3>
        <div className="space-y-2">
          {['Beginner', 'Intermediate', 'Advanced'].map(level => (
            <label key={level} className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="rounded text-blue-600 focus:ring-blue-500 w-4 h-4 border-gray-300" />
              <span className="text-sm text-gray-700">{level}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-white">
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Mobile Filter Toggle */}
        <div className="lg:hidden w-full mb-4">
          <Button 
            onClick={() => setShowFilters(!showFilters)}
            className="w-full flex justify-between items-center bg-gray-50 border border-gray-200 text-gray-900 hover:bg-gray-100 rounded-xl py-6 px-5"
          >
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-blue-700" />
              <span className="font-bold text-base">Filters</span>
            </div>
            {showFilters ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </Button>
          
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden mt-4"
              >
                <FilterSidebar />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Sidebar Filters - Desktop */}
        <div className="hidden lg:block w-full lg:w-64 flex-shrink-0">
          <FilterSidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">All Courses</h1>
            <div className="border border-blue-100 bg-blue-50/30 px-3 py-1.5 md:px-4 md:py-2 rounded-xl flex items-center gap-2 md:gap-3">
              <div>
                <div className="text-lg md:text-xl font-bold text-blue-900">10k+</div>
                <div className="text-[10px] md:text-xs font-semibold text-gray-500 leading-none">Online Students</div>
              </div>
              <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                 <Users className="w-4 h-4 md:w-5 md:h-5 text-gray-400" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COURSES.map((course, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-md transition-shadow">
                <div className="h-48 relative">
                  <img src={course.img} alt={course.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 min-h-[3rem]">{course.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">Instructor: {course.inst}</p>
                  <p className="text-sm font-semibold text-gray-800 mb-4 flex items-center gap-1">
                    <span className="text-yellow-500">⭐</span> {course.rating} <span className="text-gray-500 font-normal">({course.reviews} Reviews)</span>
                  </p>
                  <div className="mt-auto flex items-center justify-between">
                    <span className="font-bold text-lg text-gray-900">{course.price}</span>
                    <button className="bg-blue-800 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-blue-900">Enroll Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12 gap-2">
            <button className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50">&lt;</button>
            <button className="w-10 h-10 rounded-lg bg-blue-700 text-white flex items-center justify-center font-medium">1</button>
            <button className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center font-medium hover:bg-gray-50">2</button>
            <button className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50">&gt;</button>
          </div>
        </div>

      </div>
    </div>
  );
}
