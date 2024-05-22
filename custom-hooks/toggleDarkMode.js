import { useEffect, useState } from "react";

export default function useDarkMode() {
    const [theme, setTheme] = useState(localStorage.dibyamohan_portfolio_theme || "dark");

    useEffect(() => {
        const root = window.document.documentElement;
        localStorage.setItem("dibyamohan_portfolio_theme", theme);
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
    }, [theme])

    return [theme, setTheme];
}