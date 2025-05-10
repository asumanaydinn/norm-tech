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
    <div ref={ref} className="bg-blue-950 p-6 w-36">
      <div className="text-4xl font-extrabold text-indigo-400 mb-2">
        {inView ? (
          <CountUp end={number} duration={2} suffix={suffix} redraw />
        ) : (
          "0"
        )}
      </div>
      <div className="text-sm uppercase font-semibold tracking-wide text-indigo-100">
        {label}
      </div>
    </div>
  );
};

const SubheroSection: React.FC = () => {
  const stats = [
    { number: 25, suffix: "+", label: "Yıllık Deneyim" },
    { number: 100, suffix: "+", label: "Tamamlanan Proje" },
    { number: 30, suffix: "+", label: "Global Müşteri" },
  ];

  return (
    <div className="bg-gray-900 relative overflow-hidden">
      <img
        className="absolute opacity-40"
        src="/assets/abstract.svg"
        alt="abstract"
      />

      <div className="max-w-8xl px-24 py-24 relative flex items-end justify-between">
        <div className="flex flex-col gap-10 max-w-2xl">
          <div className="border-l-4 border-indigo-600 pl-6 flex flex-col text-left gap-2">
            <span className="text-slate-400">Hakkımızda</span>
            <h2 className="text-4xl font-semibold leading-8 text-slate-100">
              Mühendislikte İnovatif ve Proaktif Çözümler
            </h2>
          </div>
          <p className="text-xl font-semibold text-left text-slate-400">
            NORM Engineering, uluslararası standartlar ve prosedürlere uygun
            şekilde, arama ve madencilik alanında hizmet vermek amacıyla 2021
            yılında kurulmuş uluslararası bağımsız mühendislik firmasıdır.
            İşimizi güvenli, etik ve sürdürülebilir bir şekilde yürüterek, kabul
            edilen çevresel, sosyal ve yönetişim ilkeleri doğrultusunda
            müşterilerimize ve topluluklara hizmet vermekteyiz.
          </p>
        </div>

        <div className="flex gap-8">
          {stats.map((stat, index) => (
            <StatBox key={index} {...stat} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubheroSection;
