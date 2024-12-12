import { createContext, useState, ReactNode } from "react";

interface Themes {
    light: {
        card: string;
        background: string;
        paragraph: string;
    },
    dark: {
        card: string;
        background: string;
        paragraph: string;
    }
}

export const themes: Themes = {
    light: {
        card: "#23272A",
        background: "#5663F7",
        paragraph: "#99AAB5",
    },
    dark: {
        card: "#5663F7",
        background: "#23272A",
        paragraph: "#fff"
    }
}

type Theme = "light" | "dark";

interface ThemeContextType {
    theme: Theme;
    setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({children}: {children: ReactNode}) => {
    const [ theme, setTheme ] = useState<Theme>("light")

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            { children }
        </ThemeContext.Provider>
    )
}