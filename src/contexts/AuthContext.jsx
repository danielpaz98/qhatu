import { createContext, useState } from "react";

const AuthContext = createContext({});

export function AuthContextProvider({ children }) {
	const initialToken = window.sessionStorage.getItem("token");
	const [token, setToken] = useState(initialToken);
	const [loading, setLoading] = useState(false);

	return <AuthContext.Provider value={{ token, setToken, loading, setLoading }}>{children}</AuthContext.Provider>;
}

export default AuthContext;
