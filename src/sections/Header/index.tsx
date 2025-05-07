import NavigationMenu from "./components/NavigationMenu";

const Header = () => {
  return (
    <div className="flex flex-col text-white">
      <div className="bg-slate-900 flex flex-col px-20">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Company Info */}
          <div className="flex items-center gap-x-5">
            <div className="w-24 h-20 flex items-center">
              <img
                src="/assets/norm-logo.png"
                className="object-contain"
                alt="NORM logo"
              />
            </div>
            <div className="flex flex-col items-start">
              <span className="text-xl font-semibold">NORM</span>
              <span className="text-sm text-slate-500">
                SONDAJ TEKNOLOJİLERİ LTD ŞTİ.
              </span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex items-center gap-5 text-slate-200">
            <div className="flex items-center gap-2">
              <img
                src="/assets/location-icon.png"
                className="w-10 h-10"
                alt="Location"
              />
              Çankaya, ANKARA
            </div>
            <div className="flex items-center gap-2">
              <img
                src="/assets/mail-icon.png"
                className="w-10 h-10"
                alt="Email"
              />
              info@norm-engineering.com
            </div>
            <div className="flex items-center gap-2">
              <img src="/assets/phone.png" className="w-10 h-10" alt="Phone" />
              +90 543 685 73 66
            </div>
          </div>
        </div>

        {/* Divider and Navigation */}
        <div className="h-1 w-full bg-[#1d40af]" />
        <NavigationMenu />
      </div>
    </div>
  );
};

export default Header;
