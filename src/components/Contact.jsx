import { useState, useRef } from "react"
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"

import { styles } from "../styles"
import { EarthCanvas } from "./canvas"
import SectionWrapper from '../hoc/SectionWrapper'
import { slideIn } from "../utils/motion"
import { useLanguage } from "../contexts/LanguageContext"

const translations = {
  pt: {
    intro: "Entrar em contato",
    description: "Contato.",
    name: "Seu nome",
    name_placeholder: "Qual é o seu nome?",
    email: "Seu Email",
    email_placeholder: "Qual é o seu email?",
    message: "Sua mensagem",
    message_placeholder: "O que você gostaria de me dizer?",
    send: "Enviar",
    sending: "Enviando..."
  },
  en: {
    intro: "Get in touch",
    description: "Contact.",
    name: "Your name",
    name_placeholder: "What's your name?",
    email: "Your email",
    email_placeholder: "What's your email?",
    message: "Your message",
    message_placeholder: "What would you like to tell me?",
    send: "Send",
    sending: "Sending..."
  },
  de: {
    intro: "Kontakt aufnehmen",
    description: "Kontakt.",
    name: "Dein Name",
    name_placeholder: "Wie heißt du?",
    email: "Deine E-Mail",
    email_placeholder: "Wie lautet deine E-Mail?",
    message: "Deine Nachricht",
    message_placeholder: "Was möchtest du mir sagen?",
    send: "Senden",
    sending: "Senden..."
  },
};


const Contact = () => {
   const { language } = useLanguage();
  const formRef = useRef()
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })
  const { intro, description, name, name_placeholder, email, email_placeholder, message, message_placeholder, send, sending} = translations[language];

  const handleChange = (e) => {
    const { name, value } = e.target

    setForm({
      ...form,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs.send(
      "service_sjxsgug",
      "template_5423brj",
      {
        from_name: form.name,
        to_name: "Otávio Augusto",
        from_email: form.email,
        to_email: "tavinteixeira@hotmail.com",
        message: form.message
      },
      "msPdoV3S5GJJVP8zw"
    ).then(() => {
      setLoading(false)
      alert("Obrigado. Eu vou te responder assim que eu puder!")

      setForm({
        name: "",
        email: "",
        message: "",
      })
    }).catch((err) => {
      setLoading(false)

      console.log(err)
      alert("algo deu errado, meu email é tavinteixeira@hotmail.com")
    })
  }



  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>{intro}</p>
        <h3 className={styles.sectionHeadText}>{description}</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">{name}</span>
            <input 
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder={name_placeholder}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">{email}</span>
            <input 
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder={email_placeholder}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">{message}</span>
            <textarea 
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder={message_placeholder}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none resize-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? `${sending}` : `${send}`}
          </button>
        </form>
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