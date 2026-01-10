import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if(!context){
        return new Error("useTheme must be used within ThemeProvider");
    }
    return context;
}