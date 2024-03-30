import { createContext, useContext, useEffect, useReducer } from "react";
import themeReducer from "./themeReducer";

export const ThemeContext = createContext();

const localStorageThemeKey = 'themeSettings';

const initialThemeState = JSON.parse(localStorage.getItem(localStorageThemeKey)) ?? {primary: 'color-1', background: 'bg-1' }

export const ThemeProvider = ({children}) => {
    const [themeState, dispatchTheme] = useReducer(themeReducer, initialThemeState);

    const themeHandler = (buttonClassName) => {
        dispatchTheme({type: buttonClassName});
    }

    useEffect(() => {
        localStorage.setItem(localStorageThemeKey, JSON.stringify(themeState));
    }, [themeState])

    return <ThemeContext.Provider value={{themeState, themeHandler}}>{children}</ThemeContext.Provider>
}

export const useThemeContext = () => {
    return useContext(ThemeContext);
}