import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import SectionWrapper from '../hoc/SectionWrapper'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { useLanguage } from '../contexts/LanguageContext'
import { isMobile } from 'react-device-detect';

const translations = {
  pt: {
    intro: "Introdução",
    overview: "Visão geral.",
    description: `Sou um desenvolvedor de software altamente experiente, especializado em <b>TypeScript e JavaScript</b>, com ampla expertise no desenvolvimento de backends robustos utilizando <b>Java, Go e Node.js</b>. Também possuo domínio de frameworks renomados como ReactJS e NextJS. Atualmente, estou aprimorando meus conhecimentos em Three.js, uma ferramenta incrível para criação de experiências tridimensionais. Minha dedicação e perseverança em me manter atualizado com as mais recentes tecnologias me possibilitam criar aplicações escaláveis, eficientes e incrivelmente amigáveis aos usuários. <b>Tenho paixão por transformar ideias em realidades tangíveis através de soluções de software inovadoras.</b>
    <br />Se você está procurando um parceiro confiável para colaborar no desenvolvimento de seus projetos, estou aqui para ajudar. Vamos nos unir e proporcionar uma experiência única, transformando seus sonhos em realidade através do poder do código. Estou ansioso para trabalhar ao seu lado e superar todas as expectativas. Vamos começar essa jornada juntos e garantir resultados incríveis para o seu negócio.`,
  },
  en: {
    intro: "Introduction",
    overview: "Overview.",
    description: `I am a highly experienced software developer specializing in <b>TypeScript and JavaScript</b>, with extensive expertise in building robust backends using <b>Java, Go, and Node.js</b>. I am also proficient in renowned frameworks like ReactJS and NextJS. Currently, I am enhancing my knowledge in Three.js, an incredible tool for creating three-dimensional experiences. My dedication to staying up-to-date with the latest technologies enables me to build scalable, efficient, and highly user-friendly applications. <b>I am passionate about turning ideas into tangible realities through innovative software solutions.</b>
    <br />If you are looking for a reliable partner to collaborate on your projects, I am here to help. Let’s join forces and provide a unique experience by turning your dreams into reality through the power of code. I look forward to working with you and exceeding expectations. Let’s start this journey together and deliver amazing results for your business.`,
  },
  de: {
    intro: "Einführung",
    overview: "Überblick.",
    description: `Ich bin ein hochqualifizierter Softwareentwickler, spezialisiert auf <b>TypeScript und JavaScript</b>, mit umfangreicher Erfahrung im Aufbau robuster Backends unter Verwendung von <b>Java, Go und Node.js</b>. Außerdem beherrsche ich renommierte Frameworks wie ReactJS und NextJS. Derzeit erweitere ich mein Wissen in Three.js, einem großartigen Tool zur Erstellung dreidimensionaler Erlebnisse. Mein Engagement, stets auf dem neuesten Stand der Technik zu bleiben, ermöglicht es mir, skalierbare, effiziente und benutzerfreundliche Anwendungen zu entwickeln. <b>Ich habe eine Leidenschaft dafür, Ideen in greifbare Realitäten umzusetzen, durch innovative Softwarelösungen.</b>
    <br />Wenn Sie einen zuverlässigen Partner für die Zusammenarbeit an Ihren Projekten suchen, bin ich hier, um zu helfen. Lassen Sie uns gemeinsam eine einzigartige Erfahrung schaffen und Ihre Träume durch die Kraft des Codes verwirklichen. Ich freue mich darauf, mit Ihnen zusammenzuarbeiten und alle Erwartungen zu übertreffen. Beginnen wir diese Reise gemeinsam und liefern beeindruckende Ergebnisse für Ihr Unternehmen.`,
  },
};

const ServiceCard = ({ index, title, icon }) => {
  const { language } = useLanguage();

  return (
    <Tilt
      className="xs:w-[250px] w-full"
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.74)}
        className="w-full green-pink p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title[language]} className="w-16 h-16 object-contain"/>
          <h3 className="text-white text-[20px] font-bold text-center">{title[language]}</h3>
        </div>
        
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  const { language } = useLanguage();
  const { intro, overview, description } = translations[language];

  return (
    <>
      {isMobile ? 
        (<>
          <div>
            <p className={styles.sectionSubText}>{intro}</p>
            <h2 className={styles.sectionHeadText}>{overview}</h2>
          </div>
          <p
            className="mt-4 text-secondary text-[17px] max-w-5xl leading-[30px]" 
            dangerouslySetInnerHTML={{ __html: description }} 
          />
        </>)
      : 
        (<>
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>{intro}</p>
            <h2 className={styles.sectionHeadText}>{overview}</h2>
          </motion.div>

          <motion.p
            variants={fadeIn("","",0.1,1)}
            className="mt-4 text-secondary text-[17px] max-w-5xl leading-[30px]"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </>)
      }

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={index} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")