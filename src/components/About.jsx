import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import SectionWrapper from '../hoc/SectionWrapper'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

const ServiceCard = ({ index, title, icon }) => {
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
          <img src={icon} alt={title} className="w-16 h-16 object-contain"/>
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
        
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introdução</p>
        <h2 className={styles.sectionHeadText}>Visão geral.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("","",0.1,1)}
        className="mt-4 text-secondary text-[17px] max-w-5xl leading-[30px]"
      >
        Sou um desenvolvedor de software altamente experiente e especializado em TypeScript e JavaScript. Além disso, possuo domínio de frameworks renomados como ReactJS, NextJS e Node.js. Atualmente, estou aprimorando meus conhecimentos em Three.js, uma ferramenta incrível para criação de experiências tridimensionais.
        Minha dedicação e perseverança em me manter atualizado com as mais recentes tecnologias me possibilitam criar aplicações escaláveis, eficientes e incrivelmente amigáveis aos usuários. Tenho paixão por transformar ideias em realidades tangíveis através de soluções de software inovadoras.<br />
        Se você está procurando um parceiro confiável para colaborar no desenvolvimento de seus projetos, estou aqui para ajudar. Vamos nos unir e proporcionar uma experiência única, transformando seus sonhos em realidade através do poder do código.
        Estou ansioso para trabalhar ao seu lado e superar todas as expectativas. Vamos começar essa jornada juntos e garantir resultados incríveis para o seu negócio.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")