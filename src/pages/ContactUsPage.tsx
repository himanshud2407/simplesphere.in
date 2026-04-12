import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';


export default function ContactUsPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-600 py-24 text-center text-white">
        <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg text-blue-100 max-w-2xl mx-auto">We'd love to hear from you. Reach out with any questions or feedback.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Your Name</label>
                <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600" />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Your Email</label>
                <input type="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600" />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Subject</label>
                <input type="text" placeholder="Subject" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600" />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea rows={4} placeholder="Message" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"></textarea>
              </div>
              <button type="button" className="w-full bg-blue-700 text-white py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors">Send Message</button>
            </form>
          </div>

          {/* Connect Info */}
          <div className="space-y-8 mt-12 lg:mt-0 pt-6">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 mt-8">Get in <span className="text-blue-700">Touch</span></h2>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-700">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">SimpleSphere</h3>
                    <p className="text-gray-600">IIF RSCOE Tathawade Pune , Opp. of People Bank Ring , Jalgaon</p>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-700">
                    <Phone className="w-6 h-6" />
                  </div>
                  <p className="text-gray-600 text-lg">+91 9529044429 </p>
                </li>
                <li className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-700">
                    <Mail className="w-6 h-6" />
                  </div>
                  <p className="text-gray-600 text-lg">contact@simplesphere.in</p>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl overflow-hidden h-64 border border-gray-200 shadow-sm relative bg-gray-200">
               {/* Map Placeholder */}
              {/* <img src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d200272.28616682577!2d75.72458380925949!3d21.139194631857812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4694999dcbdd588d%3A0x432bb19a66d10704!2sSimplesphere%20Technologies!5e0!3m2!1sen!2sin!4v1775993718544!5m2!1sen!2sin" alt="Map" className="w-full h-full object-cover opacity-70" /> */}
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1582.3173525039763!2d75.55496765734033!3d21.00834070207936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4694999dcbdd588d%3A0x432bb19a66d10704!2sSimplesphere%20Technologies!5e1!3m2!1sen!2sin!4v1775993971099!5m2!1sen!2sin" width="600" height="450" ></iframe>
            </div>

            <div className="bg-indigo-50 rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Got <span className="text-blue-700">Questions?</span></h3>
              <p className="text-gray-600 mb-4">Check our FAQ for quick answers.</p>
              <a href="#" className="text-blue-800 font-bold hover:underline">View FAQ</a>
              
              <div className="border-t border-indigo-100 my-4"></div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">What's roaming us?</h3>
              <p className="text-gray-600 mb-4">Check our FAQ for quick answers.</p>
              <a href="#" className="text-blue-800 font-bold hover:underline">View FAQ</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
