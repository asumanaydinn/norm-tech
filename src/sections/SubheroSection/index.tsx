const SubheroSection = () => {
  return (
    <div className="bg-gray-900 py-24">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="flex flex-col gap-10 items-end">
          <div className="border-r-4 border-indigo-600 pr-6 flex flex-col text-right gap-2">
            <span className="text-slate-400">Hakkımızda</span>
            <h2 className="text-4xl font-semibold leading-8 text-right text-white">
              Mühendislikte İnovatif ve Proaktif Çözümler
            </h2>
          </div>
          <div className="mr-8 w-2/3">
            <p className="mt-2 text-xl font-semibold text-right text-slate-400">
              NORM Engineering, uluslararası standartlar ve prosedürlere uygun
              şekilde, arama ve madencilik alanında hizmet vermek amacıyla 2021
              yılında kurulmuş uluslararası bağımsız mühendislik
              firmasıdır.İşimizi güvenli, etik ve sürdürülebilir bir şekilde
              yürüterek, kabul edilen çevresel, sosyal ve yönetişim ilkeleri
              doğrultusunda müşterilerimize ve topluluklara hizmet vermekteyiz.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SubheroSection;
