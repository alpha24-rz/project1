import Header from '../components/Header'; // Import komponen Header
import WelcomeSection from '../components/WelcomeSection'; // Import komponen WelcomeSection

export default function Home() {
  return (
    <div className="bg-white">
      {/* Render komponen Header */}
      <Header />

      {/* Render komponen WelcomeSection */}
      <WelcomeSection />

      {/* Konten utama halaman */}
      <main className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to My Website
          </h1>
          <p className="text-lg text-gray-600">
            This is the main page of the website. You can navigate using the navbar above.
          </p>
        </div>
      </main>
    </div>
  );
}