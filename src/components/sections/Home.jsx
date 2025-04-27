import { useEffect, useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { useTranslation } from "react-i18next";

export const Home = () => {
  const { t } = useTranslation();
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-cover bg-center overflow-hidden"
      //style={{
      // backgroundImage: `url('/itallotech-portfolio/img/bg-image-home.jpg')`,
      //}}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 transition-transform duration-300 ease-out"
        style={{ transform: `translateY(${offsetY * 0.3}px)` }}
      >
        <source src="/videos/video-homepage-2.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/30 z-0" />

      <RevealOnScroll>
        <div className="text-center z-20 px-4 ">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
            {t("home.title")}
          </h1>

          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
            {t("home.description")}
          </p>

          <div className="flex justify-center space-x-4">
            {/*           <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 
            hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              View Projects
            </a> */}

            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 
            hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
            >
              {t("home.contact")}
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
