"use client";

import useDarkMode from "@/custom-hooks/toggleDarkMode";
import { FC, ReactNode, createContext } from "react";


export type ThemeContextType = {
    theme: string;
    setTheme: (arg: string) => void;
}

export const ThemeContext = createContext<ThemeContextType>({
    theme: '',
    setTheme: (arg: string) => {}
});


const ThemeProvider : FC<{children: ReactNode}> = ({children}) => {
    const [theme, setTheme] = useDarkMode();
    return <ThemeContext.Provider value={{theme, setTheme} as ThemeContextType}>
        {children}
    </ThemeContext.Provider>
}


export default ThemeProvider;