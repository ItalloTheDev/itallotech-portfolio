import { RevealOnScroll } from "../RevealOnScroll";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export const About = () => {
  const { t } = useTranslation();

  const frontendSkills = [
    "React",
    "TypeScript",
    "TailwindCSS",
    "JavaScript",
    "CSS",
  ];

  const backendSkills = ["node.js", "Python", "MongoDB", "PHP", "SQL"];

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden"
    >
      {/* Background Logo */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none opacity-5 bg-no-repeat bg-cover bg-[position:right_center] bg-[url('/img/logo.png')] filter grayscale" />
      <RevealOnScroll>
        <div className="relative max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {t("about.title")}
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">{t("about.description")}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                  hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                  hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transintion-all">
              <h3 className="text-xl font-bold mb-4">
                {" "}
                🏫 {t("about.education.title")}{" "}
              </h3>

              {/* - Education UDEMY ONLINE LEARNING - */}
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-10">
                <li>
                  <strong>
                    <a
                      href="https://www.udemy.com/course/react-do-zero-a-maestria-c-hooks-router-api-projetos/"
                      target="_blank"
                      className="hover:underline"
                    >
                      {t("about.education.udemy.course")}
                    </a>
                  </strong>
                  - {t("about.education.udemy.type")} -{" "}
                  <strong className="bg-gradient-to-r from-blue-500 to-purple-300 bg-clip-text text-transparent transition duration-600 hover:to-cyan-300">
                    {" "}
                    <a href="https://www.udemy.com" target="_blank">
                      Udemy
                    </a>{" "}
                  </strong>{" "}
                  - Online (2025)
                </li>
                <li>{t("about.education.udemy.details")}</li>
              </ul>
              {/*- Education UDEMY End - */}

              {/* - Education AAS IN MOBILE APP DEVELOPMENT - */}
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-10">
                <li>
                  <strong aria-label="Associate Degree">
                    <a
                      href="https://www.istec.pt/index.php/ctesp-desenvolvimento-para-dispositivos-moveis/"
                      target="_blank"
                      className="hover:underline"
                    >
                      {t("about.education.istec.course")}{" "}
                    </a>
                  </strong>
                  -{" "}
                  <a
                    href="https://www.istec.pt"
                    target="_blank"
                    className="bg-gradient-to-r from-blue-500 to-purple-300 bg-clip-text text-transparent transition duration-600 hover:to-cyan-300"
                  >
                    <strong>{t("about.education.istec.university")}</strong>
                  </a>{" "}
                  - {t("about.education.istec.university_name")} (2017-2020)
                </li>
                <li>{t("about.education.istec.details")}</li>
              </ul>
              {/*- Education AAS IN MAD End - */}

              {/* - Education PROFESSIONAL COURSE MPC - */}
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-10">
                <li>
                  <strong>{t("about.education.mpc.course")}</strong>-{" "}
                  {t("about.education.mpc.school_type")} -{" "}
                  <strong className="bg-gradient-to-r from-blue-500 to-purple-300 bg-clip-text text-transparent">
                    {" "}
                    Cacilhas Tejo
                  </strong>{" "}
                  - Almada (2014-2017)
                </li>
                <li>{t("about.education.mpc.details")}</li>
              </ul>
              {/*- Education PROFESSIONAL COURSE MPC End - */}
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transintion-all">
              <h3 className="text-xl font-bold mb-4">
                {" "}
                💼 {t("about.work.title")}{" "}
              </h3>
              <div className="space-y-4 text-gray-300">
                {/* Job FREELANCER DEVELOPER */}
                <div className="">
                  <h4 className="font-semibold">
                    {t("about.work.freelancer.title")} (2025 - Present)
                  </h4>
                  <p>{t("about.work.freelancer.details")}</p>
                </div>

                {/* Job FREELANCER DEVELOPER END */}

                {/* Job JAVALI SOFTWARE DEVELOPER */}
                <div className="">
                  <h4 className="font-semibold">
                    {t("about.work.javali.title")}{" "}
                    <a
                      href="https://www.javali.pt"
                      target="_blank"
                      className="bg-gradient-to-r from-blue-500 to-purple-300 bg-clip-text text-transparent transition duration-600 hover:to-cyan-300"
                    >
                      JAVALI
                    </a>{" "}
                    (2021-2022)
                  </h4>
                  <p>{t("about.work.javali.details")}</p>
                </div>
                {/*End JAVALI SOFTWARE DEVELOPER */}

                {/* Job BLASTING ENERGY WEB DEVELOPER*/}
                <div className="">
                  <h4 className="font-semibold">
                    {t("about.work.blasting.title")}{" "}
                    <a
                      href="https://www.blasting.pt"
                      target="_blank"
                      className="bg-gradient-to-r from-blue-500 to-purple-300 bg-clip-text text-transparent transition duration-600 hover:to-cyan-300"
                    >
                      BLASTING Energy
                    </a>{" "}
                    (2019-2020)
                  </h4>

                  <p>{t("about.work.blasting.details")}</p>
                </div>
                {/*End BLASTING ENERGY WEB DEVELOPER */}

                {/* Job BLASTING ENERGY WEB DEVELOPER*/}
                <div className="">
                  <h4 className="font-semibold">
                    {t("about.work.a2it.title")}{" "}
                    <a
                      href="https://a2it.com"
                      target="_blank"
                      className="bg-gradient-to-r from-blue-500 to-purple-300 bg-clip-text text-transparent transition duration-600 hover:to-cyan-300"
                    >
                      A2iT
                    </a>{" "}
                    (2017-2017)
                  </h4>

                  <p>{t("about.work.a2it.details")}</p>
                </div>
                {/*End BLASTING ENERGY WEB DEVELOPER */}
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
