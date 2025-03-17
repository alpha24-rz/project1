"use client"; // Pastikan ini ada di bagian paling atas untuk Next.js App Router

import { useEffect, useRef } from "react";

export default function WelcomeSection() {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    // Fungsi untuk scroll otomatis
    const autoScroll = () => {
      if (scrollContainer) {
        // Scroll ke kanan sebesar lebar container
        scrollContainer.scrollBy({
          left: scrollContainer.clientWidth, // Scroll sebesar lebar container
          behavior: "smooth", // Efek scroll smooth
        });

        // Jika sudah mencapai akhir, kembali ke awal
        if (
          scrollContainer.scrollLeft + scrollContainer.clientWidth >=
          scrollContainer.scrollWidth
        ) {
          scrollContainer.scrollTo({
            left: 0,
            behavior: "smooth",
          });
        }
      }
    };

    // Set interval untuk scroll otomatis setiap 5 detik
    const interval = setInterval(autoScroll, 5000);

    // Bersihkan interval saat komponen di-unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex flex-row bg-[#F72C5B] border">
      {/* Bagian Kiri (Teks) */}
      <div className="basis-1/3 container mx-auto px-6 text-center">
        <h1 className="text-neutral-50 text-xl font-bold mb-4">Selamat datang</h1>
        <h2 className="text-3xl font-semibold text-[#2a2a2a] mb-8">
          di Praktik Bidan Sahabat Moms
        </h2>
        <p className="text-lg text-[#2a2a2a] mb-8">
          – Tempat Terpercaya untuk Kesehatan Ibu dan Si Kecil. Kami hadir untuk
          mendampingi Anda dalam setiap tahap kehamilan, persalinan, dan perawatan
          pasca melahirkan. Dengan layanan profesional dan penuh kasih sayang.
        </p>
        <button className="bg-[#2a2a2a] text-[#F4F8D3] px-6 py-3 rounded-lg hover:bg-[#1a1a1a] transition duration-300">
          Pelajari Lebih Lanjut
        </button>
      </div>

      {/* Bagian Kanan (Gambar) */}
      <div className="basis-2/3 overflow-x-auto scroll-smooth" ref={scrollContainerRef}>
        <div className="flex w-max">
          {/* Gambar 1 */}
          <div className="min-w-full h-[400px] bg-cover bg-center" style={{ backgroundImage: "url('/image1.jpg')" }}>
            <h1 className="text-4xl font-bold text-white text-center pt-20">
              Gambar 1
            </h1>
          </div>

          {/* Gambar 2 */}
          <div className="min-w-full h-[400px] bg-cover bg-center" style={{ backgroundImage: "url('/image2.jpg')" }}>
            <h1 className="text-4xl font-bold text-white text-center pt-20">
              Gambar 2
            </h1>
          </div>

          {/* Gambar 3 */}
          <div className="min-w-full h-[400px] bg-cover bg-center" style={{ backgroundImage: "url('/image3.jpg')" }}>
            <h1 className="text-4xl font-bold text-white text-center pt-20">
              Gambar 3
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}