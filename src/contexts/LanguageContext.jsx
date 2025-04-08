import PropTypes from 'prop-types';
import { createContext, useContext, useEffect, useState } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [actualLang, setActualLang] = useState('pt-br');

  useEffect(() => {
    async function fetchLanguages() {
      setLoading(true);

      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}i18n/${actualLang === 'pt-br' ? 'PT' : 'EN'}`);
        const data = await response.json();
        setData(data);
      } catch (err) {
        console.error('Erro ao carregar traduções:', err);
        setData({});
      } finally {
        setLoading(false);
      }
    }

    fetchLanguages();
  }, [actualLang]);

  return (
    <LanguageContext.Provider value={{ data, loading, actualLang, setActualLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

LanguageProvider.propTypes = {
    children: PropTypes.node.isRequired,
};