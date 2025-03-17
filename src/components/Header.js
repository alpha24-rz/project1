"use client"; // Pastikan ini ada di bagian paling atas untuk Next.js App Router

import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Cek posisi scroll
      if (window.scrollY > 0) {
        setIsScrolled(true); // Aktifkan perubahan warna saat di-scroll
      } else {
        setIsScrolled(false); // Kembalikan ke warna awal saat tidak di-scroll
      }
    };

    // Tambahkan event listener untuk scroll
    window.addEventListener("scroll", handleScroll);

    // Bersihkan event listener saat komponen di-unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white backdrop-blur-md shadow-lg" // Warna putih dan efek glassmorphism saat di-scroll
          : "bg-[#F72C5B]" // Warna #F72C5B saat tidak di-scroll
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Judul */}
          <div
            className={`text-2xl font-bold ${
              isScrolled ? "text-[#F72C5B]" : "text-white"
            }`}
          >
            Sahabat Moms
          </div>

          {/* Menu Navbar */}
          <ul className="flex space-x-4 font-bold">
            <li>
              <a
                href="#"
                className={`${
                  isScrolled ? "text-[#F72C5B]" : "text-white"
                } hover:text-pink-200`}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`${
                  isScrolled ? "text-[#F72C5B]" : "text-white"
                } hover:text-pink-200`}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`${
                  isScrolled ? "text-[#F72C5B]" : "text-white"
                } hover:text-pink-200`}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`${
                  isScrolled ? "text-[#F72C5B]" : "text-white"
                } hover:text-pink-200`}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}