import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Clock, Award, GraduationCap, Laptop, Shield, Cloud, PieChart, Landmark, FileCheck, ChevronDown, ChevronUp } from 'lucide-react';

const CATEGORIES = [
  { id: 'genai', name: 'GenAI', icon: GraduationCap, count: 6 },
  { id: 'software', name: 'Software Engineering', icon: Laptop, count: 9 },
  { id: 'data', name: 'Data Science', icon: PieChart, count: 7 },
  { id: 'cyber', name: 'Cybersecurity', icon: Shield, count: 5 },
  { id: 'cloud', name: 'Cloud Computing', icon: Cloud, count: 4 },
  { id: 'marketing', name: 'Digital Marketing', icon: PieChart, count: 6 },
  { id: 'gniit', name: 'GNIIT', icon: Award, count: 3 },
  { id: 'finance', name: 'Banking & Finance', icon: Landmark, count: 4 },
  { id: 'certification', name: 'Industry Recognized Certification', icon: FileCheck, count: 2 },
];

const PROGRAMS_DATA: Record<string, any[]> = {
  genai: [
    {
      id: 1,
      title: 'Building Agentic AI Systems',
      description: 'Create and present practical AI projects- from chatbots to agent teams',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
      duration: '25 Weeks',
      type: 'CERTIFICATE',
      badges: ['PLACEMENT ASSISTANCE', 'NCVET ACCREDITED'],
      stats: { salary: '15%- 20% Growth', rating: '4.4/5' }
    },
    {
      id: 2,
      title: 'Digital Communication and GenAI Tools',
      description: 'Boost communication skills with GenAI for workplace success',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4638d9f8e?auto=format&fit=crop&q=80&w=800',
      duration: '5 Weeks',
      type: 'CERTIFICATE',
      badges: ['SKILL-UP ACCELERATOR'],
    },
    {
      id: 3,
      title: 'Swift GenAI for Content Developers',
      description: 'Learn Swift and GenAI for modern app development',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
      duration: '1 Week',
      type: 'CERTIFICATE',
      badges: ['FOUNDATION TRACK'],
    },
    {
      id: 4,
      title: 'Swift GenAI for Teachers',
      description: 'Empower educators with GenAI skills for smart teaching tools',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800',
      duration: '1 Week',
      type: 'CERTIFICATE',
      badges: ['FOUNDATION TRACK'],
    },
    {
      id: 5,
      title: 'Swift GenAI for Homemakers',
      description: 'Empower homemakers with GenAI for creativity and productivity',
      image: 'https://images.unsplash.com/photo-1581578731522-5804fed0f4f2?auto=format&fit=crop&q=80&w=800',
      duration: '1 Week',
      type: 'CERTIFICATE',
      badges: ['FOUNDATION TRACK'],
    },
    {
      id: 6,
      title: 'Swift GenAI for Students',
      description: 'Equip students with GenAI skills for future-ready careers',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800',
      duration: '1 Week',
      type: 'CERTIFICATE',
      badges: ['FOUNDATION TRACK'],
    },
  ],
  data: [
    {
      id: 201,
      title: 'Professional Program in Data Analytics with GenAI',
      description: 'Master data analytics and GenAI for insights and visualization',
      image: 'https://images.unsplash.com/photo-1551288049-bbbda5366991?auto=format&fit=crop&q=80&w=800',
      duration: '24 Weeks',
      type: 'CERTIFICATE',
      badges: ['PLACEMENT ASSISTANCE', 'NCVET ACCREDITED'],
      stats: { salary: '₹4- ₹9.2 LPA', rating: '4.5/5' }
    },
    {
      id: 202,
      title: 'PGP in Machine Learning & Artificial Intelligence',
      description: 'Master Machine Learning and AI with Python and projects',
      image: 'https://images.unsplash.com/photo-1527474305487-b87b222841cc?auto=format&fit=crop&q=80&w=800',
      duration: '43 Weeks',
      type: 'CERTIFICATE',
      badges: ['PLACEMENT ASSISTANCE', 'NCVET ACCREDITED'],
      stats: { salary: '₹4- ₹9.2 LPA', rating: '4.5/5' }
    },
  ],
  software: [], cyber: [], cloud: [], marketing: [], gniit: [], finance: [], certification: [],
};

