export default function WelcomeSection() {
    return (
      <section className="flex flex-row bg-[#F72C5B] ">
        <div className="basis-1/3 container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-[#2a2a2a] mb-4">
            Selamat datang
          </h1>
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
        <div className="basis-2/3  container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-[#2a2a2a] mb-4">
            Selamat datang
          </h1>
        </div>
      </section>
    );
  }