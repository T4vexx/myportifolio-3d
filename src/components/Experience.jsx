import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import { motion } from 'framer-motion'
import { isMobile } from 'react-device-detect';
import { styles } from "../styles"
import { experiences } from "../constants"
import SectionWrapper from '../hoc/SectionWrapper'
import { textVariant } from "../utils/motion"
import 'react-vertical-timeline-component/style.min.css'
import { useLanguage } from "../contexts/LanguageContext"

const ExperienceCard = ({ experience }) => {
  const { language } = useLanguage();

  return (
    <VerticalTimelineElement
      contentStyle={{ background: '#1d1836', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid #232631'}}
      date={experience.date[language]}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img 
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title[language]}</h3>
        <p className="text-secondary text-[60px] font-semibold" style={{ margin: 0}}>{experience.company_name}</p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points[language].map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  )
}

const translations = {
  pt: {
    intro: "O que eu já fiz até agora",
    description: "Experiência.",
  },
  en: {
    intro: "What I have done so far",
    description: "Experience.",
  },
  de: {
    intro: "Was ich bisher gemacht habe",
    description: "Erfahrung.",
  },
};

const Experience = () => {
  const { language } = useLanguage();
  const { intro, description } = translations[language];

  return (
    <>
      {isMobile ? (<div>
          <p className={styles.sectionSubText}>
            {intro}
          </p>
          <h2 className={styles.sectionHeadText}>
            {description}
          </h2>
      </div> ) : (
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
      )
      }

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((exp, ind) => (
            <ExperienceCard key={ind} experience={exp} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, "work")