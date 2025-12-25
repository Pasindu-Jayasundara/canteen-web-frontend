import { useEffect, useState } from "react";
import { AuthContext } from "./auth.context";
import type { UserType } from "../../types/User.type";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {

    const [user, setUser] = useState<UserType | null>(() => {
        const storedUser = localStorage.getItem("user");
        return storedUser ? JSON.parse(storedUser) : null;
    });

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            const parsedUser = JSON.parse(storedUser);
            setUser(parsedUser);
        }
    }, []);


    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
}