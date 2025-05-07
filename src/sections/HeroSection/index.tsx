import LearnMoreButton from "./components/LearnMoreButton";

const HeroSection = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background image */}
      <img
        src="/assets/hero-background.png"
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Blue overlay */}
      <div className="absolute inset-0 bg-slate-950 opacity-60 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center h-full px-4 text-white">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Madencilik ve Keşifte Güvenilir Ortak
        </h1>
        <p className="text-lg md:text-2xl mb-2 max-w-2xl">
          Madencilik ve Keşifte Yenilik ve Dürüstlükle Geleceği
          Şekillendiriyoruz.
        </p>
        <p className="text-sm md:text-base mb-6 max-w-2xl">
          NORM Engineering olarak, en yüksek çevresel, sosyal ve yönetişim
          standartlarına uygun, güvenli ve sürdürülebilir mühendislik çözümleri
          sunuyoruz.
        </p>
        <LearnMoreButton />
      </div>
    </div>
  );
};

export default HeroSection;
