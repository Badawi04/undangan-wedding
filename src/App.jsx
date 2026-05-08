// App.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Music, VolumeX } from 'lucide-react';
import Cover from './components/Cover';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Couple from './components/Couple';
import Event from './components/Event';
import Story from './components/Story';
import Gallery from './components/Gallery';
import Lightbox from './components/Lightbox';
import Gift from './components/Gift';
import Footer from './components/Footer';
import Toast from './components/Toast';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [guestName, setGuestName] = useState('Tamu Undangan');
  const [isPlaying, setIsPlaying] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [navbarBg, setNavbarBg] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const audioRef = useRef(null);

  // Get guest name from URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const name = params.get('to');
    if (name) setGuestName(name);
  }, []);

  // Scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setNavbarBg(window.scrollY > 50);
      
      // Reveal animation
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run once on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Countdown timer
  const [countdown, setCountdown] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const weddingDate = new Date('2026-06-07T08:00:00').getTime();
      const now = new Date().getTime();
      const distance = weddingDate - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setCountdown({
          days: String(days).padStart(2, '0'),
          hours: String(hours).padStart(2, '0'),
          minutes: String(minutes).padStart(2, '0'),
          seconds: String(seconds).padStart(2, '0')
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const openInvitation = () => {
    setIsOpen(true);
    // Confetti effect
    import('canvas-confetti').then((confetti) => {
      confetti.default({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#fb7185', '#fda4af', '#fecdd3', '#9CAF88']
      });
    });
    
    // Auto play music
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      audioRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const showToastMessage = (message) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      showToastMessage('Nomor rekening berhasil disalin!');
    });
  };

  const addToCalendar = () => {
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent('Wedding of Rizal & Lutfiah')}&dates=20241225T080000/20241225T150000&location=${encodeURIComponent('Ballroom Grand Hotel, Jakarta')}&details=Wedding+Ceremony+and+Reception`;
    window.open(googleCalendarUrl, '_blank');
    showToastMessage('Dibuka di Google Calendar');
  };

  const galleryImages = [
    // GALERI 1 - Ganti URL ini dengan foto Anda
    '/images/images 1.jpeg',
    // GALERI 2 - Ganti URL ini dengan foto Anda
    '/images/images 2.jpeg',
    // GALERI 3 - Ganti URL ini dengan foto Anda
    '/images/images 3.jpeg',
    // GALERI 4 (WIDE) - Ganti URL ini dengan foto Anda
    '/images/images 4.jpeg',
    // GALERI 5 - Ganti URL ini dengan foto Anda
    '/images/images 5.jpeg',
    // GALERI 6 - Ganti URL ini dengan foto Anda
    '/images/images 6.jpeg',
    // GALERI 7 - Ganti URL ini dengan foto Anda
    '/images/images 7.jpeg',
    // GALERI 8 (WIDE) - Ganti URL ini dengan foto Anda
    '/images/images 8.jpeg',
    // GALERI 10 - Ganti URL ini dengan foto Anda
    '/images/images 9.jpeg',
    // GALERI 9 - Ganti URL ini dengan foto Anda
    '/images/images 10.jpeg'
  ];

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const changeImage = (direction) => {
    setCurrentImageIndex((prev) => {
      const newIndex = prev + direction;
      if (newIndex >= galleryImages.length) return 0;
      if (newIndex < 0) return galleryImages.length - 1;
      return newIndex;
    });
  };

  return (
    <div className="bg-stone-50 text-gray-800 font-sans">
      {/* Audio Player */}
      <div className={`fixed bottom-5 right-5 z-50 ${!isOpen && 'hidden'}`}>
        <button 
          onClick={toggleMusic}
          className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-rose-500 hover:scale-110 transition-transform"
        >
          {isPlaying ? <Music size={20} /> : <VolumeX size={20} />}
        </button>
        <audio ref={audioRef} loop>
          <source src="/audio/Music.mp3" type="audio/mpeg" />
        </audio>
      </div>

      {/* Cover Section */}
      {!isOpen && <Cover guestName={guestName} onOpen={openInvitation} />}

      {/* Main Content */}
      {isOpen && (
        <main className="opacity-100 transition-opacity duration-1000">
          <Navbar 
            navbarBg={navbarBg} 
            mobileMenuOpen={mobileMenuOpen} 
            setMobileMenuOpen={setMobileMenuOpen} 
          />
          <Hero countdown={countdown} />
          <Couple />
          <Event onAddToCalendar={addToCalendar} />
          <Story />
          <Gallery images={galleryImages} onOpenLightbox={openLightbox} />
          <Gift onCopy={copyToClipboard} />
          <Footer />
        </main>
      )}

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox 
          images={galleryImages}
          currentIndex={currentImageIndex}
          onClose={closeLightbox}
          onChangeImage={changeImage}
        />
      )}

      {/* Toast Notification */}
      <Toast message={toastMessage} show={showToast} />
    </div>
  );
};

export default App;