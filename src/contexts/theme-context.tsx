import React from "react";

export interface ThemeState {
    // set the type of state you want to handle with context e.g.
    theme: any;
    setTheme: any;
}

const getInitialTheme = () => {
    if (typeof window !== "undefined" && window.localStorage) {
        const storedPrefs = window.localStorage.getItem("color-theme");
        if (typeof storedPrefs === "string") {
            return storedPrefs;
        }

        const userMedia = window.matchMedia("(prefers-color-scheme: light)");
        if (userMedia.matches) {
            return "light";
        }
    }

    return "light"; // light theme as the default;
};

//set an empty object as default state
export const ThemeContext = React.createContext({} as ThemeState);
// set up context provider as you normally would in JavaScript [React Context API](https://reactjs.org/docs/context.html#api)

export const ThemeProvider = ({ initialTheme, children }: any) => {
    const [theme, setTheme] = React.useState(getInitialTheme());

    const rawSetTheme = (rawTheme: any) => {
        const root = window.document.documentElement;
        const isDark = rawTheme === "dark";

        root.classList.remove(isDark ? "light" : "dark");
        root.classList.add(rawTheme);

        localStorage.setItem("color-theme", rawTheme);
    };

    if (initialTheme) {
        rawSetTheme(initialTheme);
    }

    React.useEffect(() => {
        rawSetTheme(theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