const ProgramCard = ({ program }: { program: any }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    className="bg-white rounded-2xl border border-slate-100 overflow-hidden flex flex-col hover:shadow-2xl hover:shadow-blue-500/10 transition-all group h-full min-w-[280px] md:min-w-0"
  >
    <div className="relative h-44 overflow-hidden">
      <img 
        src={program.image} 
        alt={program.title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute top-2 left-2 flex flex-col gap-1">
        {program.badges?.map((badge: string, bIdx: number) => (
          <span 
            key={bIdx}
            className={`px-2 py-0.5 rounded text-[10px] font-black text-white ${
              badge.includes('PLACEMENT') ? 'bg-purple-600' :
              badge.includes('NCVET') ? 'bg-green-600' :
              badge.includes('SKILL-UP') ? 'bg-indigo-600' :
              'bg-purple-800'
            }`}
          >
            {badge}
          </span>
        ))}
      </div>
    </div>

    <div className="p-5 flex flex-col flex-1">
      <div className="flex items-center gap-3 mb-4">
        <span className="px-2 py-1 bg-cyan-100 text-cyan-700 text-[10px] font-black rounded uppercase">
          {program.type}
        </span>
        <div className="flex items-center gap-1 text-slate-400 text-xs font-bold">
          <Clock className="w-3 h-3" />
          {program.duration}
        </div>
      </div>

      <h4 className="text-lg font-black text-slate-900 mb-3 leading-tight min-h-[50px]">
        {program.title}
      </h4>
      
      <p className="text-slate-500 text-xs font-medium mb-6 line-clamp-2">
        {program.description}
      </p>

      {program.stats && (
        <div className="mt-auto mb-6 space-y-2">
          <div className="flex items-center gap-2 text-[10px] font-bold text-slate-600">
             <span className="text-blue-500 italic">↗</span> Avg. Salary: {program.stats.salary}
          </div>
          <div className="flex items-center gap-2 text-[10px] font-bold text-slate-600">
             <Award className="w-3 h-3 text-purple-500" /> AI Mentor Rating {program.stats.rating}
          </div>
        </div>
      )}

      <button className="mt-auto w-full py-3 bg-[#2563EB] hover:bg-blue-700 text-white font-black text-sm rounded-xl transition-all shadow-md shadow-blue-200 flex items-center justify-center gap-2 group/btn">
        View & Apply
      </button>
    </div>
  </motion.div>
);

export default function ExplorePrograms() {
  const [activeTab, setActiveTab] = useState('genai');
  const [expandedMobile, setExpandedMobile] = useState<string | null>('genai');

  return (
    <section className="py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-blue-100 shadow-sm mb-6"
          >
            <GraduationCap className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Explore Programs</span>
          </motion.div>
          
          <motion.h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            EXPLORE OUR PROGRAMS
          </motion.h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">
            Find the right program to build in-demand skills and advance your career.
          </p>
        </div>

        {/* Desktop View */}
        <div className="hidden lg:flex flex-row gap-8">
          {/* Sidebar */}
          <div className="w-1/4 space-y-3">
            {CATEGORIES.map((cat, idx) => (
              <motion.button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`w-full flex items-center justify-between p-4 rounded-xl transition-all duration-300 text-left group ${
                  activeTab === cat.id 
                    ? 'bg-blue-50 text-blue-600 shadow-sm border-l-4 border-blue-600' 
                    : 'bg-white text-slate-600 hover:bg-slate-50 border border-transparent'
                }`}
              >
                <div className="flex items-center gap-3">
                  <cat.icon className={`w-5 h-5 ${activeTab === cat.id ? 'text-blue-600' : 'text-slate-400 group-hover:text-blue-500'}`} />
                  <span className="font-bold text-sm tracking-tight">{cat.name}</span>
                </div>
                {activeTab === cat.id && <ChevronRight className="w-5 h-5 transition-transform" />}
              </motion.button>
            ))}
          </div>

          {/* Program Grid */}
          <div className="w-3/4 bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/50">
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-100">
               <div className="w-1.5 h-8 bg-blue-600 rounded-full"></div>
               <h3 className="text-2xl font-black text-slate-900">{CATEGORIES.find(c => c.id === activeTab)?.name}</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="wait">
                {PROGRAMS_DATA[activeTab]?.length > 0 ? (
                  PROGRAMS_DATA[activeTab].map((program) => (
                    <ProgramCard key={program.id} program={program} />
                  ))
                ) : (
                  <div className="col-span-full py-20 text-center text-slate-400 font-medium">
                    New programs coming soon for this category.
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Mobile View (Accordions) */}
        <div className="lg:hidden space-y-4">
          {CATEGORIES.map((cat) => (
            <div key={cat.id} className="overflow-hidden">
               <button
                  onClick={() => setExpandedMobile(expandedMobile === cat.id ? null : cat.id)}
                  className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all duration-300 border ${
                    expandedMobile === cat.id 
                      ? 'bg-blue-50 border-blue-200' 
                      : 'bg-white border-slate-100'
                  }`}
               >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-xl transition-colors ${expandedMobile === cat.id ? 'bg-[#2563EB] text-white' : 'bg-slate-100 text-slate-500'}`}>
                      <cat.icon className="w-5 h-5" />
                    </div>
                    <span className={`font-black text-sm ${expandedMobile === cat.id ? 'text-[#2563EB]' : 'text-slate-700'}`}>
                      {cat.name}
                    </span>
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-black ${expandedMobile === cat.id ? 'bg-[#2563EB] text-white' : 'bg-slate-100 text-slate-500'}`}>
                      {cat.count}
                    </span>
                  </div>
                  <div className={`p-1.5 rounded-full transition-all ${expandedMobile === cat.id ? 'bg-blue-100 text-blue-600 rotate-180' : 'bg-slate-50 text-slate-400'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
               </button>

               <AnimatePresence>
                 {expandedMobile === cat.id && (
                   <motion.div
                     initial={{ height: 0, opacity: 0 }}
                     animate={{ height: 'auto', opacity: 1 }}
                     exit={{ height: 0, opacity: 0 }}
                     transition={{ duration: 0.3, ease: 'easeInOut' }}
                   >
                     <div className="pt-4 pb-2 px-1">
                        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x">
                          {PROGRAMS_DATA[cat.id]?.length > 0 ? (
                            PROGRAMS_DATA[cat.id].map((program) => (
                              <div key={program.id} className="snap-center">
                                <ProgramCard program={program} />
                              </div>
                            ))
                          ) : (
                            <div className="w-full py-10 text-center text-slate-400 text-sm font-medium">
                              New programs coming soon...
                            </div>
                          )}
                        </div>
                     </div>
                   </motion.div>
                 )}
               </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
