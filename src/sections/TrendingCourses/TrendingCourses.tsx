import { COURSES } from '@/constants';
import { motion } from 'motion/react';
import { BookOpen } from 'lucide-react';
import ButtonWithIconDemo from '@/components/ui/button-with-icon';

export default function TrendingCourses() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-10 lg:gap-14 mb-12">
          {/* Left: Title */}
          <div className="md:w-[40%] flex flex-col items-start text-left">
            <div className="inline-flex items-center space-x-2 bg-white rounded-full px-4 py-1 mb-4 md:mb-6 border border-blue-100 shadow-sm">
               <span className="text-blue-600 font-semibold text-sm">Our Courses</span>
            </div>
            <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">Trending Courses to<br/><span className="text-blue-600">Power Your Career</span></h2>
          </div>
          
          {/* Middle: Centered text with book icon on border */}
          <div className="md:w-[30%] relative flex flex-col items-center justify-center text-center -mx-4 md:mx-0 min-w-0">
            <div className="w-full absolute top-6 -z-10 bg-gray-200 h-[1px]"></div>
            <div className="bg-white px-3 inline-block -mt-1 md:mt-2 mb-3">
              <BookOpen className="text-blue-600 w-6 h-6 transform -translate-y-1" />
            </div>
            <p className="text-gray-500 text-sm leading-relaxed relative bg-white mix-blend-normal">
              Upgrade your skills with industry-focused courses designed to boost your career and prepare you for real opportunities
            </p>
          </div>
          
          {/* Right: View All Button */}
          <div className="md:w-[30%] hidden md:flex md:justify-end items-center mt-4 md:mt-0">
            <button className="bg-[#2563EB] text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors w-full md:w-auto shrink-0">View All</button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {COURSES.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 transition-all group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full">
                    {course.badge}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{course.title}</h3>
                <p className="text-sm text-gray-500 mb-6 line-clamp-2">{course.description}</p>
                <div className="flex items-center justify-between mt-auto">
                  <ButtonWithIconDemo />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Mobile: View All Button at Bottom */}
        <div className="mt-10 flex md:hidden items-center justify-center">
           <button className="bg-[#2563EB] text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-colors w-full shadow-lg shadow-blue-200">View All Courses</button>
        </div>
      </div>
    </section>
  );
}
