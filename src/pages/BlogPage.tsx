import React from 'react';

export default function BlogPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Featured Post */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
        <div className="rounded-2xl overflow-hidden aspect-video">
          <img src="https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Featured" className="w-full h-full object-cover" />
        </div>
        <div>
          <span className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold inline-block mb-4">Featured Post</span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">Top 5 Skills Every IT Student Should Learn</h1>
          <p className="text-gray-600 mb-6 text-lg">To succeed in the IT industry, students need more than just theoretical knowledge.</p>
          <button className="bg-blue-800 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-900 transition-colors">Read More</button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Latest Articles */}
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
                <div className="rounded-xl overflow-hidden h-48 mb-4">
                  <img src={`https://picsum.photos/seed/${i}/400/300`} alt="Post" className="w-full h-full object-cover" />
                </div>
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold mb-3 inline-block">Category</span>
                <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">Article Title Goes Here {i}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">This is a short description of the article. It provides a brief overview of what the post is about.</p>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-3">
                    <img src={`https://i.pravatar.cc/150?img=${i}`} alt="Author" className="w-8 h-8 rounded-full" />
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900">Author Name</h4>
                      <p className="text-xs text-gray-500">Oct 26, 2023</p>
                    </div>
                  </div>
                  <button className="text-blue-800 font-bold text-sm hover:underline">Read More</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Popular Posts</h3>
            <div className="space-y-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex gap-4 items-center">
                  <h4 className="font-semibold text-sm text-gray-900 flex-1 leading-tight">This is a popular post title that wraps to multiple lines</h4>
                  <img src={`https://picsum.photos/seed/${i + 10}/100/100`} alt="Popular" className="w-16 h-16 rounded-lg object-cover" />
                </div>
              ))}
            </div>
          </div>

          <div className="bg-blue-50 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Subscribe to Our Newsletter</h3>
            <p className="text-gray-600 text-sm mb-4">Sign up to receive the latest news and updates.</p>
            <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-lg border border-gray-200 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-600" />
            <button className="w-full bg-blue-700 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
}
