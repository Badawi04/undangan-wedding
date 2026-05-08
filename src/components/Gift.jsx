import React, { useState, useEffect } from 'react';
import { Copy, Send, QrCode } from 'lucide-react';
import { supabase } from '../lib/supabase';

const Gift = ({ onCopy }) => {
  const [wishes, setWishes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    status: 'Hadir',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Load wishes dari Supabase
  useEffect(() => {
    loadWishes();
  }, []);

  const loadWishes = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('wishes')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      
      const formattedWishes = data.map(wish => ({
        ...wish,
        time: formatTime(new Date(wish.created_at))
      }));
      
      setWishes(formattedWishes);
    } catch (error) {
      console.error('Error loading wishes:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatTime = (date) => {
    const now = new Date();
    const diff = now - date;
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 1) return 'Baru saja';
    if (minutes < 60) return `${minutes} menit yang lalu`;
    if (hours < 24) return `${hours} jam yang lalu`;
    if (days === 1) return '1 hari yang lalu';
    return `${days} hari yang lalu`;
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'Hadir': return 'bg-green-100 text-green-700';
      case 'Tidak Hadir': return 'bg-red-100 text-red-700';
      default: return 'bg-yellow-100 text-yellow-700';
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.message.trim()) {
      alert('Nama dan pesan tidak boleh kosong');
      return;
    }

    try {
      setIsSubmitting(true);
      
      const { data, error } = await supabase
        .from('wishes')
        .insert([
          {
            name: formData.name,
            status: formData.status,
            message: formData.message,
            time: 'Baru saja'
          }
        ])
        .select();

      if (error) throw error;

      // Tambah ke state dengan format yang sesuai
      const newWish = {
        ...data[0],
        time: 'Baru saja'
      };
      
      setWishes([newWish, ...wishes]);
      setFormData({ name: '', status: 'Hadir', message: '' });
      alert('Ucapan berhasil dikirim! Terima kasih 🎉');
    } catch (error) {
      console.error('Error submitting wish:', error);
      alert('Gagal mengirim ucapan. Silakan coba lagi.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="gift" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 reveal">
          <p className="text-gray-800 text-sm tracking-widest uppercase mb-2">Wedding Gift</p>
          <h2 className="font-serif text-4xl md:text-5xl text-gray-800">Kirim Hadiah</h2>
          <p className="text-gray-600 mt-4 max-w-xl mx-auto">
            Doa restu Anda merupakan karunia yang sangat berarti bagi kami. Namun jika memberi adalah ungkapan tanda kasih Anda, Anda dapat memberikan kado secara cashless.
          </p>
        </div>

        {/* Bank Transfer */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-linear-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200 reveal">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xs">
                BCA
              </div>
              <div>
                <p className="font-medium text-gray-800">Bank BCA</p>
                <p className="text-sm text-gray-500">a.n Rizal</p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 flex items-center justify-between border border-gray-200">
              <span className="font-mono text-lg font-bold text-gray-800">1234567890</span>
              <button 
                onClick={() => onCopy('1234567890')}
                className="text-gray-900 hover:text-gray-950 flex items-center gap-1 text-sm font-medium"
              >
                <Copy size={16} />
                Copy
              </button>
            </div>
          </div>

          <div className="bg-linear-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200 reveal">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center text-white font-bold text-xs">
                BNI
              </div>
              <div>
                <p className="font-medium text-gray-800">Bank BNI</p>
                <p className="text-sm text-gray-500">a.n Lutfiah</p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 flex items-center justify-between border border-gray-200">
              <span className="font-mono text-lg font-bold text-gray-800">0987654321</span>
              <button 
                onClick={() => onCopy('0987654321')}
                className="text-gray-900 hover:text-gray-950 flex items-center gap-1 text-sm font-medium"
              >
                <Copy size={16} />
                Copy
              </button>
            </div>
          </div>
        </div>

        
        {/* Ucapan/RSVP Form */}
        <div className="max-w-2xl mx-auto mt-16 reveal">
          <h3 className="font-serif text-2xl text-center text-gray-800 mb-6">Kirim Ucapan & Doa</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input 
                type="text" 
                placeholder="Nama Anda" 
                required 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-100"
              />
              <select 
                value={formData.status}
                onChange={(e) => setFormData({...formData, status: e.target.value})}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-100"
              >
                <option value="Hadir">Hadir</option>
                <option value="Tidak Hadir">Tidak Hadir</option>
                
              </select>
            </div>
            <textarea 
              placeholder="Tulis ucapan dan doa untuk mempelai..." 
              required 
              rows="4"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-100 resize-none"
            ></textarea>
            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 disabled:bg-gray-400 transition-colors font-medium flex items-center justify-center gap-2"
            >
              <Send size={20} />
              {isSubmitting ? 'Mengirim...' : 'Kirim Ucapan'}
            </button>
          </form>

          {/* Ucapan List */}
          <div className="mt-8 space-y-4 max-h-96 overflow-y-auto">
            {loading ? (
              <div className="text-center py-8 text-gray-500">
                Memuat ucapan...
              </div>
            ) : wishes.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                Belum ada ucapan. Jadilah yang pertama mengirim! 💌
              </div>
            ) : (
              wishes.map((wish, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-medium text-gray-800">{wish.name}</h4>
                      <span className={`inline-block px-2 py-1 text-xs rounded-full ${getStatusColor(wish.status)} mt-1`}>
                        {wish.status}
                      </span>
                    </div>
                    <span className="text-xs text-gray-400">{wish.time}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{wish.message}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gift;
