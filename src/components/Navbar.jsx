import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../styles'
import { navLinks }from '../constants'
import { logo, menu, close } from '../assets'
import { brasil, america, alemanha } from "../assets";
import { useLanguage } from '../contexts/LanguageContext'

const languages = [
  { code: "pt", label: "Português", flag: brasil },
  { code: "en", label: "English", flag: america },
  { code: "de", label: "Deutsche", flag: alemanha },
];

const Navbar = () => {
  const [active, setActive] = useState("")
  const [toggle, setToggle] = useState(false)
  const { language, changeLanguage } = useLanguage();
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav 
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
      <Link
        href="/"
        className="flex items-center gap-2"
        onClick={() => {
          setActive("")
          window.scrollTo(0,0)
        }}
      >
        <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
        <p className="text-white text-[18px] font-bold cursor-pointer flex">Otávio Teixeira&nbsp;<span className="sm:block hidden">| Fullstack dev</span></p>
      </Link>
      <ul className="list-none hidden sm:flex flex-row gap-10">
          <>
            {navLinks.map(({title, id}) => (
              <li
                key={id}
                className={`${active === id ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(id)}
              >
                <a href={`#${id}`}>{title[language]}</a>
              </li>
            ))}
            <li className="text-secondary hover:text-white text-[18px] w-36 font-medium cursor-pointer flex items-center justify-center gap-2">
              <div className="relative">
                <button 
                  onClick={() => setShowDropdown(!showDropdown)} 
                  className="flex items-center gap-2 rounded px-2 bg-gray-100 dark:bg-primary"
                >
                  <img src={languages.find(lang => lang.code === language).flag} className="h-4 w-5" alt="" />
                  {languages.find(lang => lang.code === language).label}
                </button>

                {showDropdown && (
                  <ul className="absolute mt-2 bg-primary rounded shadow-lg w-36">
                    {languages.map(({ code, label, flag }) => (
                      <li 
                        key={code} 
                        onClick={() => { changeLanguage(code); setShowDropdown(false); }}
                        className="flex items-center gap-2 px-2 py-2 hover:bg-white/30 cursor-pointer"
                      >
                        {flag && <img src={flag} className="h-4 w-6" alt={label} />}
                        {label}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          </>
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img  
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain cursor-pointer"
          onClick={() => setToggle(!toggle)}
        />

        <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w[140px] z-10 rounded-xl`}>
          <ul className="list-none flex justify-end items-start flex-col gap-4">
            <>
              {navLinks.map(({ title, id }) => (
                <li
                  key={id}
                  className={`${active === id ? "text-white" : "text-secondary"} font-poppins hover:text-white text-[18px] font-medium cursor-pointer`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(id);
                  }}
                >
                  <a href={`#${id}`}>{title[language]}</a>
                </li>
              ))}
               <li className="text-secondary hover:text-white text-[18px] w-36 font-medium cursor-pointer flex items-center justify-center gap-2">
              <div className="relative">
                <button 
                  onClick={() => setShowDropdown(!showDropdown)} 
                  className="flex items-center gap-2 rounded px-2 black-gradient"
                >
                  <img src={languages.find(lang => lang.code === language).flag} className="h-4 w-5" alt="" />
                  {languages.find(lang => lang.code === language).label}
                </button>

                {showDropdown && (
                  <ul className="absolute mt-2 black-gradient rounded shadow-lg w-36">
                    {languages.map(({ code, label, flag }) => (
                      <li 
                        key={code} 
                        onClick={() => { changeLanguage(code); setShowDropdown(false); setToggle(!toggle);}}
                        className="flex items-center gap-2 px-2 py-2 hover:bg-white/30 cursor-pointer"
                      >
                        {flag && <img src={flag} className="h-4 w-6" alt={label} />}
                        {label}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
            </>
          </ul>
        </div>

      </div>
    </div>
    </nav>
  )
}

export default Navbar