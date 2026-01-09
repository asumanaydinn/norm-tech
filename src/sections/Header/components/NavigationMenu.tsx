import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface NavigationMenuProps {
  isScrolled: boolean;
}

const NavigationMenu = ({ isScrolled }: NavigationMenuProps) => {
  const location = useLocation();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const menuItems = [
    { label: "Hakkımızda", href: "/" },
    { label: "Hizmetlerimiz", href: "/hizmetlerimiz" },
    { label: "Proje Referanslarımız", href: "/proje-referanslarimiz" },
    { label: "Blog", href: "/blog" },
    { label: "İletişim", href: "/iletisim" },
  ];

  return (
    <div className="flex items-center justify-center py-4">
      {/* Logo - Visible when scrolled */}
      <Link
        to="/"
        className={`absolute left-6 md:left-12 flex items-center gap-3 transition-all duration-300 hover:opacity-80 ${
          isScrolled
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-4 pointer-events-none"
        }`}
      >
        <img
          src="/assets/norm-logo.png"
          className="h-10 w-auto object-contain"
          alt="NORM logo"
        />
        <div className="flex flex-col justify-center">
          <span className="text-white font-bold text-base leading-tight">NORM</span>
          <span className="text-xs text-slate-500 leading-tight">Engineering</span>
        </div>
      </Link>

      {/* Navigation Menu - Centered */}
      <nav className="flex items-center gap-1">
        {menuItems.map((item) => (
          <Link
            key={item.label}
            to={item.href}
            onMouseEnter={() => setHoveredItem(item.label)}
            onMouseLeave={() => setHoveredItem(null)}
            className="relative px-4 py-2 text-slate-300 font-medium transition-colors duration-200 hover:text-white group"
          >
            {item.label}
            
            {/* Hover indicator */}
            <span
              className={`absolute left-0 right-0 bottom-0 h-0.5 bg-gradient-to-r from-amber-500 to-amber-600 transition-all duration-300 ${
                hoveredItem === item.label || location.pathname === item.href
                  ? "opacity-100 scale-x-100"
                  : "opacity-0 scale-x-0"
              }`}
            />

            {/* Active dot */}
            {(location.pathname === item.href || (location.pathname === "/" && item.href === "/")) && (
              <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-amber-500 rounded-full" />
            )}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default NavigationMenu;
