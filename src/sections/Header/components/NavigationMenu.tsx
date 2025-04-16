const NavigationMenu = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-10">
        <div>
          <span>Hakkımızda</span>
        </div>
        <div>
          <span>Hizmetlerimiz</span>
        </div>
        <div>
          <span>Proje Referanslarımız</span>
        </div>
        <div>
          <span>İletişim</span>
        </div>
      </div>
      <div>
        <div>Facebook</div>
        <div>Instagram</div>
        <div>LinkedIn</div>
      </div>
    </div>
  );
};

export default NavigationMenu;
