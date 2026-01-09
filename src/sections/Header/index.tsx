import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavigationMenu from "./components/NavigationMenu";
import {
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-950/95 backdrop-blur-md shadow-xl shadow-slate-900/50"
          : "bg-slate-950"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Top Bar - Contact Info */}
        <div
          className={`flex items-center justify-between px-6 md:px-12 transition-all duration-300 ${
            isScrolled ? "h-0 opacity-0 overflow-hidden" : "h-16 opacity-100"
          }`}
        >
          {/* Logo and Company Name */}
          <Link to="/" className="flex items-center gap-4 cursor-pointer hover:opacity-80 transition-opacity">
            <img
              src="/assets/norm-logo.png"
              className="h-10 w-auto object-contain"
              alt="NORM logo"
            />
            <div className="flex flex-col">
              <span className="text-white font-bold text-lg">NORM</span>
              <span className="text-xs text-slate-400 uppercase tracking-wide">
                Engineering
              </span>
            </div>
          </Link>

          {/* Contact Info - Compact */}
          <div className="hidden lg:flex items-center gap-6 text-sm">
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-400 hover:text-amber-500 transition-colors group"
            >
              <div className="w-8 h-8 rounded-full bg-blue-600/20 flex items-center justify-center group-hover:bg-amber-600/20 transition-colors">
                <EnvironmentOutlined className="text-blue-500 group-hover:text-amber-500" />
              </div>
              <span>Çankaya, ANKARA</span>
            </a>

            <a
              href="mailto:info@norm-engineering.com"
              className="flex items-center gap-2 text-slate-400 hover:text-amber-500 transition-colors group"
            >
              <div className="w-8 h-8 rounded-full bg-blue-600/20 flex items-center justify-center group-hover:bg-amber-600/20 transition-colors">
                <MailOutlined className="text-blue-500 group-hover:text-amber-500" />
              </div>
              <span>info@norm-engineering.com</span>
            </a>

            <a
              href="tel:+905436857366"
              className="flex items-center gap-2 text-slate-400 hover:text-amber-500 transition-colors group"
            >
              <div className="w-8 h-8 rounded-full bg-blue-600/20 flex items-center justify-center group-hover:bg-amber-600/20 transition-colors">
                <PhoneOutlined className="text-blue-500 group-hover:text-amber-500" />
              </div>
              <span>+90 543 685 73 66</span>
            </a>

            <a
              href="https://www.linkedin.com/company/norm-sondaj-teknolojileri"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110"
            >
              <LinkedinOutlined className="text-base" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div
          className={`h-px bg-gradient-to-r from-transparent via-blue-600 to-transparent transition-opacity duration-300 ${
            isScrolled ? "opacity-0" : "opacity-100"
          }`}
        />

        {/* Main Navigation */}
        <div className="px-6 md:px-12">
          <NavigationMenu isScrolled={isScrolled} />
        </div>
      </div>
    </header>
  );
};

export default Header;
