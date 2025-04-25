import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("language") || "pt";
  });

  const { t } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
  };

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a className="flex justify-normal font-mono text-xl font-bold text-white">
            Itallo<span className="text-blue-500">.Tech</span>
          </a>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-400 hover:text-white transition-colors"
            >
              {t("navbar.home")}
            </a>
            <a
              href="#about"
              className="text-gray-400 hover:text-white transition-colors"
            >
              {t("navbar.about")}
            </a>
            <a
              href="#contact"
              className="text-gray-400 hover:text-white transition-colors"
            >
              {t("navbar.contact")}
            </a>

            {/* Botões de idioma */}
            <div className="flex space-x-2 px-2 py-1">
              <button
                onClick={() => changeLanguage("en")}
                className={`transition-colors duration-300 cursor-pointer ${
                  language === "en"
                    ? "text-white font-semibold"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                EN
              </button>
              <span className="text-gray-600">|</span>
              <button
                onClick={() => changeLanguage("pt")}
                className={`transition-colors duration-300 cursor-pointer ${
                  language === "pt"
                    ? "text-white font-semibold"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                PT
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
