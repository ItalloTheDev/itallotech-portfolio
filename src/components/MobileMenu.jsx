import { useTranslation } from "react-i18next";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const { i18n } = useTranslation();
  const language = i18n.language;

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.90)] z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out
        ${
          menuOpen
            ? "h-screen opacity-100 pointer-events-auto"
            : "h-0 opacity-0 pointer-events-none"
        }
      `}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        &times;
      </button>

      {["home", "about", "projects", "contact"].map((section, index) => (
        <a
          key={index}
          href={`#${section}`}
          onClick={() => setMenuOpen(false)}
          className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
            ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }
          `}
        >
          {section.charAt(0).toUpperCase() + section.slice(1)}
        </a>
      ))}

      {/* Seletor de Idioma */}
      <div className="flex space-x-2 mt-6">
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
  );
};
