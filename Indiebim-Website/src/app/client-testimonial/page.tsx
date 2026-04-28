'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const TESTIMONIALS = [
  { name: "Amisha Patel", text: "This is one of the best debugging agency in Mumbai. I really like this and suggest it to everyone. You should try this at once for better service given by them." },
  { name: "Anupam Pramanik", text: "This is the best place for technology solutions. Best bug detector best bug Sweepers in Mumbai. They are highly professional. Everyone should visit this place." },
  { name: "Riddhi Sen", text: "This is very good place you will get the best service of dubbing. I really like this place I am impressed by they are service really awesome." },
  { name: "Nantu Mandal", text: "One of the best bug detector, debugging centre in Mumbai. They are really professional. Highly satisfied with their services." },
  { name: "Anil Kumar", text: "This is the Best Bug Sweeper in Mumbai. It's amazing. Highly recommended to all. The service is nice." },
  { name: "Sunita Baidya", text: "Had a great experience over there would like to recommend them to you all. Best Technical Surveillance Counter Measure Services in Mumbai." },
  { name: "Sidhhart Malhotra", text: "According to me this is the Best Debugging Services in Mumbai. I am very impressed with their service. They are the best Debugger in Mumbai." },
  { name: "Diljit Kumar", text: "Recently found this technology solutions centre and they are really good at their work. Best bug detector in Mumbai, Best bug sweepers in Mumbai." },
  { name: "Sourav Bijlani", text: "Best Debugging Services in Mumbai. Very helpful and supportive. Highly recommended for everyone." },
  { name: "Manisha Debnath", text: "They have the team of very well specialised and well experienced staff. Great customer service. They are the Best Debugger in Mumbai." },
  { name: "Santosh Arya", text: "Highly professional team in Mumbai. Best bug detector in Mumbai. I recommended everyone to use their services. Staff are also very highly experienced. Price is reasonable." },
  { name: "Shantanu Roy", text: "Best Bug Detector in Mumbai." },
  { name: "Sachin Mapari", text: "Best bug sweepers in Mumbai. Very professional service with creative ideas and informed decisions. Nice service provided." },
  { name: "Rahul Singh", text: "I have very happy with the service they provides. They are best in the purpose. Best Debugging agency in Mumbai." },
  { name: "Himanshu Pandey", text: "This is the best bug sweeping services in Mumbai. You cannot find any other solution centre. This is the TSCM services in Mumbai." },
  { name: "Harshad Jain", text: "Best Debugging Services in Mumbai. Very helpful and supportive. Highly recommended for everyone." },
  { name: "Akash Jain", text: "If you're searching for TSCM services in Mumbai - This is the Best Technical Surveillance Counter Measure Services in Mumbai." },
  { name: "Bishal Saha", text: "It is the Best bug sweeping services provider. And service is very fast. Best tscm services in Mumbai so I also recommended to visit this IndieBIM technology service centre." },
  { name: "Haresh Suthar", text: "This very good technology for Mumbai best technical surveillance counter measures service in Mumbai. I like this place, super work." },
  { name: "Soumik Hati", text: "Best TSCM service in Mumbai. I recommend to all my friends. Service is really good. I like this service. Workers are really good." },
  { name: "Raisa Amin Sarker", text: "Best Counter surveillance in Mumbai by IndieBIM Technology." },
  { name: "Gaurav Kohli", text: "The Indiebim provides you highly satisfying service they are the best in debugging industry in Mumbai." },
  { name: "Pawan Kohli", text: "Indiebim is the best bugsweepers in Mumbai. They are Highly professional experts." },
  { name: "Amarnath Mahtoi", text: "One of the best company for Best Bug Sweeper in Mumbai, good behaviour, good management, reasonable prices, affordable prices, good services." },
  { name: "Mit Kumar", text: "Best Bug Sweepers in Mumbai highly professional team and good knowledge about that work." },
  { name: "Khushi Sharma", text: "Best tscm services in Mumbai." },
  { name: "Simran Roy", text: "Hey guys this is one of the best bug sweepers in Mumbai, I really like this and suggest it to everyone. You should try this at once." },
  { name: "Firoz Khan", text: "Best Bug Sweeping Services in Mumbai. I loved their service very much. I recommend to everyone its really awesome service in Mumbai." },
  { name: "Vikas Gill", text: "Best Debugging agency in Mumbai, it is great concept for all time." },
  { name: "Munmun Mahto", text: "Very nice and best debugging service providers in Mumbai is this IndieBIM Technology Solutions really very nice and awesome, guys try them once." },
  { name: "Abhi Chaudhry", text: "Best Bug Sweeper in Mumbai." },
  { name: "Henil Gandhi", text: "Best Bug Sweeping Services in Mumbai, they help me with my all the bugs to solve them easily and on time." },
  { name: "Puja Das", text: "Best TSCM services, Best Technical Surveillance Counter Measure Service, I love this service and here helpful service, I suggest to everybody." },
  { name: "Veerabhadram Mondi", text: "Best bug Sweeping services in Mumbai available at less price, great to have such type of technology." },
  { name: "Suthar Harsh", text: "wow this place is best bug Sweeper in Mumbai good work for this technology, all of best debugger in Mumbai. I trusted this place." },
  { name: "Amit Sona", text: "Best dubbing service in Mumbai they provide very nice service with very less cost they are the best in Mumbai." },
  { name: "Heena Turk", text: "They use latest tscm and debugging equipment in finding of hidden electronic bugs. Highly professional and experienced staff for bug sweeping. Highly recommended for corporate technical surveillance counter measure services in Mumbai." },
  { name: "Reena Dsouza", text: "Very professional service with creative ideas and informed decisions." }
];

