import { createContext } from "react";
import type { AuthContextType } from "../../types/AuthContext.type";

export const AuthContext = createContext<AuthContextType | null>(null);