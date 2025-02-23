// contexts/LanguageContext.jsx
import { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('pt'); // Idioma padrão: Português, en: Inglês, de: deutschland
  
  // Função para alterar o idioma
  const changeLanguage = (newLang) => {
    setLanguage(newLang);
    // Adicione aqui qualquer lógica adicional (ex: salvar no localStorage)
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook personalizado para consumo do contexto
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage deve ser usado dentro de um LanguageProvider');
  }
  return context;
};
