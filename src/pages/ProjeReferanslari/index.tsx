import { Link } from "react-router-dom";

const ProjeReferanslari = () => {
  const projects = [
    {
      id: 1,
      title: "Alagöz Holding - Maden Arama Projesi",
      location: "Kütahya, Türkiye",
      year: "2023",
      image: "/assets/alagoz-logo.png",
      description:
        "Kapsamlı jeolojik araştırma ve kaynak değerlendirme çalışması",
      services: ["Jeolojik Haritalama", "Sondaj", "Kaynak Modelleme"],
    },
    {
      id: 2,
      title: "Deep Mineral - Proje Yönetimi",
      location: "Ankara, Türkiye",
      year: "2023",
      image: "/assets/deep-mineral-proses-logo.png",
      description: "Madencilik projesi fizibilite ve uygulama danışmanlığı",
      services: ["Fizibilite Analizi", "Proje Yönetimi", "Teknik Danışmanlık"],
    },
    {
      id: 3,
      title: "Dinamik Sondaj - Saha Çalışmaları",
      location: "Çeşitli Lokasyonlar",
      year: "2022-2023",
      image: "/assets/dinamik-sondaj-logo.png",
      description: "Sondaj operasyonları ve jeolojik veri toplama",
      services: ["Sondaj Hizmetleri", "Numune Analizi", "Raporlama"],
    },
    {
      id: 4,
      title: "Promer Engineering - İş Ortaklığı",
      location: "Ankara, Türkiye",
      year: "2021-2024",
      image: "/assets/promer-logo-e1714980022993.jpg",
      description: "Maden mühendisliği ve kaynak değerlendirme projeleri",
      services: ["Kaynak Değerlendirme", "Mühendislik Tasarımı", "Danışmanlık"],
    },
  ];

  return (
    <div className="relative bg-slate-950 py-20 px-6 md:px-12 lg:px-16 overflow-hidden min-h-screen">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="project-grid"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 100 0 L 0 0 0 100"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-slate-700"
              />
              <path
                d="M 50 0 L 50 100 M 0 50 L 100 50"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.3"
                className="text-amber-600/30"
              />
              <circle
                cx="50"
                cy="50"
                r="2"
                fill="currentColor"
                className="text-amber-600/40"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#project-grid)" />
        </svg>
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950"></div>

      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-amber-600/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-600/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-10">
          <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">
            Referanslarımız
          </span>
          <h1 className="text-2xl md:text-3xl font-bold text-white mt-2 mb-3">
            Başarılı <span className="text-amber-500">Proje Portföyümüz</span>
          </h1>
          <p className="text-sm text-slate-400 max-w-2xl mx-auto">
            Türkiye'nin önde gelen şirketleriyle gerçekleştirdiğimiz projeler ve
            iş ortaklıklarımız.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-slate-800/50 backdrop-blur-sm rounded-lg overflow-hidden border border-slate-700 hover:border-amber-500/60 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/10"
            >
              {/* Project Image/Logo */}
              <div className="relative h-48 bg-slate-900 flex items-center justify-center p-6">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent z-10"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="relative z-20 max-h-24 w-auto object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-500 group-hover:scale-110"
                />

                {/* Year badge */}
                <div className="absolute top-3 right-3 z-20">
                  <span className="px-3 py-1.5 bg-amber-600/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                    {project.year}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-1.5 group-hover:text-amber-500 transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Location */}
                <p className="text-slate-400 text-xs mb-3 flex items-center gap-2">
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  {project.location}
                </p>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-3">
                  {project.description}
                </p>

                {/* Services */}
                <div className="flex flex-wrap gap-1.5">
                  {project.services.map((service, index) => (
                    <span
                      key={index}
                      className="px-2.5 py-1 bg-slate-700/50 text-slate-300 text-xs font-medium rounded-full border border-slate-600"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover border effect */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-amber-500 to-amber-600 group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 p-6 bg-slate-800/30 border border-slate-700 rounded-lg">
          <h3 className="text-xl font-bold text-white mb-3">
            Sizinle de Çalışmak İsteriz
          </h3>
          <p className="text-slate-400 text-sm mb-4 max-w-2xl mx-auto">
            Projeniz için profesyonel danışmanlık ve mühendislik hizmetleri
            almak ister misiniz?
          </p>
          <Link
            to="/iletisim"
            className="inline-block px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-semibold text-sm rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            İletişime Geçin
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjeReferanslari;
