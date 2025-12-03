import { useState } from 'react';
import svgPaths from "./imports/svg-abgp9vrkcq";
import imgRectangle11 from "figma:asset/cc7eb470058df007e960d5ff70322a4d327d25ca.png";
import imgKotimRemovebgPreview1 from "figma:asset/f2e75a82f104c7beb1f6d7c1ff14d0e0d63292c1.png";
import imgRectangle15 from "figma:asset/b37ca6b1b521387c92a4d07f5ee3b6856fd8f904.png";
import imgRectangle14 from "figma:asset/b4e95e5d5a9acfdce4e2a38c084be89e923eab49.png";
import imgRectangle10 from "figma:asset/fe276614660bb05248569f4094ec57dabdaabd04.png";
import imgBatik from "figma:asset/38550f5b215e2e689e62c790cbdc105730482f8d.png";
import { Menu, X, Search as SearchIcon } from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState('beranda');

  const handleNewsClick = (newsTitle: string) => {
    alert(`Membuka detail berita: ${newsTitle}`);
  };

  const handleServiceClick = (serviceName: string) => {
    alert(`Membuka layanan: ${serviceName}`);
  };

  const handleViewMore = () => {
    alert('Memuat berita lebih banyak...');
  };

  const handleNavClick = (page: string) => {
    setActivePage(page);
    setMobileMenuOpen(false);
    
    // Scroll to section based on page
    if (page === 'beranda') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'informasi') {
      const section = document.getElementById('program-layanan');
      section?.scrollIntoView({ behavior: 'smooth' });
    } else if (page === 'profil') {
      alert('Halaman Profil - Dalam pengembangan');
    } else if (page === 'berita') {
      const section = document.getElementById('berita-terbaru');
      section?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      {/* Header */}
      <header className="bg-[#4969E9] sticky top-0 z-50">
        <div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={imgKotimRemovebgPreview1} 
              alt="Logo Kotim" 
              className="h-12 w-auto object-contain"
            />
            <span className="ml-3 text-white font-bold text-sm hidden md:block">
              INSPEKTORAT KOTIM
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <button 
              onClick={() => handleNavClick('beranda')}
              className={`px-4 py-2 text-white text-sm font-semibold transition rounded ${
                activePage === 'beranda' 
                  ? 'bg-[#336fab]' 
                  : 'hover:bg-[#336fab]/50'
              }`}
            >
              Beranda
            </button>
            <button 
              onClick={() => handleNavClick('informasi')}
              className={`px-4 py-2 text-white text-sm font-semibold transition rounded ${
                activePage === 'informasi' 
                  ? 'bg-[#336fab]' 
                  : 'hover:bg-[#336fab]/50'
              }`}
            >
              Informasi
            </button>
            <button 
              onClick={() => handleNavClick('profil')}
              className={`px-4 py-2 text-white text-sm font-semibold transition rounded ${
                activePage === 'profil' 
                  ? 'bg-[#336fab]' 
                  : 'hover:bg-[#336fab]/50'
              }`}
            >
              Profil
            </button>
            <button 
              onClick={() => handleNavClick('berita')}
              className={`px-4 py-2 text-white text-sm font-semibold transition rounded ${
                activePage === 'berita' 
                  ? 'bg-[#336fab]' 
                  : 'hover:bg-[#336fab]/50'
              }`}
            >
              Berita
            </button>
          </nav>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex items-center bg-white/20 rounded-full px-4 py-2 max-w-xs">
            <input 
              type="text" 
              placeholder="Cari" 
              className="bg-transparent text-white placeholder-white/70 text-sm outline-none w-full"
            />
            <SearchIcon className="w-5 h-5 text-white ml-2" />
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#336fab] border-t border-white/10">
            <nav className="flex flex-col px-6 py-4 space-y-3">
              <button 
                onClick={() => handleNavClick('beranda')}
                className={`text-white text-sm font-semibold py-2 text-left transition ${
                  activePage === 'beranda' ? 'opacity-100 underline' : 'opacity-80'
                }`}
              >
                Beranda
              </button>
              <button 
                onClick={() => handleNavClick('informasi')}
                className={`text-white text-sm font-semibold py-2 text-left transition ${
                  activePage === 'informasi' ? 'opacity-100 underline' : 'opacity-80'
                }`}
              >
                Informasi
              </button>
              <button 
                onClick={() => handleNavClick('profil')}
                className={`text-white text-sm font-semibold py-2 text-left transition ${
                  activePage === 'profil' ? 'opacity-100 underline' : 'opacity-80'
                }`}
              >
                Profil
              </button>
              <button 
                onClick={() => handleNavClick('berita')}
                className={`text-white text-sm font-semibold py-2 text-left transition ${
                  activePage === 'berita' ? 'opacity-100 underline' : 'opacity-80'
                }`}
              >
                Berita
              </button>
              <div className="pt-2">
                <input 
                  type="text" 
                  placeholder="Cari" 
                  className="w-full bg-white/20 text-white placeholder-white/70 text-sm outline-none px-4 py-2 rounded-full"
                />
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] lg:h-[708px] overflow-hidden">
        <img 
          src={imgRectangle10} 
          alt="Hero" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
        
        <div className="relative max-w-[1400px] mx-auto px-6 h-full flex flex-col justify-center">
          <h1 className="text-white mb-4">
            <span className="block text-[#fffb00] text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
              INSPEKTORAT
            </span>
            <span className="block text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
              KOTAWARINGIN
            </span>
            <span className="block text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
              TIMUR
            </span>
          </h1>
          <p className="text-[#fffb00] text-3xl md:text-4xl lg:text-5xl font-bold transform -rotate-12 mt-4">
            Pasti !!!
          </p>
        </div>
      </section>

      {/* Berita Terbaru Section */}
      <section id="berita-terbaru" className="max-w-[1400px] mx-auto px-6 py-10 md:py-16">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px bg-[#E5E7EB]" />
          <h2 className="text-2xl font-bold text-black px-4">Berita Terbaru</h2>
          <div className="flex-1 h-px bg-[#E5E7EB]" />
        </div>

        {/* Featured News */}
        <div className="mb-8">
          <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="aspect-[4/3] relative overflow-hidden">
                <img 
                  src={imgRectangle11} 
                  alt="Featured news" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute top-4 left-0">
                  <span className="bg-[#f79009] text-white px-6 py-2 text-sm font-semibold">
                    Berita Terkini
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col justify-center">
                <h3 className="text-2xl font-semibold text-black mb-3 line-clamp-2">
                  Laporan Survei Kepuasan Masyarakat Pada Inspektor Daerah Kabupaten Kotawaringin Timur 2025
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  Oleh <span className="text-[#009945]">inspkotim</span> - Dipublikasikan 16 September 2022 - Di update 4 Juli 2025
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {/* Card 1 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="aspect-[4/3] relative overflow-hidden">
              <img 
                src={imgRectangle15} 
                alt="News 1" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-base font-semibold text-black mb-2 line-clamp-2">
                Pawai Pembangunan Inspektorat Sampit
              </h3>
              <p className="text-xs text-gray-500 mb-3">
                Oleh <span className="text-[#009945]">inspkotim</span> - Dipublikasikan 16 november 2025
              </p>
              <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 mb-4">
                Sampit – Minggu (21/08/2022) Dalam rangka memperingati Hari Proklamasi Kemerdekaan NKRI 17 Agustus 2022, Pemerintah Kabupaten Kotawaringin Timur mengadakan Pawai Pembangunan...
              </p>
              <button 
                onClick={() => handleNewsClick('Pawai Pembangunan Inspektorat Sampit')}
                className="w-full bg-[#4969E9] text-white py-2.5 px-4 rounded-xl text-sm font-semibold hover:bg-[#3a54c9] active:bg-[#2d3f99] transition"
              >
                Lihat Detail
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="aspect-[4/3] relative overflow-hidden">
              <img 
                src={imgRectangle14} 
                alt="News 2" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-base font-semibold text-black mb-2 line-clamp-2">
                Cek Fisik Desa Mekar Jaya Kec. Parenggean
              </h3>
              <p className="text-xs text-gray-500 mb-3">
                Oleh <span className="text-[#009945]">inspkotim</span> - Dipublikasikan 16 September 2025
              </p>
              <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 mb-4">
                Kecamatan Parenggean – Rabu (18/05/2022) Cek Fisik Kegiatan Dana Desa Tahun 2021 yang dilaksanakan oleh IRBAN II pada Desa Mekar Jaya Kecamatan Parenggean...
              </p>
              <button 
                onClick={() => handleNewsClick('Cek Fisik Desa Mekar Jaya Kec. Parenggean')}
                className="w-full bg-[#4969E9] text-white py-2.5 px-4 rounded-xl text-sm font-semibold hover:bg-[#3a54c9] active:bg-[#2d3f99] transition"
              >
                Lihat Detail
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="aspect-[4/3] relative overflow-hidden">
              <img 
                src={imgRectangle15} 
                alt="News 3" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-base font-semibold text-black mb-2 line-clamp-2">
                Pawai Pembangunan Inspektorat Sampit
              </h3>
              <p className="text-xs text-gray-500 mb-3">
                Oleh <span className="text-[#009945]">inspkotim</span> - Dipublikasikan 16 September 2022
              </p>
              <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 mb-4">
                Sampit – Minggu (21/08/2022) Dalam rangka memperingati Hari Proklamasi Kemerdekaan NKRI 17 Agustus 2022, Pemerintah Kabupaten Kotawaringin Timur mengadakan Pawai Pembangunan...
              </p>
              <button 
                onClick={() => handleNewsClick('Pawai Pembangunan Inspektorat Sampit')}
                className="w-full bg-[#4969E9] text-white py-2.5 px-4 rounded-xl text-sm font-semibold hover:bg-[#3a54c9] active:bg-[#2d3f99] transition"
              >
                Lihat Detail
              </button>
            </div>
          </div>
        </div>

        {/* View More Button */}
        <div className="text-center">
          <button 
            onClick={handleViewMore}
            className="text-[#4969e9] text-lg font-semibold hover:underline active:text-[#3a54c9] transition"
          >
            Lihat Lebih Banyak
          </button>
        </div>
      </section>

      {/* Program Layanan Section */}
      <section id="program-layanan" className="max-w-[1400px] mx-auto px-6 py-10 md:py-16">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="flex-1 h-px bg-[#E5E7EB]" />
          <h2 className="text-2xl font-bold text-black px-4">Program Layanan</h2>
          <div className="flex-1 h-px bg-[#E5E7EB]" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* Service 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-32 h-32 md:w-40 md:h-40 lg:w-52 lg:h-52 rounded-full bg-[#FFA940] flex items-center justify-center mb-4">
              <svg className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24" fill="none" viewBox="0 0 210 210">
                <path d={svgPaths.p307f64f1} fill="black" />
              </svg>
            </div>
            <h3 className="text-base md:text-lg lg:text-xl font-semibold text-black mb-4">
              Download Center
            </h3>
            <button 
              onClick={() => handleServiceClick('Download Center')}
              className="bg-[#0c008b] text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:bg-[#090066] active:bg-[#060044] transition w-full max-w-[180px]"
            >
              Buka Layanan
            </button>
          </div>

          {/* Service 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-32 h-32 md:w-40 md:h-40 lg:w-52 lg:h-52 rounded-full bg-[#C31E1E]/50 flex items-center justify-center mb-4">
              <svg className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24" fill="none" viewBox="0 0 210 210">
                <path d={svgPaths.p3bb6f700} fill="black" />
              </svg>
            </div>
            <h3 className="text-base md:text-lg lg:text-xl font-semibold text-black mb-4 line-clamp-2">
              Sistem Informasi Administrasi Pengawasan
            </h3>
            <button 
              onClick={() => handleServiceClick('Sistem Informasi Administrasi Pengawasan')}
              className="bg-[#0c008b] text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:bg-[#090066] active:bg-[#060044] transition w-full max-w-[180px]"
            >
              Buka Layanan
            </button>
          </div>

          {/* Service 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-32 h-32 md:w-40 md:h-40 lg:w-52 lg:h-52 rounded-full bg-[#42F21A]/50 flex items-center justify-center mb-4">
              <svg className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24" fill="none" viewBox="0 0 210 210">
                <path d={svgPaths.p3a93a3c0} fill="black" />
              </svg>
            </div>
            <h3 className="text-base md:text-lg lg:text-xl font-semibold text-black mb-4">
              Pengaduan Masyarakat
            </h3>
            <button 
              onClick={() => handleServiceClick('Pengaduan Masyarakat')}
              className="bg-[#0c008b] text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:bg-[#090066] active:bg-[#060044] transition w-full max-w-[180px]"
            >
              Buka Layanan
            </button>
          </div>

          {/* Service 4 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-32 h-32 md:w-40 md:h-40 lg:w-52 lg:h-52 rounded-full bg-[#6F13DF]/50 flex items-center justify-center mb-4">
              <svg className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24" fill="none" viewBox="0 0 210 210">
                <path d={svgPaths.p8bf9300} fill="black" />
              </svg>
            </div>
            <h3 className="text-base md:text-lg lg:text-xl font-semibold text-black mb-4">
              E-Consulting
            </h3>
            <button 
              onClick={() => handleServiceClick('E-Consulting')}
              className="bg-[#0c008b] text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:bg-[#090066] active:bg-[#060044] transition w-full max-w-[180px]"
            >
              Buka Layanan
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative mt-16 md:mt-24">
        {/* Batik background with overlay to reduce busy-ness */}
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src={imgBatik} 
            alt="" 
            className="w-full h-full object-cover"
          />
          {/* Dark overlay to tone down the pattern and improve text readability */}
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative max-w-[1400px] mx-auto px-6 py-12 text-center text-white">
          <h3 className="text-lg md:text-xl font-bold mb-4">
            INSPEKTORAT DAERAH KOTAWARINGIN TIMUR
          </h3>
          
          <div className="flex items-center justify-center gap-2 mb-3">
            <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24">
              <path d={svgPaths.p3aac8400} fill="white" />
            </svg>
            <p className="text-sm md:text-base">
              Jalan Jenderal Sudirman KM. 6,3, Pasir Putih, Kec. Mentawa Baru Ketapang, Kabupaten Kotawaringin Timur, Kalimantan Tengah 74312
            </p>
          </div>

          <div className="flex items-center justify-center gap-2 mb-3">
            <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24">
              <path d={svgPaths.p37d2a780} fill="white" />
            </svg>
            <a href="tel:053121082" className="text-sm md:text-base hover:underline">
              (0531) 21082
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 mb-6">
            <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24">
              <path d={svgPaths.p33218b70} fill="white" />
            </svg>
            <a href="mailto:insp.kotim@gmail.com" className="text-sm md:text-base hover:underline">
              insp.kotim@gmail.com
            </a>
          </div>

          <p className="text-xs md:text-sm text-gray-300">
            INSPEKTORAT DAERAH KABUPATEN KOTAWARINGIN TIMUR © 2025. Hak Cipta Terdaftar.
          </p>
        </div>
      </footer>
    </div>
  );
}
