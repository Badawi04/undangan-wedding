import React from 'react';
import { Heart, Calendar, Clock, MapPin, Wine, CalendarPlus } from 'lucide-react';

const Event = ({ onAddToCalendar }) => {
  return (
    <section id="event" className="py-20 px-4 bg-stone-100 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-32 bg-linear-to-b from-white to-transparent"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16 reveal">
          <p className="text-gray-800 text-sm tracking-widest uppercase mb-2">Wedding Schedule</p>
          <h2 className="font-serif text-4xl md:text-5xl text-gray-800">Save The Date</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Akad Nikah */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-300 reveal hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Heart size={32} className="text-gray-900" />
            </div>
            <h3 className="font-serif text-2xl text-center text-gray-800 mb-4">Akad Nikah</h3>
            <div className="space-y-4 text-center">
              <div className="flex items-center justify-center gap-2 text-gray-600">
                <Calendar size={16} />
                <span>Kamis, 04 Juni 2026</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-gray-600">
                <Clock size={16} />
                <span>08:00 WIB - Selesai</span>
              </div>
              <div className="pt-4 border-t border-gray-100">
                <p className="font-medium text-gray-800 mb-1">Kediaman Mempelai Wanita</p>
                <p className="text-sm text-gray-500">Ds. Wilyut RT 07 RW 02 Dsn. Klagen, Sukodono, Sidoarjo</p>
              </div>
              <a 
                href="https://maps.app.goo.gl/9dtV7TGL7H4R6yQc6" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 px-6 py-2 bg-gray-900 text-white rounded-full text-sm hover:bg-gray-950 transition-colors"
              >
                <MapPin size={16} />
                Lihat Lokasi
              </a>
            </div>
          </div>

          {/* Resepsi */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-300 reveal hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Wine size={32} className="text-gray-900" />
            </div>
            <h3 className="font-serif text-2xl text-center text-gray-800 mb-4">Resepsi</h3>
            <div className="space-y-4 text-center">
              <div className="flex items-center justify-center gap-2 text-gray-600">
                <Calendar size={16} />
                <span>Minggu, 07 Juni 2026</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-gray-600">
                <Clock size={16} />
                <span>09:00 WIB - Selesai </span>
              </div>
              <div className="pt-4 border-t border-gray-100">
                <p className="font-medium text-gray-800 mb-1">Kediaman Mempelai Wanita</p>
                <p className="text-sm text-gray-500">Ds. Wilyut RT 07 RW 02 Dsn. Klagen, Sukodono, Sidoarjot</p>
              </div>
              <a 
                href="https://maps.app.goo.gl/9dtV7TGL7H4R6yQc6" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 px-6 py-2 bg-gray-900 text-white rounded-full text-sm hover:bg-gray-950 transition-colors"
              >
                <MapPin size={16} />
                Lihat Lokasi
              </a>
            </div>
          </div>
        </div>

        {/* Calendar Add Button */}
        <div className="text-center mt-12 reveal">
          <button 
            onClick={onAddToCalendar}
            className="px-8 py-3 border-2 border-gray-800 text-gray-800 rounded-full hover:bg-gray-800 hover:text-white transition-all duration-300 flex items-center gap-2 mx-auto"
          >
            <CalendarPlus size={20} />
            Tambah ke Kalender
          </button>
        </div>
      </div>
    </section>
  );
};

export default Event;
