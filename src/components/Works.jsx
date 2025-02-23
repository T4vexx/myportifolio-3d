import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import { styles } from "../styles"
import { github } from "../assets"
import SectionWrapper from "../hoc/SectionWrapper"
import { projects } from "../constants"
import { fadeIn, textVariant } from '../utils/motion'
import { isMobile } from 'react-device-detect';
import { useLanguage } from "../contexts/LanguageContext"


const ProjectCard = ({ index, name, description, tags, image, source_code_link}) => {
  const { language } = useLanguage();

  return (
    <>
    {isMobile ? (
         <Tilt
         options={{
           max: 45,
           scale: 1,
           speed: 450
         }}
         className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
       >
         <div className="relative w-full h-[230px]">
           <img 
             src={image}
             alt={name[language]}
             className="w-full h-full object-cover rounded-2xl"
           />

           <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
             <div
               onClick={() => window.open(source_code_link, "_blank")}
               className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
             >
               <img 
                 src={github}
                 alt="github"
                 className="w-1/2 h-1/2 object-contain"
               />
             </div>
           </div>
         </div>

         <div className="mt-5">
           <h3 className="text-white font-bold text-[24px]">{name[language]}</h3>
           <p className="mt-2 text-secondary text-[14px]">{description[language]}</p>
         </div>

         <div className="mt-4 flex flex-wrap gap-2">
           {tags.map((tag) => (
             <p key={tag.name} className={`text-[14px] ${tag.color}`}>
               #{tag.name}
             </p>
           ))}
         </div>
       </Tilt>
      ) : (
        <motion.div variants={fadeIn("up","spring", index*0.5, 0.74)}>
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
        >
          <div className="relative w-full h-[230px]">
            <img 
              src={image}
              alt={name[language]}
              className="w-full h-full object-cover rounded-2xl"
            />

            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img 
                  src={github}
                  alt="github"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          </div>

          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{name[language]}</h3>
            <p className="mt-2 text-secondary text-[14px]">{description[language]}</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </Tilt>
      </motion.div>
      )}
    </>
  )
}

const translations = {
  pt: {
    intro: "Meus trabalhos",
    description: "Projetos.",
    presentation: "Os exemplos abaixo refletem minha habilidade em criar soluções eficientes e escaláveis para resolver problemas complexos. Além disso, evidencio minha capacidade em gerenciar projetos com agilidade, atendendo aos prazos e colaborando com equipes multidisciplinares. Não deixe de conferir o código, no github, dos projetos para uma visão concreta das minhas habilidades. Juntos, podemos alcançar resultados que superem todas as expectativas.",
  },
  en: {
    intro: "My work",
    description: "Projects.",
    presentation: "The examples below reflect my ability to create efficient and scalable solutions to solve complex problems. Additionally, they highlight my capability to manage projects with agility, meeting deadlines and collaborating with multidisciplinary teams. Be sure to check out the project code on GitHub for a concrete view of my skills. Together, we can achieve results that exceed all expectations.",
  },
  de: {
    intro: "Meine Arbeiten",
    description: "Projekte.",
    presentation: "Die folgenden Beispiele zeigen meine Fähigkeit, effiziente und skalierbare Lösungen zur Bewältigung komplexer Probleme zu entwickeln. Außerdem verdeutlichen sie meine Kompetenz im agilen Projektmanagement, die Einhaltung von Fristen und die Zusammenarbeit mit interdisziplinären Teams. Schauen Sie sich unbedingt den Code der Projekte auf GitHub an, um einen konkreten Einblick in meine Fähigkeiten zu erhalten. Gemeinsam können wir Ergebnisse erzielen, die alle Erwartungen übertreffen.",
  },
};

const Works = () => {
  const { language } = useLanguage();
  const { intro, description, presentation } = translations[language];

  return (
    <>
    {isMobile ? (
      <>
         <p className={styles.sectionSubText}>
          {intro}
        </p>
        <h2 className={styles.sectionHeadText}>
          {description}
        </h2>

        <p className="mt-4 text-secondary text-[17px] max-w-5xl leading-[30px]">
         {presentation}
        </p>

        <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard 
            key={project.name[language]}
            index={index}
            {...project}
          />
        ))}
      </div>
      </>
    ) : (
      <>
        <motion.div
        variants={textVariant()}    
      >
        <p className={styles.sectionSubText}>
          {intro}
        </p>
        <h2 className={styles.sectionHeadText}>
          {description}
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-5xl leading-[30px]"
      >
        {presentation}
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard 
            key={project.source_code_link}
            index={index}
            {...project}
          />
        ))}
      </div>
      </>
    )}
    </>
  )
}

export default SectionWrapper(Works, "")