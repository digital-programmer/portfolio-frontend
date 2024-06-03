"use client";

import { useEffect, useState } from "react";

export default function useDarkMode() {
    const [theme, setTheme] = useState();

    useEffect(() => {
        const currentTheme = localStorage.getItem("dibyamohan_portfolio_theme");
        const root = window.document.documentElement;
        if (currentTheme === "light") {
            setTheme(currentTheme);
            localStorage.setItem("dibyamohan_portfolio_theme", "light");
            root.classList.remove('dark');
        } else {
            setTheme("dark");
            localStorage.setItem("dibyamohan_portfolio_theme", "dark");
            root.classList.add('dark');
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