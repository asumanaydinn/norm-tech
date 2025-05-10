import { Checkbox } from "antd";

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
  <div className="bg-stone-800 flex flex-col items-start justify-start gap-8 text-white p-6">
    <div className="w-24 h-24 mr-4 border-b-4 border-b-amber-600 pb-2">
      <img src={img} alt={title} className="w-full h-full object-contain" />
    </div>
    <div className="flex flex-col items-start h-full gap-2">
      <span className="text-xl font-semibold text-slate-100 text-left">
        {title}
      </span>
      <span className="text-slate-400 text-sm text-left leading-relaxed">
        em Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s.
      </span>
    </div>
  </div>
);

const Services = () => {
  return (
    <div className="relative flex bg-gray-100 w-full h-screen">
      <img
        className="w-full h-full object-cover absolute top-0 left-0 "
        src="/assets/services-background.jpg"
        alt="services background"
      />
      <div className="bg-zinc-900/80 w-full h-screen z-20 absolute py-16 px-24">
        <div className="flex gap-20 w-full h-full items-start">
          <div className="grid grid-cols-2 gap-4 w-1/2 h-full">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                img={service.img}
              />
            ))}
          </div>
          <div className="flex w-1/2 flex-col justify-center">
            <div className="flex flex-col gap-10">
              <div className="border-l-4 border-amber-600 pl-6 flex flex-col text-left gap-2">
                <span className="text-slate-400">Uzmanlığımız</span>
                <h2 className="text-4xl font-semibold leading-8 text-left text-slate-100">
                  Geleceğin Kaynaklarını
                </h2>
                <h2 className="text-4xl font-semibold leading-8 text-left text-slate-100">
                  Keşfetmek
                </h2>
              </div>
              <p className="mt-2 text-xl text-left text-slate-200">
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
        </div>
      </div>
    </div>
  );
};

export default Services;
