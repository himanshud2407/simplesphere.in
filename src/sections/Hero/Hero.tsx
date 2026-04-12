import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import StarButton from '@/components/ui/star-button';
import ButtonWithIconDemo from '@/components/ui/button-with-icon';
import { SplineScene } from '@/components/ui/splite';
import { LogosSlider } from './LogosSlider';

const DIALOGUES = [
  "Hi! Ready to build your career?",
  "Want to start your internship journey?",
  "Explore courses & get certified 🚀"
];

export default function Hero() {
  const [currentDialogue, setCurrentDialogue] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDialogue((prev) => (prev + 1) % DIALOGUES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-12 md:py-20 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* Mobile Heading (Matches Screenshot) */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="block lg:hidden text-center mb-4"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Learn <span className="text-blue-600">Skills</span> & Earn Your <span className="text-blue-600">Internship Certificate.</span>
            </h1>
          </motion.div>

          {/* Left Content - Desktop Only version hidden on mobile */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="hidden lg:block"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Learn <span className="text-blue-600">Skills</span> & Earn Your <span className="text-blue-600">Internship Certificate.</span>
            </h1>
            <p className="mt-6 text-lg text-gray-500 max-w-lg">
              Learn how and earn your internship certificate for skills to accelerate your career.
            </p>
            <div className="mt-10 flex flex-wrap gap-8 items-center scale-110 origin-left">
              <StarButton />
              <ButtonWithIconDemo 
                className="bg-white text-blue-600 border border-blue-100 hover:bg-gray-50 shadow-lg" 
                circleClassName="!bg-blue-600 !text-white"
              />
            </div>
          </motion.div>

          {/* Right Content - Visual (Visible on both) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-full"
          >
            {/* Dialogue Badge */}
            <div className="absolute top-0 right-4 md:-top-10 md:right-10 z-[30] pointer-events-none">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ 
                    opacity: 1, 
                    y: [0, -10, 0],
                    scale: 1,
                  }}
                  transition={{
                    y: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    },
                    opacity: { duration: 0.5 },
                    scale: { duration: 0.5 }
                  }}
                  className="bg-white/90 backdrop-blur-md border border-blue-100 shadow-xl px-4 py-2 md:px-6 md:py-3 rounded-2xl rounded-bl-none relative"
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentDialogue}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="text-blue-600 font-bold text-xs md:text-base whitespace-nowrap">
                        {DIALOGUES[currentDialogue]}
                      </span>
                    </motion.div>
                  </AnimatePresence>
                  
                  {/* Speech bubble tail */}
                  <div className="absolute -bottom-2 left-0 w-4 h-4 bg-white/90 border-l border-b border-blue-100 rotate-45 -translate-y-1 transform origin-top-left"></div>
                </motion.div>
            </div>

            <div className="relative w-full h-[350px] sm:h-[450px] lg:h-[650px] flex items-center justify-center">
              <div className="w-[110%] h-full focus:outline-none scale-100 sm:scale-110 lg:scale-150 origin-center">
                <SplineScene 
                  scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                  className="w-full h-full focus:outline-none"
                />
              </div>
            </div>
          </motion.div>

          {/* Mobile Buttons */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex lg:hidden flex-wrap justify-center gap-4 mt-4"
          >
             <StarButton />
             <ButtonWithIconDemo 
                className="bg-white text-blue-600 border border-blue-100 hover:bg-gray-50 shadow-md" 
                circleClassName="!bg-blue-600 !text-white"
              />
          </motion.div>
        </div>

        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.5, duration: 0.6 }}
           className="mt-12 md:mt-48 border-t border-gray-100 pt-6 md:pt-10 relative z-10"
        >
          <LogosSlider />
        </motion.div>
      </div>
    </section>
  );
}
