import { useState } from "react";

const NavigationMenu = () => {
  const [selectedItem, setSelectedItem] = useState("Hakkımızda");

  const menuItems = [
    "Hakkımızda",
    "Hizmetlerimiz",
    "Proje Referanslarımız",
    "İletişim",
  ];

  return (
    <div className="flex items-end justify-between py-3">
      <div className="flex items-end gap-7">
        {menuItems.map((item) => (
          <div
            key={item}
            onClick={() => setSelectedItem(item)}
            className="relative cursor-pointer py-2 text-slate-400 transition-colors duration-200 hover:text-slate-200"
          >
            <span
              className={`relative inline-block font-medium transition-colors duration-200 ${
                selectedItem === item ? "text-slate-100" : ""
              }`}
            >
              {item}
              <span
                className={`absolute left-0 -bottom-2 h-0.5 bg-[#1d40af] transition-all duration-300 ${
                  selectedItem === item ? "w-full" : "w-0"
                }`}
              />
            </span>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-full cursor-pointer bg-[#1d40af] flex items-center justify-center transition duration-200 hover:brightness-110 hover:scale-105">
          <img
            src="/assets/instagram.svg"
            className="w-5 h-5"
            alt="instagram-icon"
          />
        </div>
        <div className="w-10 h-10 rounded-full cursor-pointer bg-[#1d40af] flex items-center justify-center transition duration-200 hover:brightness-110 hover:scale-105">
          <img
            src="/assets/linkedin.svg"
            className="w-5 h-5"
            alt="linkedin-icon"
          />
        </div>
      </div>
    </div>
  );
};

export default NavigationMenu;
