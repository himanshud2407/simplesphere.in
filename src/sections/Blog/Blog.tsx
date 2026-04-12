import { BLOGS } from '@/constants';
import { motion } from 'motion/react';

export default function Blog() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Explore Expert Articles</h2>
            <p className="text-gray-500 mt-2">Learn from our experts and stay updated with the latest trends.</p>
          </div>
          <button className="text-blue-600 font-semibold hover:underline">View All</button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOGS.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative h-64 rounded-2xl overflow-hidden mb-6">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="text-sm text-blue-600 font-semibold mb-3">{blog.date}</div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight">
                {blog.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
