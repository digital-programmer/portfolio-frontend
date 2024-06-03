"use client";

import { useEffect, useState } from "react";

export default function useDarkMode() {
    const [theme, setTheme] = useState("dark");

    useEffect(() => {
        const currentTheme = localStorage.getItem("dibyamohan_portfolio_theme");
        if (currentTheme === "light") {
            setTheme(currentTheme)
        } else {
            setTheme("dark");
        }
    }, [])

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