import { Button } from "primereact/button";
import { useLanguage } from "../contexts/LanguageContext";
import { useTheme } from "../contexts/ThemeContext";
import { useEffect } from 'react'

export default function ChangeThemeButton() {
    const { data } = useLanguage();
    const { theme, setTheme } = useTheme();
    const themeLink = document.getElementById("theme");

    useEffect(() => {
        if(theme === "viva-dark"){
            const link = themeLink.href.replace("viva-light", "viva-dark");
            themeLink.setAttribute("href", link)
        }
    }, [theme])

    const toggleTheme = () => {
        const newTheme = theme === "viva-light" ? "viva-dark" : "viva-light";
        if (themeLink) {
            const updatedHref = themeLink.href.replace(theme, newTheme);
            themeLink.setAttribute("href", updatedHref);
        }
        setTheme(newTheme);
    };

    return (
        <Button
            icon={theme === "viva-dark" ? "pi pi-sun" : "pi pi-moon"}
            className="p-button-outlined shadow-lg shadow-blue-500 mr-6 bg-(--primary-color-text)"
            severity="secondary"
            rounded
            text
            raised
            onClick={toggleTheme}
            tooltip={theme === "viva-dark" ? data?.mode?.light : data?.mode?.dark} tooltipOptions={{ position: 'left' }}
        />
    );
}
