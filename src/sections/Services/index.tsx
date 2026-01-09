const services = [
  {
    title: "Maden Arama",
    img: "https://dkkit.rometheme.pro/debuild/wp-content/uploads/sites/76/2023/05/2xx.png",
  },
  {
    title: "Jeoloji ve Kaynak Yönetimi",
    img: "https://dkkit.rometheme.pro/debuild/wp-content/uploads/sites/76/2023/05/1xx.png",
  },
  {
    title: "Açık Ocak ve Yeraltı Tasarımı",
    img: "https://dkkit.rometheme.pro/debuild/wp-content/uploads/sites/76/2023/05/3xx.png",
  },
  {
    title: "Proje Değerlendirme",
    img: "https://dkkit.rometheme.pro/debuild/wp-content/uploads/sites/76/2023/05/4xx.png",
  },
];

const ServiceCard = ({ title, img }: { title: string; img: string }) => (
  <div className="group relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm flex flex-col items-center justify-center gap-4 text-white p-6 rounded-lg border border-slate-700/50 hover:border-amber-500/60 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/20 hover:-translate-y-1 overflow-hidden">
    {/* Animated background glow */}
    <div className="absolute inset-0 bg-gradient-to-br from-amber-600/0 via-amber-600/5 to-amber-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

    {/* Animated border line */}
    <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-amber-500 to-amber-600 group-hover:w-full transition-all duration-500"></div>

    <div className="relative z-10 w-16 h-16 border-b-2 border-b-amber-600 pb-2 group-hover:border-b-amber-500 transition-all duration-500 group-hover:scale-110">
      <img
        src={img}
        alt={title}
        className="w-full h-full object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-500"
      />
    </div>

    <div className="relative z-10 flex flex-col items-center text-center gap-2">
      <span className="text-base font-bold text-slate-100 group-hover:text-amber-500 transition-colors duration-300">
        {title}
      </span>
      <span className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors duration-300 line-clamp-3">
        Modern teknolojiler ve bilimsel yöntemlerle profesyonel hizmet
        sunuyoruz.
      </span>
    </div>

    {/* Decorative corner */}
    <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-amber-600/20 group-hover:border-amber-500/40 rounded-tr-lg transition-colors duration-300"></div>
  </div>
);

const Services = () => {
  return (
    <div className="relative w-full">
      <img
        className="w-full h-full object-cover absolute inset-0"
        src="/assets/services-background.jpg"
        alt="services background"
      />

      {/* Hexagonal/Tech Pattern Overlay */}
      <div className="absolute inset-0 opacity-5 z-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="hex-pattern"
              x="0"
              y="0"
              width="60"
              height="52"
              patternUnits="userSpaceOnUse"
            >
              {/* Hexagons */}
              <path
                d="M 15 0 L 30 8.66 L 30 25.98 L 15 34.64 L 0 25.98 L 0 8.66 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-amber-600"
              />
              {/* Connection lines */}
              <line
                x1="30"
                y1="8.66"
                x2="45"
                y2="17.32"
                stroke="currentColor"
                strokeWidth="0.3"
                className="text-blue-600"
              />
              {/* Small accent dots */}
              <circle
                cx="15"
                cy="17.32"
                r="1.5"
                fill="currentColor"
                className="text-amber-600"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hex-pattern)" />
        </svg>
      </div>

      <div className="bg-zinc-900/80 w-full z-20 relative py-20 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          {/* Header Section - Üstte */}
          <div className="text-center">
            <div className="flex flex-col items-center gap-2">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">
                Uzmanlığımız
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-100">
                Geleceğin Kaynaklarını{" "}
                <span className="text-amber-500">Keşfetmek</span>
              </h2>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed max-w-3xl">
                Maden arama faaliyetleri, yeraltı kaynaklarını keşfetmek ve
                değerlendirmek amacıyla yapılan sistematik çalışmalardır. Bu
                faaliyetler, modern teknolojiler ve bilimsel yöntemler
                kullanılarak gerçekleştirilir ve endüstriyel kalkınmanın temel
                taşlarından biridir. Norm Engineering olarak, maden arama
                projelerinde uzmanlaşmış ekibimizle, müşterilerimize en yüksek
                kalitede danışmanlık hizmeti sunmaktayız.
              </p>
            </div>
          </div>

          {/* Cards Section - Altta yanyana */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                img={service.img}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
