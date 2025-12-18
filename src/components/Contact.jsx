import { motion } from "framer-motion"

import { styles } from "../styles"
import { EarthCanvas } from "./canvas"
import SectionWrapper from '../hoc/SectionWrapper'
import { slideIn, fadeIn } from "../utils/motion"
import { useLanguage } from "../contexts/LanguageContext"

const translations = {
  pt: {
    intro: "Entrar em contato",
    description: "Contato.",
    email: "Email",
    phone: "Celular",
    github: "GitHub",
    linkedin: "LinkedIn",
    downloadResume: "Baixar Curriculo",
    letsConnect: "Vamos conversar!",
    connectDescription: "Estou sempre aberto a novas oportunidades e projetos interessantes. Entre em contato comigo atraves de qualquer um dos canais abaixo."
  },
  en: {
    intro: "Get in touch",
    description: "Contact.",
    email: "Email",
    phone: "Phone",
    github: "GitHub",
    linkedin: "LinkedIn",
    downloadResume: "Download Resume",
    letsConnect: "Let's connect!",
    connectDescription: "I'm always open to new opportunities and interesting projects. Reach out to me through any of the channels below."
  },
  de: {
    intro: "Kontakt aufnehmen",
    description: "Kontakt.",
    email: "E-Mail",
    phone: "Handy",
    github: "GitHub",
    linkedin: "LinkedIn",
    downloadResume: "Lebenslauf herunterladen",
    letsConnect: "Lass uns vernetzen!",
    connectDescription: "Ich bin immer offen fur neue Moglichkeiten und interessante Projekte. Kontaktieren Sie mich uber einen der folgenden Kanale."
  },
};

const contactInfo = [
  {
    type: "email",
    value: "tavinteixeira9@gmail.com",
    href: "mailto:tavinteixeira9@gmail.com",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    type: "phone",
    value: "+55 (17) 99198-8338",
    href: "tel:+5517991988338",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
  },
  {
    type: "github",
    value: "github.com/T4vexx",
    href: "https://github.com/T4vexx",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
  },
  {
    type: "linkedin",
    value: "linkedin.com/in/otavio-teixeira12",
    href: "https://linkedin.com/in/otavio-teixeira12",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    ),
  },
];

const ContactCard = ({ contact, index, labelKey, translations, language }) => {
  return (
    <motion.a
      href={contact.href}
      target={contact.type === "email" || contact.type === "phone" ? "_self" : "_blank"}
      rel="noopener noreferrer"
      variants={fadeIn("up", "spring", index * 0.15, 0.75)}
      className="bg-tertiary p-5 rounded-2xl flex items-center gap-4 hover:bg-black-200 transition-all duration-300 cursor-pointer group"
    >
      <div className="w-12 h-12 rounded-full bg-black-200 flex items-center justify-center text-secondary group-hover:text-white group-hover:bg-[#915eff] transition-all duration-300">
        {contact.icon}
      </div>
      <div className="flex flex-col">
        <span className="text-secondary text-[14px]">{translations[language][contact.type]}</span>
        <span className="text-white font-medium text-[16px] break-all">{contact.value}</span>
      </div>
    </motion.a>
  );
};

const Contact = () => {
  const { language } = useLanguage();
  const { intro, description, letsConnect, connectDescription, downloadResume } = translations[language];

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/otavioaugustoresume.pdf';
    link.download = 'Otavio_Augusto_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>{intro}</p>
        <h3 className={styles.sectionHeadText}>{description}</h3>

        <div className="mt-8">
          <h4 className="text-white text-[20px] font-bold mb-2">{letsConnect}</h4>
          <p className="text-secondary text-[15px] mb-8 leading-relaxed">
            {connectDescription}
          </p>

          <div className="flex flex-col gap-4">
            {contactInfo.map((contact, index) => (
              <ContactCard
                key={contact.type}
                contact={contact}
                index={index}
                labelKey={contact.type}
                translations={translations}
                language={language}
              />
            ))}
          </div>

          <motion.button
            variants={fadeIn("up", "spring", 0.6, 0.75)}
            onClick={handleDownload}
            className="mt-8 w-full bg-[#915eff] hover:bg-[#7a4ed4] py-4 px-8 rounded-xl flex items-center justify-center gap-3 text-white font-bold shadow-md shadow-primary transition-all duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            {downloadResume}
          </motion.button>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")
