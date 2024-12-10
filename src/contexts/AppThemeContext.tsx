import { createContext } from "react"
import { AppThemeContextProps } from "../types"

export const AppThemeContext = createContext<AppThemeContextProps | undefined>(
  undefined
);
