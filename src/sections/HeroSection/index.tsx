import LearnMoreButton from "./components/LearnMoreButton";

const HeroSection = () => {
  return (
    <div>
      <div>
        <div>
          <div>Madencilik ve Keşifte Güvenilir Ortak</div>
          <div>
            Madencilik ve Keşifte Yenilik ve Dürüstlükle Geleceği
            Şekillendiriyoruz.
          </div>
          <div>
            NORM Engineering olarak, en yüksek çevresel, sosyal ve yönetişim
            standartlarına uygun, güvenli ve sürdürülebilir mühendislik
            çözümleri sunuyoruz.”
          </div>
        </div>
        <LearnMoreButton />
      </div>
      <div>
        <img
          src="/assets/tracked-excavator.png"
          alt="Hero"
          className="w-full h-96 object-cover"
        />
        <div className="w-9 h-screen bg-blue-800"></div>
      </div>
    </div>
  );
};

export default HeroSection;
