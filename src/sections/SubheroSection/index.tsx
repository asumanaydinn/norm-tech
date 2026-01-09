import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

interface StatBoxProps {
  number: number;
  suffix: string;
  label: string;
}

const StatBox: React.FC<StatBoxProps> = ({ number, suffix, label }) => {
  const { ref, inView } = useInView({ triggerOnce: false });

  return (
    <div
      ref={ref}
      className="group relative bg-gradient-to-br from-blue-950/90 to-blue-900/90 backdrop-blur-sm p-4 rounded-lg border border-blue-800/50 hover:border-amber-500/70 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/20 hover:scale-105 w-36 flex-shrink-0"
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>

      <div className="relative text-center">
        <div className="text-3xl font-bold text-amber-500 mb-2 tabular-nums">
          {inView ? (
            <CountUp end={number} duration={2.5} suffix={suffix} redraw />
          ) : (
            "0"
          )}
        </div>
        <div className="text-xs uppercase font-semibold tracking-wider text-white">
          {label}
        </div>
      </div>

      {/* Decorative corner */}
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-amber-500/30 rounded-tr-lg"></div>
    </div>
  );
};

const SubheroSection: React.FC = () => {
  const stats = [
    { number: 10, suffix: "+", label: "Yıllık Deneyim" },
    { number: 150, suffix: "+", label: "Tamamlanan Proje" },
    { number: 85, suffix: "+", label: "Mutlu Müşteri" },
  ];

  return (
    <div className="relative bg-gray-900 overflow-hidden pt-18 lg:pt-24">
      {/* Abstract background with better opacity */}
      <img
        className="absolute inset-0 w-full h-full object-cover opacity-40"
        src="/assets/abstract.svg"
        alt="abstract"
      />

      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/30 via-transparent to-gray-900/30"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 via-transparent to-gray-900/50"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-24">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
          {/* Left side - Text content */}
          <div className="flex flex-col gap-5 max-w-2xl">
            {/* Section header */}
            <div className="border-l-4 border-amber-600 pl-4 flex flex-col text-left gap-2">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">
                Hakkımızda
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                Mühendislikte İnovatif ve
                <span className="block text-amber-500">Proaktif Çözümler</span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-sm text-slate-300 leading-relaxed">
              NORM Engineering, uluslararası standartlar ve prosedürlere uygun
              şekilde, arama ve madencilik alanında hizmet vermek amacıyla 2021
              yılında kurulmuş uluslararası bağımsız mühendislik firmasıdır.
              İşimizi güvenli, etik ve sürdürülebilir bir şekilde yürüterek,
              kabul edilen çevresel, sosyal ve yönetişim ilkeleri doğrultusunda
              müşterilerimize ve topluluklara hizmet vermekteyiz.
            </p>
          </div>

          {/* Right side - Stats */}
          <div className="flex flex-wrap lg:flex-nowrap gap-4 flex-shrink-0">
            {stats.map((stat, index) => (
              <StatBox key={index} {...stat} />
            ))}
          </div>
        </div>
      </div>

      {/* Decorative blur elements */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-600/5 blur-3xl"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/5 blur-3xl"></div>
    </div>
  );
};

export default SubheroSection;
