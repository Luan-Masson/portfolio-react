import { createContext, useContext, useEffect, useState } from "react";
import {PropTypes} from 'prop-types';

ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useState(() => {
        const savedTheme = sessionStorage.getItem("theme");
        return savedTheme ? savedTheme : (prefersDark ? "viva-dark" : "viva-light");
    });

    useEffect(() => {
        sessionStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {return useContext(ThemeContext);}