export default function ClientTestimonial() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 pt-32 pb-24 relative">
      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none">
         <div className="absolute top-0 right-0 w-full h-[600px] bg-gradient-to-b from-cyan-100/50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
         <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.h1 
               initial={{ opacity: 0, y: -20 }}
               animate={{ opacity: 1, y: 0 }}
               className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6"
            >
               Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-700">Testimonials</span>
            </motion.h1>
            <motion.p 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.1 }}
               className="text-slate-600 text-lg"
            >
               Our dedication to absolute security and privacy reflects in the experiences of our trusted clients nationwide.
            </motion.p>
            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.3 }}
               className="flex items-center justify-center gap-2 mt-8 bg-white border border-slate-200 w-max mx-auto px-6 py-3 rounded-full"
            >
               <span className="text-slate-900 font-bold text-lg">4.9 / 5.0</span>
               <div className="flex text-yellow-500">
                 {[...Array(5)].map((_, idx) => <Star key={idx} className="w-5 h-5 fill-current" />)}
               </div>
               <span className="text-slate-600 text-sm ml-2">Verified by Google</span>
            </motion.div>
         </div>

         {/* Grid of Testimonials - 3 columns */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((review, i) => (
               <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: (i % 6) * 0.05 }}
                  className="bg-white p-8 rounded-3xl border border-slate-200 relative hover:border-cyan-500/30 hover:shadow-md transition-all group"
               >
                  <Quote className="w-10 h-10 text-cyan-600/20 absolute top-6 right-6 group-hover:text-cyan-600/40 transition-colors" />
                  
                  <div className="flex text-yellow-500 mb-6">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-slate-700 mb-8 italic text-sm leading-relaxed relative z-10">
                     &ldquo;{review.text}&rdquo;
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg shrink-0">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <h5 className="text-slate-900 font-bold text-sm">{review.name}</h5>
                      <p className="text-slate-400 text-xs">Verified Google Review</p>
                    </div>
                  </div>
               </motion.div>
            ))}
         </div>
      </div>
    </div>
  );
}
