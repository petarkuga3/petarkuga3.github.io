import React, { createContext, useState, useContext, useEffect } from 'react';

const LanguageContext = createContext({
    language: 'EN',
    translate: (key, defaultValue = key) => defaultValue,
    toggleLanguage: () => {},
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('EN');
    const [translations, setTranslations] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTranslations = async () => {
            setLoading(true);
            try {
                const response = await fetch(`/locales/${language.toLowerCase()}/translation.json`);
                if (!response.ok) {
                    console.error(`Failed to fetch translations for ${language}: ${response.statusText}`);
                    return;
                }
                const data = await response.json();
                setTranslations(data);
            } catch (error) {
                console.error('Error fetching translations:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchTranslations();
    }, [language]);

    const toggleLanguage = () => {
        setLanguage(prevLanguage => (prevLanguage === 'EN' ? 'NL' : 'EN'));
    };

    const translate = (key, defaultValue = key) => {
        const keys = key.split('.');
        let result = translations;

        for (const k of keys) {
            result = result?.[k];
            if (result === undefined) {
                console.warn(`Translation key not found: ${key}`);
                return defaultValue;
            }
        }

        return result;
    };

    return (
        <LanguageContext.Provider value={{ language, translate, toggleLanguage, loading }}>
            {children}
        </LanguageContext.Provider>
    );
};

