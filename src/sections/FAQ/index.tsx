import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { useState } from "react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "Maden arama faaliyetleri ne kadar sürer?",
    answer:
      "Maden arama faaliyetlerinin süresi, projenin büyüklüğüne, bölgenin jeolojik yapısına ve kullanılan yöntemlere göre değişiklik gösterir. Ortalama olarak bir ön çalışma 3-6 ay, detaylı arama çalışmaları ise 1-2 yıl sürebilir.",
    category: "mining",
  },
  {
    id: 2,
    question: "Hangi teknolojileri kullanıyorsunuz?",
    answer:
      "Modern jeofizik yöntemler, GPS destekli haritalama sistemleri, drone teknolojileri, 3D modelleme yazılımları ve laboratuvar analiz cihazları kullanarak en güncel teknolojik çözümleri projelerimize entegre ediyoruz.",
    category: "services",
  },
  {
    id: 3,
    question: "Çevresel standartlara uyum sağlanıyor mu?",
    answer:
      "Evet, tüm projelerimizde uluslararası çevresel standartlara uygun hareket ediyoruz. ÇED (Çevresel Etki Değerlendirmesi) raporları hazırlıyor ve sürdürülebilir madencilik ilkelerine bağlı kalıyoruz.",
    category: "general",
  },
  {
    id: 4,
    question: "Proje maliyetleri nasıl belirleniyor?",
    answer:
      "Proje maliyetleri, saha büyüklüğü, gereken araştırma derinliği, kullanılacak teknolojiler ve çalışma süresine göre belirlenir. Her proje için özel bir teklif hazırlıyoruz.",
    category: "projects",
  },
  {
    id: 5,
    question: "Uluslararası projelerde çalışıyor musunuz?",
    answer:
      "Evet, uluslararası standartlara uygun çalışma metodolojimiz sayesinde Türkiye dışındaki projelerde de danışmanlık hizmeti sunuyoruz.",
    category: "general",
  },
  {
    id: 6,
    question: "Raporlama süreciniz nasıl işliyor?",
    answer:
      "Her projenin farklı aşamalarında düzenli raporlar sunuyoruz. İlerleme raporları, analiz sonuçları ve nihai fizibilite raporları detaylı ve anlaşılır şekilde hazırlanarak müşterilerimize sunulur.",
    category: "services",
  },
];

interface FAQAccordionItemProps {
  faq: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQAccordionItem = ({ faq, isOpen, onToggle }: FAQAccordionItemProps) => {
  return (
    <div className="border border-slate-700 rounded-lg overflow-hidden transition-all duration-300 hover:border-amber-600">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-4 bg-slate-800 hover:bg-slate-750 transition-colors duration-200"
      >
        <span className="text-left text-sm font-semibold text-white pr-3">
          {faq.question}
        </span>
        <div className="flex-shrink-0">
          {isOpen ? (
            <MinusOutlined className="text-amber-500 text-base" />
          ) : (
            <PlusOutlined className="text-amber-500 text-base" />
          )}
        </div>
      </button>

      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="p-4 pt-0 bg-slate-800/50">
          <p className="text-slate-400 text-xs leading-relaxed">{faq.answer}</p>
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openId, setOpenId] = useState<number | null>(1);

  const handleToggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="relative bg-slate-900 py-12 px-6 md:px-12 lg:px-16 overflow-hidden">
      {/* Geometric Grid Pattern Background */}
      <div className="absolute inset-0 opacity-8">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="geometric-grid" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              {/* Grid lines */}
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-slate-700"/>
              {/* Diagonal lines */}
              <path d="M 0 0 L 80 80 M 80 0 L 0 80" fill="none" stroke="currentColor" strokeWidth="0.3" className="text-amber-600/30"/>
              {/* Circles at intersections */}
              <circle cx="0" cy="0" r="2" fill="currentColor" className="text-amber-600/40"/>
              <circle cx="40" cy="40" r="1.5" fill="currentColor" className="text-blue-600/40"/>
              {/* Small dots */}
              <circle cx="20" cy="20" r="1" fill="currentColor" className="text-slate-600"/>
              <circle cx="60" cy="60" r="1" fill="currentColor" className="text-slate-600"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#geometric-grid)" />
        </svg>
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-transparent to-slate-900"></div>

      {/* Background decorations */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-amber-600/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Column - Header */}
          <div className="lg:sticky lg:top-24">
            <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">
              Sık Sorulan Sorular
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-white mt-2 mb-4">
              Madencilik İle İlgili
              <br />
              <span className="text-amber-500">Merak Edilenler</span>
            </h2>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed">
              Maden arama ve mühendislik hizmetlerimiz hakkında en çok sorulan
              soruları derledik. Aklınıza takılan başka sorular varsa, bizimle
              iletişime geçmekten çekinmeyin.
            </p>

            {/* Contact CTA */}
            <div className="flex items-center gap-3 p-4 bg-slate-800 border border-slate-700 rounded-lg">
              <div className="flex-shrink-0 w-10 h-10 bg-amber-600/10 rounded-full flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-amber-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-white font-medium text-sm">Başka sorularınız mı var?</p>
                <p className="text-amber-500 text-xs">info@norm-engineering.com</p>
              </div>
            </div>
          </div>

          {/* Right Column - FAQ Items */}
          <div className="space-y-3">
            {faqData.map((faq) => (
              <FAQAccordionItem
                key={faq.id}
                faq={faq}
                isOpen={openId === faq.id}
                onToggle={() => handleToggle(faq.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
