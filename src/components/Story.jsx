import React from 'react';

const Story = () => {
  const stories = [
    { year: '2019', title: 'Pertama Bertemu', description: 'Pertemuan pertama kami di sebuah kafe di Jakarta. Hujan turun deras saat itu, dan kami berbagi satu payung untuk pergi ke stasiun terdekat.' },
    { year: '2020', title: 'Jadian', description: 'Setelah berteman dekat selama setahun, kami memutuskan untuk menjalin hubungan. Momen spesial di taman kota saat senja.' },
    { year: '2022', title: 'Lamaran', description: 'Rizal melamar Lutfiah di tempat pertama kali mereka bertemu. Dengan cincin sederhana namun penuh makna.' },
    { year: '2024', title: 'Menikah', description: 'Hari yang kami nantikan akhirnya tiba. Kami siap membangun rumah tangga bersama.' }
  ];

  return (
    <section id="story" className="py-20 px-4 bg-white relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 reveal">
          <p className="text-gray-800 text-sm tracking-widest uppercase mb-2">Our Journey</p>
          <h2 className="font-serif text-4xl md:text-5xl text-gray-800">Cerita Cinta Kami</h2>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-gray-800 to-gray-600 transform -translate-x-1/2"></div>
          <div className="md:hidden absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-gray-800 to-gray-600 transform -translate-x-1/2"></div>
          
          {stories.map((story, index) => (
            <div 
              key={index}
              className={`relative mb-12 reveal md:flex items-stretch ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Desktop spacer */}
              <div className="hidden md:block md:w-1/2"></div>
              
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 top-2 md:top-0 z-20 w-6 h-6 transform -translate-x-1/2">
                <div className="w-6 h-6 bg-white border-4 border-gray-800 rounded-full"></div>
              </div>
              
              {/* Content */}
              <div className={`ml-20 md:ml-0 md:w-1/2 ${
                index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'
              }`}>
                <span className="text-gray-800 text-sm font-bold">{story.year}</span>
                <h4 className="font-serif text-xl font-bold text-gray-800 mt-1">{story.title}</h4>
                <p className="text-gray-600 mt-2 text-sm">{story.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Story;
