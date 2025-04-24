import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";

export const Contact = () => {
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
      .then((result) => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Oops! Something went wrong. Please try again."));
  };

  return (
    <section
      id="contact"
      style={{
        backgroundImage: `url('${
          import.meta.env.BASE_URL
        }img/contact-image.jpg')`,
      }}
      className="relative min-h-screen flex items-center justify-center py-20 bg-cover bg-center"
    >
      <div className="absolute inset-0 bg-black/65 z-0"></div>{" "}
      {/* opcional para escurecer o fundo */}
      <RevealOnScroll>
        <div className="px-4 w-full max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Get In Touch
          </h2>
          <form
            action=""
            className="grid gap-6 md:grid-cols-2 bg-black/90 p-8 rounded-xl"
            onSubmit={handleSubmit}
          >
            <div className="col-span-2 md:col-span-1">
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                className="w-full bg-white/5 border border-white/10 rounded px-6 py-4 text-white text-lg transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Name..."
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div className="col-span-2 md:col-span-1">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                className="w-full bg-white/5 border border-white/10 rounded px-6 py-4 text-white text-lg transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="example@gmail.com"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div className="col-span-2">
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                rows={6}
                className="w-full bg-white/5 border border-white/10 rounded px-6 py-4 text-white text-lg transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Your Message..."
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
                Send Message
              </button>
            </div>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
