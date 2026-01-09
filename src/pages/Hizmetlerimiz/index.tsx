import { CheckCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "Maden Arama",
    description:
      "Modern jeofizik ve jeokimya yöntemleriyle kapsamlı maden arama çalışmaları gerçekleştiriyoruz.",
    icon: "https://dkkit.rometheme.pro/debuild/wp-content/uploads/sites/76/2023/05/2xx.png",
    features: [
      "Jeofizik ve jeokimya araştırmaları",
      "Uydu görüntüleri ve uzaktan algılama",
      "Arazi gözlemleri ve haritalama",
      "Sondaj planlama ve yönetimi",
      "Kaynak potansiyeli değerlendirme",
    ],
    color: "from-blue-600 to-blue-700",
  },
  {
    id: 2,
    title: "Jeoloji ve Kaynak Yönetimi",
    description:
      "Maden rezervlerinin doğru bir şekilde belirlenmesi ve yönetilmesi için uzman jeolojik danışmanlık hizmeti sunuyoruz.",
    icon: "https://dkkit.rometheme.pro/debuild/wp-content/uploads/sites/76/2023/05/1xx.png",
    features: [
      "3D jeolojik modelleme",
      "Kaynak ve rezerv hesaplamaları",
      "Blok model oluşturma",
      "Cevher tenör analizleri",
      "Jeolojik raporlama",
    ],
    color: "from-amber-600 to-amber-700",
  },
  {
    id: 3,
    title: "Açık Ocak ve Yeraltı Tasarımı",
    description:
      "Açık ocak ve yeraltı madenciliği için optimum tasarım çözümleri geliştiriyoruz.",
    icon: "https://dkkit.rometheme.pro/debuild/wp-content/uploads/sites/76/2023/05/3xx.png",
    features: [
      "Açık ocak tasarımı ve optimizasyonu",
      "Yeraltı ocak planlaması",
      "Şev stabilitesi analizleri",
      "Üretim planlaması",
      "Ekonomik analiz ve optimizasyon",
    ],
    color: "from-emerald-600 to-emerald-700",
  },
  {
    id: 4,
    title: "Proje Değerlendirme",
    description:
      "Maden projelerinin teknik ve ekonomik fizibilitesini değerlendirerek yatırım kararlarınıza destek oluyoruz.",
    icon: "https://dkkit.rometheme.pro/debuild/wp-content/uploads/sites/76/2023/05/4xx.png",
    features: [
      "Ön fizibilite çalışmaları",
      "Detaylı fizibilite raporları",
      "Ekonomik modelleme",
      "Risk analizi",
      "JORC/NI 43-101 uyumlu raporlama",
    ],
    color: "from-purple-600 to-purple-700",
  },
];

const Hizmetlerimiz = () => {
  return (
    <div className="relative bg-slate-950 overflow-hidden min-h-screen">
      {/* Hexagonal Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="hex-service-pattern"
              x="0"
              y="0"
              width="60"
              height="52"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 15 0 L 30 8.66 L 30 25.98 L 15 34.64 L 0 25.98 L 0 8.66 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-amber-600"
              />
              <line
                x1="30"
                y1="8.66"
                x2="45"
                y2="17.32"
                stroke="currentColor"
                strokeWidth="0.3"
                className="text-blue-600"
              />
              <circle
                cx="15"
                cy="17.32"
                r="1.5"
                fill="currentColor"
                className="text-amber-600"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hex-service-pattern)" />
        </svg>
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950"></div>

      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-600/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-amber-600/5 rounded-full blur-3xl"></div>

      {/* Hero Section */}
      <div className="relative py-20 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">
            Uzmanlığımız
          </span>
          <h1 className="text-2xl md:text-3xl font-bold text-white mt-2 mb-4">
            Geleceğin Kaynaklarını{" "}
            <span className="text-amber-500">Keşfetmek</span>
          </h1>
          <p className="text-sm text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Maden arama faaliyetleri, yeraltı kaynaklarını keşfetmek ve
            değerlendirmek amacıyla yapılan sistematik çalışmalardır. Bu
            faaliyetler, modern teknolojiler ve bilimsel yöntemler kullanılarak
            gerçekleştirilir.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="relative py-8 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto space-y-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`group relative ${
                index % 2 === 0 ? "" : "lg:flex-row-reverse"
              }`}
            >
              <div className="grid lg:grid-cols-2 gap-6 items-center">
                {/* Image/Icon Side */}
                <div
                  className={`relative ${
                    index % 2 === 0 ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="relative h-64 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700 overflow-hidden group-hover:border-amber-500/60 transition-all duration-500">
                    {/* Gradient overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}
                    ></div>

                    {/* Icon */}
                    <div className="absolute inset-0 flex items-center justify-center p-8">
                      <img
                        src={service.icon}
                        alt={service.title}
                        className="w-full h-full object-contain filter brightness-90 group-hover:brightness-110 group-hover:scale-110 transition-all duration-500"
                      />
                    </div>

                    {/* Number badge */}
                    <div className="absolute top-4 right-4">
                      <div
                        className={`w-12 h-12 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg`}
                      >
                        <span className="text-lg font-bold text-white">
                          {service.id}
                        </span>
                      </div>
                    </div>

                    {/* Decorative corner */}
                    <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-amber-600/20 rounded-bl-xl"></div>
                  </div>
                </div>

                {/* Content Side */}
                <div
                  className={`${index % 2 === 0 ? "lg:order-2" : "lg:order-1"}`}
                >
                  <div className="space-y-4">
                    {/* Title */}
                    <div>
                      <h2 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-amber-500 transition-colors duration-300">
                        {service.title}
                      </h2>
                      <div
                        className={`h-0.5 w-16 bg-gradient-to-r ${service.color} rounded-full`}
                      ></div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 group/item"
                        >
                          <CheckCircleOutlined className="text-amber-500 text-base mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                          <span className="text-slate-300 text-sm group-hover/item:text-white transition-colors">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Separator line (except last item) */}
              {index < services.length - 1 && (
                <div className="mt-10 mb-6">
                  <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="relative py-12 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6 md:p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Neden <span className="text-amber-500">NORM Engineering</span>?
              </h2>
              <p className="text-slate-400 text-sm max-w-2xl mx-auto">
                Uluslararası standartlara uygun, güvenilir ve sürdürülebilir
                mühendislik çözümleri sunuyoruz.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  Uluslararası Standartlar
                </h3>
                <p className="text-slate-400 text-sm">
                  JORC ve NI 43-101 standartlarına uygun çalışmalar
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-700 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  Modern Teknoloji
                </h3>
                <p className="text-slate-400 text-sm">
                  En güncel yazılım ve ekipmanlarla donatılmış ekip
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  Hızlı Teslimat
                </h3>
                <p className="text-slate-400 text-sm">
                  Proje sürelerinde disiplinli ve zamanında teslimat
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-12 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Projeniz İçin Bizimle İletişime Geçin
          </h2>
          <p className="text-sm text-slate-400 mb-6">
            Maden arama ve mühendislik projeleriniz için profesyonel danışmanlık
            hizmeti almak ister misiniz?
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/iletisim"
              className="px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-semibold text-sm rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-center"
            >
              Teklif Alın
            </Link>
            <Link
              to="/proje-referanslarimiz"
              className="px-6 py-3 bg-slate-800 text-white font-semibold text-sm rounded-lg border border-slate-700 hover:border-amber-600 hover:bg-slate-700 transition-all duration-300 text-center"
            >
              Referanslarımızı İnceleyin
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hizmetlerimiz;
