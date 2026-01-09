import { useState } from "react";
import {
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";

const Iletisim = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="relative bg-slate-950 py-20 px-6 md:px-12 lg:px-16 overflow-hidden min-h-screen">
      {/* Topographic Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="contact-pattern"
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
              <circle
                cx="50"
                cy="50"
                r="10"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-amber-600"
              />
              <path
                d="M 0 50 L 100 50 M 50 0 L 50 100"
                stroke="currentColor"
                strokeWidth="0.3"
                className="text-slate-600"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#contact-pattern)" />
        </svg>
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950"></div>

      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-10">
          <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">
            İletişim
          </span>
          <h1 className="text-2xl md:text-3xl font-bold text-white mt-2 mb-3">
            Bizimle <span className="text-amber-500">İletişime Geçin</span>
          </h1>
          <p className="text-sm text-slate-400 max-w-2xl mx-auto">
            Sorularınız, projeleriniz veya iş birliği teklifleriniz için bize
            ulaşabilirsiniz.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-slate-700">
              <h2 className="text-xl font-bold text-white mb-4">
                Mesaj Gönderin
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-slate-300 font-medium mb-1 text-sm">
                      Ad Soyad *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 text-sm bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all"
                      placeholder="Adınız ve soyadınız"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-slate-300 font-medium mb-1 text-sm">
                      E-posta *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 text-sm bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all"
                      placeholder="ornek@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div>
                    <label className="block text-slate-300 font-medium mb-1 text-sm">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 text-sm bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all"
                      placeholder="+90 5XX XXX XX XX"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-slate-300 font-medium mb-1 text-sm">
                      Konu *
                    </label>
                    <select
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-3 py-2 text-sm bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all"
                    >
                      <option value="">Konu seçiniz</option>
                      <option value="proje">Proje Talebi</option>
                      <option value="danismanlik">Danışmanlık</option>
                      <option value="isbirligi">İş Birliği</option>
                      <option value="diger">Diğer</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-slate-300 font-medium mb-1 text-sm">
                    Mesajınız *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-sm bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all resize-none"
                    placeholder="Mesajınızı buraya yazın..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-semibold text-sm rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Mesajı Gönder
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info Cards */}
          <div className="space-y-6">
            {/* Address */}
            <div className="group bg-slate-800/50 backdrop-blur-sm p-4 rounded-lg border border-slate-700 hover:border-amber-500/60 transition-all duration-300 flex items-center">
              <div className="flex items-center gap-4 w-full">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-600/10 rounded-full flex items-center justify-center group-hover:bg-amber-600/20 transition-colors">
                  <EnvironmentOutlined className="text-2xl text-amber-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-sm mb-1 whitespace-nowrap">
                    Adres
                  </h3>
                  <p className="text-slate-400 text-xs whitespace-nowrap">
                    Çankaya, ANKARA
                  </p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="group bg-slate-800/50 backdrop-blur-sm p-4 rounded-lg border border-slate-700 hover:border-amber-500/60 transition-all duration-300 flex items-center">
              <div className="flex items-center gap-4 w-full">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-600/10 rounded-full flex items-center justify-center group-hover:bg-amber-600/20 transition-colors">
                  <MailOutlined className="text-2xl text-amber-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-sm mb-1 whitespace-nowrap">
                    E-posta
                  </h3>
                  <a
                    href="mailto:info@norm-engineering.com"
                    className="text-slate-400 text-xs hover:text-amber-500 transition-colors whitespace-nowrap"
                  >
                    info@norm-engineering.com
                  </a>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="group bg-slate-800/50 backdrop-blur-sm p-4 rounded-lg border border-slate-700 hover:border-amber-500/60 transition-all duration-300 flex items-center">
              <div className="flex items-center gap-4 w-full">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-600/10 rounded-full flex items-center justify-center group-hover:bg-amber-600/20 transition-colors">
                  <PhoneOutlined className="text-2xl text-amber-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-sm mb-1 whitespace-nowrap">
                    Telefon
                  </h3>
                  <a
                    href="tel:+905436857366"
                    className="text-slate-400 text-xs hover:text-amber-500 transition-colors whitespace-nowrap"
                  >
                    +90 543 685 73 66
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Iletisim;
