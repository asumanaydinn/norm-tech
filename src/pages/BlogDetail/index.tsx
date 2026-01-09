import { useParams, Link } from "react-router-dom";
import {
  CalendarOutlined,
  ArrowLeftOutlined,
  TagOutlined,
} from "@ant-design/icons";

interface BlogContent {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  content: {
    subtitle: string;
    paragraphs: string[];
  }[];
}

const blogContents: { [key: string]: BlogContent } = {
  "yapay-zekanin-gelecekteki-maden-arama-faaliyetlerindeki-potansiyeli-ve-yeri":
    {
      id: "1",
      title:
        "Yapay Zekanın Gelecekteki Maden Arama Faaliyetlerindeki Potansiyeli ve Yeri",
      excerpt:
        "Yapay zeka (AI), maden arama faaliyetlerinde devrim yaratma potansiyeline sahip bir teknolojidir.",
      image:
        "/assets/Yapay-Zekanin-Gelecekteki-Maden-Arama-Faaliyetlerindeki-Potansiyeli-ve-Yeri.webp",
      category: "Teknoloji",
      author: "NORM Engineering",
      date: "Mayıs 2024",
      readTime: "8 dk",
      content: [
        {
          subtitle: "",
          paragraphs: [
            "Yapay zeka (AI), maden arama faaliyetlerinde devrim yaratma potansiyeline sahip bir teknolojidir. AI, büyük veri analiz yetenekleri ve öngörüsel modelleri sayesinde, maden arama süreçlerini daha verimli ve etkili hale getirebilir. Bu yenilikçi teknoloji, maden endüstrisinin geleceğini şekillendirecek kilit unsurlardan biridir.",
          ],
        },
        {
          subtitle: "Veri Analizi ve Öngörü",
          paragraphs: [
            "Maden arama faaliyetlerinde, büyük miktarda jeolojik veri toplanır ve analiz edilir. Yapay zeka, bu verileri hızlı ve doğru bir şekilde işleyerek, potansiyel maden yataklarını belirlemekte önemli bir rol oynar. Öngörüsel modeller ve makine öğrenimi algoritmaları, yeraltı kaynaklarının yerini ve miktarını daha doğru tahmin edebilir. Bu, maden arama çalışmalarının maliyetini ve süresini önemli ölçüde azaltır.",
          ],
        },
        {
          subtitle: "Jeolojik Modelleme",
          paragraphs: [
            "AI, jeolojik modelleme süreçlerinde de büyük avantajlar sağlar. Karmaşık yeraltı yapılarının 3D modelleri, yapay zeka ile daha hızlı ve detaylı bir şekilde oluşturulabilir. Bu modeller, maden arama ekiplerinin doğru sondaj noktalarını belirlemesine yardımcı olur ve sondaj başarı oranını artırır. AI destekli modelleme, aynı zamanda maden sahalarının daha güvenli ve çevresel olarak sürdürülebilir şekilde işletilmesini sağlar.",
          ],
        },
        {
          subtitle: "Otonom Araçlar ve Robotik",
          paragraphs: [
            "Yapay zeka, otonom araçlar ve robotik sistemlerle entegre edildiğinde, maden arama süreçlerini daha güvenli ve verimli hale getirebilir. Otonom sondaj makineleri ve keşif robotları, insan müdahalesi olmadan zor ve tehlikeli bölgelerde çalışabilir. Bu, iş güvenliğini artırırken, maden arama faaliyetlerinin sürekli ve kesintisiz devam etmesini sağlar.",
          ],
        },
        {
          subtitle: "Çevresel ve Ekonomik Etkiler",
          paragraphs: [
            "AI, maden arama faaliyetlerinin çevresel ve ekonomik etkilerini de minimize edebilir. Doğru veri analizi ve modelleme, gereksiz sondaj çalışmalarını azaltarak çevreye verilen zararı en aza indirir. Aynı zamanda, maliyetleri düşürerek ve verimliliği artırarak, maden şirketlerinin karlılığını artırır.",
          ],
        },
        {
          subtitle: "Sonuç",
          paragraphs: [
            "Yapay zeka, maden arama faaliyetlerinde büyük bir potansiyele sahiptir. Veri analizi, jeolojik modelleme ve otonom araçlar gibi alanlarda sağladığı avantajlar, maden arama süreçlerini daha verimli, güvenli ve çevresel olarak sürdürülebilir hale getirir. Yapay zeka teknolojilerinin maden endüstrisinde daha yaygın kullanımı, gelecekte maden arama faaliyetlerinin başarısını ve sürdürülebilirliğini önemli ölçüde artıracaktır.",
          ],
        },
      ],
    },
  "haritalandirma-islemlerinin-maden-aramadaki-yeri-ve-onemi": {
    id: "2",
    title: "Haritalandırma İşlemlerinin Maden Aramadaki Yeri ve Önemi",
    excerpt:
      "Maden arama faaliyetlerinde haritalandırma işlemleri, yeraltı kaynaklarının keşfi ve değerlendirilmesi sürecinin temel taşlarından biridir.",
    image:
      "/assets/Micromine-Origin-22.5_Media-Release_Image_FINAL-scaled-1.jpg",
    category: "Mühendislik",
    author: "NORM Engineering",
    date: "Mayıs 2024",
    readTime: "7 dk",
    content: [
      {
        subtitle: "",
        paragraphs: [
          "Maden arama faaliyetlerinde haritalandırma işlemleri, yeraltı kaynaklarının keşfi ve değerlendirilmesi sürecinin temel taşlarından biridir. Bu işlemler, maden sahalarının potansiyelini belirlemede ve doğru sondaj noktalarının tespitinde kritik rol oynar. Norm Engineering olarak, maden arama projelerinde haritalandırma işlemlerinin önemini vurgulamakta ve bu alanda uzman çözümler sunmaktayız.",
        ],
      },
      {
        subtitle: "Jeolojik Haritalandırma",
        paragraphs: [
          "Jeolojik haritalandırma, yer kabuğunun yapısını, mineral dağılımını ve kayaç türlerini belirlemek amacıyla yapılan detaylı çalışmalardır. Bu haritalar, maden arama sürecinin ilk adımlarından biri olup, potansiyel maden yataklarının tespitinde önemli bir rol oynar.",
        ],
      },
      {
        subtitle: "Jeokimyasal Haritalandırma",
        paragraphs: [
          "Jeokimyasal haritalandırma, yer yüzeyinden alınan numunelerin kimyasal analizleriyle yapılan bir haritalandırma türüdür. Bu yöntem, özellikle belirli minerallerin yüzeydeki izlerini takip ederek, yeraltındaki daha zengin yatakların varlığını tahmin etmekte kullanılır.",
        ],
      },
      {
        subtitle: "Jeofizik Haritalandırma",
        paragraphs: [
          "Jeofizik haritalandırma, yeraltındaki yapıları manyetik, gravimetrik ve elektriksel yöntemlerle belirlemeye yönelik çalışmaları içerir. Bu yöntemler, yeraltındaki farklılıkları tespit ederek, maden yataklarının yerini ve derinliğini belirlemekte kullanılır. Norm Engineering, jeofizik haritalandırma işlemlerinde yüksek hassasiyetli cihazlar ve yenilikçi teknikler kullanarak, maden arama süreçlerini desteklemektedir.",
        ],
      },
      {
        subtitle: "Uzaktan Algılama ve Haritalandırma",
        paragraphs: [
          "Uzaktan algılama teknikleri, uydu görüntüleri ve hava fotoğrafları kullanılarak geniş alanların haritalandırılmasını sağlar. Bu yöntem, özellikle ulaşılması zor bölgelerdeki potansiyel maden yataklarının tespitinde büyük avantaj sağlar. Norm Engineering, uzaktan algılama teknolojileriyle elde edilen verileri analiz ederek, detaylı haritalar oluşturur ve saha çalışmalarına yön verir.",
        ],
      },
      {
        subtitle: "Haritalandırma ve Sondaj Çalışmaları",
        paragraphs: [
          "Haritalandırma işlemlerinden elde edilen veriler, sondaj çalışmalarının planlanmasında kritik rol oynar. Doğru haritalandırma, sondaj noktalarının hassas bir şekilde belirlenmesini ve maden rezervlerinin doğru tahmin edilmesini sağlar.",
        ],
      },
      {
        subtitle: "Sonuç",
        paragraphs: [
          "Haritalandırma işlemleri, maden arama faaliyetlerinin temel unsurlarından biridir. Jeolojik, jeokimyasal ve jeofizik haritalandırma yöntemleri, yeraltı kaynaklarının keşfi ve değerlendirilmesi sürecinde kritik öneme sahiptir. Norm Engineering olarak, bu alandaki uzmanlığımız ve yenilikçi yaklaşımımızla, müşterilerimize güvenilir ve sürdürülebilir çözümler sunmaktan gurur duyuyoruz.",
        ],
      },
    ],
  },
  "maden-arama-faaliyetleri-gelecegin-kaynaklarini-kesfetmek": {
    id: "3",
    title: "Maden Arama Faaliyetleri: Geleceğin Kaynaklarını Keşfetmek",
    excerpt:
      "Maden arama faaliyetleri, yeraltı kaynaklarını keşfetmek ve değerlendirmek amacıyla yapılan sistematik çalışmalardır.",
    image: "/assets/mineral-exp.jpg",
    category: "Maden Arama",
    author: "NORM Engineering",
    date: "Mayıs 2024",
    readTime: "6 dk",
    content: [
      {
        subtitle: "",
        paragraphs: [
          "Maden arama faaliyetleri, yeraltı kaynaklarını keşfetmek ve değerlendirmek amacıyla yapılan sistematik çalışmalardır. Bu faaliyetler, modern teknolojiler ve bilimsel yöntemler kullanılarak gerçekleştirilir ve endüstriyel kalkınmanın temel taşlarından biridir. Norm Engineering olarak, maden arama projelerinde uzmanlaşmış ekibimizle, müşterilerimize en yüksek kalitede danışmanlık hizmeti sunmaktayız.",
        ],
      },
      {
        subtitle: "Maden Arama Süreci ve Yöntemleri",
        paragraphs: [
          "Maden arama süreci, birkaç temel aşamadan oluşur. İlk olarak, potansiyel maden yatakları belirlenir. Bu aşamada jeolojik haritalama, jeokimyasal analizler ve uzaktan algılama teknikleri kullanılır. Ardından, detaylı arazi çalışmaları ve sondaj işlemleri yapılır. Sondajlar, yeraltındaki mineral varlıklarını doğrulamak ve rezerv miktarını tahmin etmek için kritik öneme sahiptir.",
        ],
      },
      {
        subtitle: "Jeofizik Yöntemler",
        paragraphs: [
          "Maden arama faaliyetlerinde kullanılan başlıca jeofizik yöntemler arasında manyetik, gravimetrik ve elektriksel yöntemler bulunur. Manyetik yöntemler, yer kabuğundaki manyetik anomali bölgelerini tespit ederken, gravimetrik yöntemler yer çekimi anomalilerini ölçerek yoğunluk farklarını belirler. Elektriksel yöntemler ise yeraltındaki iletkenlik farklılıklarını ölçerek mineral varlığını tespit etmeye yardımcı olur.",
        ],
      },
      {
        subtitle: "Norm Engineering'in Katkıları",
        paragraphs: [
          "Norm Engineering, maden arama projelerinde geniş deneyime sahip bir danışmanlık firması olarak, müşterilerine özelleştirilmiş çözümler sunar. Uzman ekibimiz, en son teknolojik gelişmeleri ve yenilikçi yöntemleri kullanarak, maden arama süreçlerinde maksimum verimlilik ve doğruluk sağlar. Her proje için özel olarak tasarlanmış stratejiler geliştirir ve saha çalışmalarını titizlikle yönetiriz.",
        ],
      },
      {
        subtitle: "Çevresel ve Sosyal Sorumluluk",
        paragraphs: [
          "Maden arama faaliyetlerinin çevresel ve sosyal etkileri dikkate alınarak planlanması büyük önem taşır. Norm Engineering, sürdürülebilir madencilik uygulamaları ve çevre koruma standartlarına büyük önem verir. Aynı zamanda, yerel topluluklarla işbirliği yaparak, sosyal sorumluluk projelerine destek veririz.",
        ],
      },
      {
        subtitle: "Sonuç",
        paragraphs: [
          "Maden arama faaliyetleri, yeraltı kaynaklarının keşfedilmesi ve değerlendirilmesi açısından kritik bir rol oynar. Norm Engineering olarak, bu süreçte müşterilerimize güvenilir, yenilikçi ve sürdürülebilir çözümler sunmaktan gurur duyuyoruz.",
        ],
      },
    ],
  },
};

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const blog = slug ? blogContents[slug] : null;

  if (!blog) {
    return (
      <div className="relative bg-slate-950 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-3">
            Blog Yazısı Bulunamadı
          </h1>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-400 transition-colors"
          >
            <ArrowLeftOutlined />
            Blog'a Geri Dön
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="relative bg-slate-950 overflow-hidden min-h-screen">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="blog-detail-pattern"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <circle
                cx="50"
                cy="50"
                r="30"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-amber-600"
              />
              <circle
                cx="50"
                cy="50"
                r="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-blue-600"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#blog-detail-pattern)" />
        </svg>
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950"></div>

      {/* Back Button */}
      <div className="relative py-6 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-amber-500 transition-colors group"
          >
            <ArrowLeftOutlined className="group-hover:-translate-x-1 transition-transform" />
            Blog'a Geri Dön
          </Link>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative px-6 md:px-12 lg:px-16 mb-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative h-96 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent z-10"></div>
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover"
            />

            {/* Category Badge */}
            <div className="absolute top-6 left-6 z-20">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-600/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                <TagOutlined />
                {blog.category}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative px-6 md:px-12 lg:px-16 pb-12">
        <div className="max-w-4xl mx-auto">
          <article className="bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700 p-8 md:p-12">
            {/* Meta Info */}
            <div className="flex items-center gap-4 text-xs text-slate-400 mb-4">
              <span className="flex items-center gap-2">
                <CalendarOutlined />
                {blog.date}
              </span>
              <span className="text-amber-500 font-medium">
                {blog.readTime} okuma
              </span>
            </div>

            {/* Title */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
              {blog.title}
            </h1>

            {/* Content Sections */}
            <div className="prose prose-invert prose-lg max-w-none">
              {blog.content.map((section, index) => (
                <div key={index} className="mb-6">
                  {section.subtitle && (
                    <h2 className="text-xl font-bold text-amber-500 mb-3 border-l-2 border-amber-600 pl-3">
                      {section.subtitle}
                    </h2>
                  )}
                  {section.paragraphs.map((paragraph, pIndex) => (
                    <p
                      key={pIndex}
                      className="text-slate-300 leading-relaxed mb-3 text-base"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="my-12 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>

            {/* CTA */}
            <div className="text-center">
              <p className="text-slate-400 text-sm mb-4">
                Projeleriniz için profesyonel danışmanlık almak ister misiniz?
              </p>
              <Link
                to="/iletisim"
                className="inline-block px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-semibold text-sm rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Bizimle İletişime Geçin
              </Link>
            </div>
          </article>

          {/* Back to Blog */}
          <div className="mt-8 text-center">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-amber-500 transition-colors text-base group"
            >
              <ArrowLeftOutlined className="group-hover:-translate-x-1 transition-transform" />
              Diğer Blog Yazılarına Göz Atın
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
