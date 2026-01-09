import { Link } from "react-router-dom";

const workSteps = [
  {
    number: 1,
    title: "Keşif ve Planlama",
    description:
      "Proje alanının jeolojik yapısını analiz eder, potansiyel kaynakları belirler ve detaylı bir çalışma planı oluştururuz.",
  },
  {
    number: 2,
    title: "Saha Araştırması",
    description:
      "Modern teknolojiler ve bilimsel yöntemlerle arazi çalışmaları gerçekleştiririz. Sondaj, haritalama ve örnekleme işlemlerini yürütürüz.",
  },
  {
    number: 3,
    title: "Analiz ve Değerlendirme",
    description:
      "Toplanan verileri analiz eder, kaynak potansiyelini değerlendirir ve ekonomik fizibilite raporları hazırlarız.",
  },
  {
    number: 4,
    title: "Raporlama ve Uygulama",
    description:
      "Detaylı teknik raporlar sunarak projenin uygulanabilirliğini değerlendirir ve sürdürülebilir çözümler geliştiririz.",
  },
];

interface WorkStepProps {
  number: number;
  title: string;
  description: string;
  isEven: boolean;
}

const WorkStep = ({ number, title, description, isEven }: WorkStepProps) => {
  return (
    <div className="relative flex items-center gap-4">
      {/* Step number circle */}
      <div className="flex-shrink-0">
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full bg-amber-600/30 blur-lg"></div>
          
          {/* Main circle */}
          <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-amber-600 to-amber-800 border-2 border-slate-900 shadow-lg">
            <span className="text-lg font-bold text-white">{number}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 bg-slate-800 p-4 rounded-lg border border-slate-700 hover:border-amber-600 transition-all duration-300 hover:shadow-xl hover:shadow-amber-600/10">
        <h3 className="text-base font-semibold text-white mb-2">{title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
      </div>

      {/* Connecting line (except for last item) */}
      {number < workSteps.length && (
        <div className="absolute left-6 top-12 w-0.5 h-full bg-gradient-to-b from-amber-600 to-transparent"></div>
      )}
    </div>
  );
};

const HowWeWork = () => {
  return (
    <div className="relative bg-slate-950 py-12 px-6 md:px-12 lg:px-16 overflow-hidden">
      {/* Topographic Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="topographic" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M10 10c0 10 10 20 20 20s20-10 20-20-10-20-20-20-20 10-20 20z" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-amber-600"/>
              <path d="M20 20c0 15 15 30 30 30s30-15 30-30-15-30-30-30-30 15-30 30z" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-blue-600"/>
              <path d="M5 50c10-10 20-10 30 0s20 10 30 0 20-10 30 0" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-amber-600"/>
              <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-blue-600"/>
              <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-amber-600"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#topographic)" />
        </svg>
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-transparent to-slate-950/80"></div>

      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-amber-600/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">
            Süreçlerimiz
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-white mt-2 mb-3">
            Nasıl Çalışırız
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl mx-auto">
            Modern teknolojiler ve bilimsel yöntemlerle, her projeyi titizlikle
            planlayarak başarıyla tamamlıyoruz.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-3xl mx-auto space-y-6">
          {workSteps.map((step, index) => (
            <WorkStep
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
              isEven={index % 2 === 0}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-10 text-center">
          <Link
            to="/proje-referanslarimiz"
            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-700 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <span className="text-white font-semibold text-sm">
              Projelerimizi İnceleyin
            </span>
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
