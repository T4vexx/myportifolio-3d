import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    ignewes,
    redux,
    tailwind,
    nodejs,
    mongodb,
    nextjs,
    figma,
    docker,
    meta,
    semac,
    burn,
    eccjr,
    rgx,
    carrent,
    jobit,
    tripguide,
    threejs,
    semaped,
    cacic,
    conce,
    tablet,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "Sobre",
    },
    {
      id: "work",
      title: "Experiência",
    },
    {
      id: "contact",
      title: "Contato",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Node.js Developer",
      icon: backend,
    },
    {
      title: "Criador de conteúdo",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Next JS",
      icon: nextjs,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "CTO | Desenvolvedor Full Stack",
      company_name: "Burn Store",
      icon: burn,
      iconBg: "#14161f",
      date: "Dezembro 2020 - Abril 2021",
      points: [
        "Loja de scripts para Fivem (GTAV RP)",
        "Desenvolvendo e dando manutenção em scripts usando reactjs, sass e outras tecnologias como Lua para o back",
        "Colaborando com outro parceiro de trabalho, para aumentar a qualidade dos scripts",
        "Todos os scripts eram totalmente responsivos e com baixo uso de memória",
        "Recebendo feedbacks de clientes para melhorar os scripts que já eram feitos na época",
      ],
    },
    {
      title: "Presidente | Desenvolvedor ReactJs/NextJs",
      company_name: "Empresa Junior de Ciência da Computação | UNESP/IBILCE",
      icon: eccjr,
      iconBg: "#262626",
      date: "Jan 2023 - Atualmente",
      points: [
        "Presidindo o time de desenvolvimento de projetos front-end",
        "Desenvolvendo e dando assistência de aplicações web usando ReactJs, NextJs e outras tecnologias",
        "Desenvolvendo sites e aplicações responsivas, escaláveis e robustas",
        "Participando de eventos de programação e incentivando o ensino de desenvolvimento web",
      ],
    },
    {
      title: "Fundador | Desenvolvedor Full Stack",
      company_name: "RGX Store",
      icon: rgx,
      iconBg: "#fff",
      date: "Jan 2022 - Atualmente",
      points: [
        "Loja de scripts para Fivem (GTAV RP)",
        "Desenvolvimento de bots com DiscordJs para a integração do discord com a loja",
        "Desenvolvendo e dando manutenção em scripts usando reactjs, sass e outras tecnologias como Lua para o back",
        "Todos os scripts são totalmente responsivos e com baixo uso de memória",
        "Recebendo feedbacks de clientes para melhorar os scripts que são feitos por mim",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Muito foda a conce ficou perfeita para a cidade tmj @<Otávio />  Obrigado pelo atendimento . Nota 10 💸",
      name: "EVZ",
      designation: "//",
      company: "//",
      image: "https://cdn.discordapp.com/avatars/796558461223174164/8327ea8a3e02201e80d9a693a1bda9c3.webp",
    },
    {
      testimonial:
        "Gostaria de agradecer e parabenizar @<Otávio /> pelo trabalho realizado. Atendimento excepcional, prestativos e atenciosos. Continuem assim que vocês vão longe",
      name: "Liberatori",
      designation: "//",
      company: "//",
      image: "https://cdn.discordapp.com/avatars/348673230770405377/2e3f0a7341e013f03bdc4bee571e9f87.webp",
    },
    {
      testimonial:
        "Trabalho foda e super atencioso no suporte🥰 @<Otávio />",
      name: "Alicce",
      designation: "//",
      company: "//",
      image: "https://cdn.discordapp.com/avatars/742185995557929031/bafb2132b41de9c39bf89667070fcfae.webp",
    },
  ];
  
  const projects = [
    {
      name: "CarRub",
      description:
        "Plataforma Web que permite aos usuários pesquisar, reservar e gerenciar aluguel de carros de vários fornecedores, fornecendo uma solução conveniente e eficiente para as necessidades de transporte.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "rapid-api",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/T4vexx/CarHub-Showroom",
    },
    {
      name: "Flexibble",
      description:
        "Aplicativo de compartilhamento de projetos visando montar um portifólio para cada pessoa que cadastras. Flexibble possui login com google usando grafbase/graphql e next-auth. Visual feito com taillwind",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "next-auth",
          color: "green-text-gradient",
        },
        {
          name: "grafbase",
          color: "pink-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/T4vexx/Flexibble",
    },
    {
      name: "Sumz",
      description:
        "Um site desenvolvido usando Open AI GPT4 para resumir e sintetizar textos. Simplifique sua leitura usando Sumz, uma sintetizador de texto open-source que transforma grandes artigos em textos limpos e concisos!",
      tags: [
        {
          name: "vite",
          color: "blue-text-gradient",
        },
        {
          name: "gpt3.5",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/T4vexx/SintetizadorDeText-Open-Ai-GPT-4",
    },


    {
      name: "Concessionária",
      description:
        "Um script para Fivem usando apenas o javascript pura e css. O script possuía um sistema de concessionária completo com vendas de veículos usados e também compras de novos veículos. Backend feito em lua",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "lua",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: conce,
      source_code_link: "https://otavioteixeira.com/",
    },
    {
      name: "Tablet Policial",
      description:
        "Um script feito com react e webpack para rodar no Fivem e ChackraUI para o visual. O script possuía um sistema completo de um tablet policial, com mais de 30 funcionalidades e 10 telas diferentes. Backend feito em lua",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "lua",
          color: "green-text-gradient",
        },
        {
          name: "webpack",
          color: "pink-text-gradient",
        },
      ],
      image: tablet,
      source_code_link: "https://otavioteixeira.com/",
    },
    {
      name: "Ignews",
      description:
        "Uma plataforma de noticias sobre programação e tecnologia usando NextsJs e typescript. Aqui você consegue se tornar um assinante para ler a notícia por inteiro. Pagamento usando stripe. Armazenamento usando Fauna DB",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "chakra-ui",
          color: "green-text-gradient",
        },
        {
          name: "stripe",
          color: "pink-text-gradient",
        },
      ],
      image: ignewes,
      source_code_link: "https://otavioteixeira.com/",
    },
    {
      name: "Semac 2023",
      description:
        "Site desenvolvido pela ECCJr para a semana da computação 2023.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "sass",
          color: "green-text-gradient",
        },
        {
          name: "swiperjs",
          color: "pink-text-gradient",
        },
      ],
      image: semac,
      source_code_link: "https://github.com/eccjr/semac-2023",
    },
    {
      name: "Semaped 2023",
      description:
        "Site desenvolvido pela ECCJr para a semana da pedagogia 2023.",
      tags: [
        {
          name: "gatsby",
          color: "blue-text-gradient",
        },
      ],
      image: semaped,
      source_code_link: "https://github.com/eccjr/semaped",
    },
    {
      name: "Cacic 2023",
      description:
        "Site desenvolvido para o centro academico CACIC 2023.",
      tags: [
        {
          name: "gatsby",
          color: "blue-text-gradient",
        },
        {
          name: "chakra-ui",
          color: "green-text-gradient",
        },
        {
          name: "sass",
          color: "pink-text-gradient",
        },
      ],
      image: cacic,
      source_code_link: "https://github.com/eccjr/site-cacic-2023",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
