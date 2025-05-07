import LearnMoreButton from "./components/LearnMoreButton";

const HeroSection = () => {
  return (
    <div className="relative h-[700px] flex overflow-hidden">
      {/* Background image */}
      <img
        src="/assets/hero-background.png"
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Left-to-right gradient overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-slate-950/95 via-slate-950/60 to-transparent"></div>

      {/* Content aligned to far left */}
      <div className="relative z-20 flex items-center h-full w-full">
        <div className="pl-6 md:pl-16 lg:pl-24 pr-4 flex flex-col gap-4">
          <h1
            className="text-6xl font-bold mb-4 text-left text-slate-100"
            style={{ lineHeight: "1.2" }}
          >
            Madencilik ve Keşifte <br /> Güvenilir Ortak
          </h1>

          <p className="text-xl mb-6 border-l-4 border-blue-500 pl-4 max-w-2xl text-left text-slate-500">
            NORM Engineering olarak, en yüksek çevresel, sosyal ve yönetişim
            standartlarına uygun, güvenli ve sürdürülebilir mühendislik
            çözümleri sunuyoruz.
          </p>
          <LearnMoreButton />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
