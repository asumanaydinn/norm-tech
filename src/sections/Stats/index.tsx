import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

interface StatItem {
  label: string;
  value: number;
  suffix: string;
  prefix?: string;
}

const statsData: StatItem[] = [
  {
    label: "Tamamlanan Projeler",
    value: 150,
    suffix: "+",
  },
  {
    label: "Yıllık Deneyim",
    value: 10,
    suffix: "+",
  },
  {
    label: "Mutlu Müşteri",
    value: 85,
    suffix: "+",
  },
  {
    label: "Uzman Kadro",
    value: 25,
    suffix: "+",
  },
];

interface StatCardProps {
  stat: StatItem;
  inView: boolean;
}

const StatCard = ({ stat, inView }: StatCardProps) => {
  return (
    <div className="relative group">
      {/* Background glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 to-transparent rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Card content */}
      <div className="relative bg-slate-800/50 backdrop-blur-sm p-5 rounded-lg border border-slate-700 group-hover:border-amber-600 transition-all duration-300 group-hover:transform group-hover:scale-105">
        {/* Decorative line */}
        <div className="w-8 h-0.5 bg-gradient-to-r from-amber-600 to-amber-800 mb-4"></div>

        {/* Number */}
        <div className="text-3xl md:text-4xl font-bold text-white mb-2">
          {inView && (
            <>
              {stat.prefix}
              <CountUp
                end={stat.value}
                duration={2.5}
                separator=","
                enableScrollSpy={false}
              />
              {stat.suffix}
            </>
          )}
        </div>

        {/* Label */}
        <p className="text-slate-400 text-sm font-medium">{stat.label}</p>

        {/* Icon decoration */}
        <div className="absolute top-3 right-3 w-10 h-10 rounded-full bg-amber-600/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <svg
            className="w-5 h-5 text-amber-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

const Stats = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <div className="relative bg-slate-950 py-12 px-6 md:px-12 lg:px-16 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-amber-600/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl"></div>

      <div ref={ref} className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">
            Rakamlarla NORM
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-white mt-2 mb-3">
            Başarılarımızla{" "}
            <span className="text-amber-500">Gurur Duyuyoruz</span>
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl mx-auto">
            Yılların deneyimi ve sürekli gelişen uzmanlığımızla madencilik
            sektöründe güvenilir bir iş ortağıyız.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {statsData.map((stat, index) => (
            <StatCard key={index} stat={stat} inView={inView} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <p className="text-slate-400 text-sm mb-4">
            Sizin de projenizin bir parçası olmaktan mutluluk duyarız
          </p>
          <Link
            to="/iletisim"
            className="inline-block px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-semibold text-sm rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Bizimle İletişime Geçin
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Stats;
