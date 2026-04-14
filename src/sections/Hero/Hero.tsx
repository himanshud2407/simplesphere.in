import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import StarButton from '@/components/ui/star-button';
import ButtonWithIconDemo from '@/components/ui/button-with-icon';
import { SplineScene } from '@/components/ui/splite';
import { LogosSlider } from './LogosSlider';
import { CheckCircle2, GraduationCap } from 'lucide-react';

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
    <section className="relative pt-16 pb-12 md:pt-24 md:pb-20 overflow-hidden bg-slate-50">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-400/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-300/20 blur-[120px]" />
        
        {/* Subtle dot pattern grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Main Content Area */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-6 flex flex-col items-start text-left z-20"
          >
            {/* Top Badge - Desktop Only */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="hidden lg:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100/80 text-blue-700 text-sm font-semibold mb-6 shadow-sm"
            >
              <span className="flex h-2 w-2 rounded-full bg-blue-600 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              </span>
              India's Premier Learning Ecosystem
            </motion.div>

            {/* Main Headline */}
            <h1 className="text-[2.2rem] sm:text-5xl lg:text-[4.2rem] font-bold text-slate-900 leading-[1.1] tracking-tight mb-4 md:mb-6">
              <span className="md:hidden">Learn Skills &<br />Earn Your Certificate.</span>
              <span className="hidden md:block">Learn <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500">Skills</span> &<br className="hidden lg:block" /> Earn Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Certificate.</span></span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-base sm:text-xl text-slate-500 md:text-slate-600 max-w-2xl font-medium leading-relaxed mb-8 md:mb-10">
              Accelerate your career with industry-recognized certifications. Master in-demand skills and secure your dream internship today.
            </p>

            {/* Mobile Image Grid (Matches Reference Layout) */}
            <div className="flex md:hidden w-full gap-3 mb-8">
              <div className="w-[60%] aspect-[4/5] overflow-hidden rounded-[2rem]">
                <img src="/hero/large.png" alt="Student Learning" className="w-full h-full object-cover" />
              </div>
              <div className="w-[40%] flex flex-col gap-3">
                <div className="h-[55%] overflow-hidden rounded-[1.5rem]">
                  <img src="/hero/small_top.png" alt="Certificate Badge" className="w-full h-full object-cover" />
                </div>
                <div className="h-[45%] overflow-hidden rounded-[1.5rem]">
                  <img src="/hero/small_bottom.png" alt="Collaboration" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* Buttons Row - Desktop */}
            <div className="hidden md:flex flex-col sm:flex-row items-center gap-6 mb-12 w-full sm:w-auto">
              <div className="scale-100 sm:scale-105 origin-center sm:origin-left">
                <StarButton />
              </div>
              <ButtonWithIconDemo 
                className="bg-white/80 backdrop-blur-sm text-slate-700 border border-slate-200 hover:bg-slate-50 hover:border-slate-300 shadow-sm" 
                circleClassName="bg-white text-blue-600 md:bg-blue-600 md:text-white transition-all duration-500"
                text="Explore More" 
              />
            </div>

            {/* Mobile CTA Button (Matches Reference Layout) */}
            <div className="md:hidden w-full flex justify-center mb-10">
                <button className="bg-[#2563EB] text-white px-10 py-3.5 rounded-full font-bold text-sm shadow-xl hover:bg-slate-800 transition-all flex items-center justify-center transform active:scale-95">
                  Explore Courses
                </button>
            </div>

            {/* Trust Metrics - Desktop Only */}
            <div className="hidden lg:flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-8 pt-6 border-t border-slate-200/60 text-sm font-medium text-slate-600 w-full">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600" />
                <span>Industry Expert Mentors</span>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-blue-600" />
                <span>Verified Certificates</span>
              </div>
            </div>
          </motion.div>

          {/* Right Content - 3D Visual (Hidden on Mobile, replaced by grid above) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="hidden lg:col-span-6 relative w-full lg:flex items-center justify-center"
          >
            {/* Dialogue Badge */}
            <div className="absolute top-0 right-4 md:-top-4 md:right-8 z-[30] pointer-events-none">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ 
                    opacity: 1, 
                    y: [0, -8, 0],
                    scale: 1,
                  }}
                  transition={{
                    y: {
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    },
                    opacity: { duration: 0.5 },
                    scale: { duration: 0.5 }
                  }}
                  className="bg-white/95 backdrop-blur-xl border border-slate-200 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] px-5 py-3 md:px-6 md:py-4 rounded-2xl rounded-br-sm relative flex items-center justify-center transform origin-bottom-right"
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentDialogue}
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 5 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                        <span className="text-blue-600 text-lg">💡</span>
                      </div>
                      <span className="text-slate-800 font-semibold text-sm md:text-base whitespace-nowrap">
                        {DIALOGUES[currentDialogue]}
                      </span>
                    </motion.div>
                  </AnimatePresence>
                  
                  {/* Speech bubble tail */}
                  <div className="absolute -bottom-[9px] right-6 w-5 h-5 bg-white/95 border-r border-b border-slate-200 rotate-45 transform"></div>
                </motion.div>
            </div>

            {/* Spline Container with subtle modern glow */}
            <div className="relative w-full h-[600px] flex items-center justify-center filter drop-shadow-2xl">
              <div className="w-[110%] h-full focus:outline-none scale-110 lg:scale-[1.2] origin-center transition-transform duration-700 ease-out hover:scale-[1.25]">
                <SplineScene 
                  scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                  className="w-full h-full focus:outline-none"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Logos Slider */}
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.6, duration: 0.6 }}
           className="mt-20 md:mt-32 pt-8 md:pt-12 relative z-10"
        >
          <p className="text-center text-sm font-semibold text-slate-400 tracking-wider uppercase mb-8">
            Empowering Education with AI Tools
          </p>
          <LogosSlider />
        </motion.div>
      </div>
    </section>
  );
}
