import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";
import { ParallaxBanner } from "react-scroll-parallax";

export const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICES_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Oops! Something went wrong. Please try again."));
  };

  return (
    <ParallaxBanner
      layers={[
        {
          image: "/img/contact-image-2.jpg",
          speed: -40,
        },
      ]}
      className="min-h-screen"
    >
      <section
        id="contact"
        className="relative min-h-screen flex items-center justify-center py-20 bg-cover bg-bottom bg-no-repeat shadow-lg"
      >
        <div className="absolute inset-0 bg-black/80 z-0"></div>
        <RevealOnScroll>
          <div className="px-4 w-full max-w-4xl mx-auto relative z-10">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
              {t("contact.title")}
            </h2>
            <form
              onSubmit={handleSubmit}
              className="grid gap-6 md:grid-cols-2 bg-black/90 p-8 rounded-xl"
            >
              <div className="col-span-2 md:col-span-1">
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  className="w-full bg-white/5 border border-white/10 rounded px-6 py-4 text-white text-lg focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                  placeholder={t("contact.name")}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              <div className="col-span-2 md:col-span-1">
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  className="w-full bg-white/5 border border-white/10 rounded px-6 py-4 text-white text-lg focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                  placeholder={t("contact.email")}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>

              <div className="col-span-2">
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  rows={6}
                  className="w-full bg-white/5 border border-white/10 rounded px-6 py-4 text-white text-lg focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                  placeholder={t("contact.message")}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>

              <div className="col-span-2">
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-4 px-6 rounded font-semibold text-lg transition relative overflow-hidden cursor-pointer hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                >
                  {t("contact.send")}
                </button>
              </div>
            </form>
          </div>
        </RevealOnScroll>
      </section>
    </ParallaxBanner>
  );
};
