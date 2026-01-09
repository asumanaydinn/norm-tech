import { useEffect, useRef, useState } from "react";
import LearnMoreButton from "./components/LearnMoreButton";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="relative h-[600px] flex overflow-visible">
      {/* Background image */}
      <img
        src="/assets/hero-background.png"
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 z-1 bg-gradient-to-r from-slate-950/95 via-slate-950/75 to-slate-950/40"></div>

      {/* Orange Geometric Shape - Background - İnce şerit, tam opacity, sağda */}
      <div className="absolute -right-16 top-0 bottom-0 w-32 z-5 hidden lg:block">
        <div
          className={`absolute right-0 top-0 bottom-0 w-full bg-gradient-to-br from-amber-600 to-amber-700 transform skew-x-[-12deg] origin-top-right transition-transform duration-1000 ${
            isVisible ? "translate-x-0" : "translate-x-full"
          }`}
        ></div>
      </div>

      {/* Content - Grid Layout */}
      <div className="relative z-40 grid lg:grid-cols-2 gap-8 items-center h-full w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Left Side - Text Content */}
        <div className="relative z-50 flex flex-col gap-4">
          {/* Eyebrow text */}
          <span
            className={`text-amber-500 text-xs font-semibold uppercase tracking-wider transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            Maden Arama ve Mühendislik
          </span>

          {/* Main heading with staggered animation */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-left text-white leading-tight">
            <span
              className={`block transition-all duration-700 delay-100 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Madencilik ve
            </span>
            <span
              className={`block transition-all duration-700 delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Keşifte
            </span>
            <span
              className={`block text-amber-500 transition-all duration-700 delay-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Güvenilir Ortak
            </span>
          </h1>

          {/* Description */}
          <p
            className={`text-sm md:text-base border-l-4 border-amber-600 pl-3 max-w-2xl text-left text-slate-200 transition-all duration-700 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            NORM Engineering olarak, en yüksek çevresel, sosyal ve yönetişim
            standartlarına uygun, güvenli ve sürdürülebilir mühendislik
            çözümleri sunuyoruz.
          </p>

          {/* CTA Button */}
          <div
            className={`flex items-center gap-4 mt-2 transition-all duration-700 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <LearnMoreButton />
          </div>
        </div>

        {/* Right Side - Excavator Image - Taşmış görünüm, biraz küçük ve sağda */}
        <div className="hidden lg:block absolute -right-32 bottom-0 z-10 translate-y-1/4">
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-24"
            }`}
          >
            {/* Glow effect behind excavator */}
            <div className="absolute inset-0 bg-amber-600/20 blur-3xl"></div>

            {/* Excavator Image - Biraz küçültüldü ve sağda */}
            <img
              src="/assets/tracked-excavator.png"
              alt="Mining Excavator"
              className="relative w-full max-w-5xl h-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Subtle decorative elements */}
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-600/10 blur-3xl z-0"></div>
    </div>
  );
};

export default HeroSection;
