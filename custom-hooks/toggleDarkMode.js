"use client";

import { useEffect, useState } from "react";

export default function useDarkMode() {
    const [theme, setTheme] = useState(null);

    useEffect(() => {
        const currentTheme = localStorage.getItem("dibyamohan_portfolio_theme");
        const root = window.document.documentElement;
        if (currentTheme === "dark") {
            setTheme(currentTheme);
            localStorage.setItem("dibyamohan_portfolio_theme", "dark");
            root.classList.add('dark');
        } else {
            setTheme("light");
            localStorage.setItem("dibyamohan_portfolio_theme", "light");
            root.classList.remove('dark');
        }
    }, [])

    useEffect(() => {
        const root = window.document.documentElement;
        if (theme) {
            localStorage.setItem("dibyamohan_portfolio_theme", theme);
        }
        if (theme === 'light') {
            root.classList.remove('dark');
        } else {
            root.classList.add('dark');
        }
    }, [theme])

    return [theme, setTheme];
}