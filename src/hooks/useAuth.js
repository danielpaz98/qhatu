import { useContext, useEffect } from "react";
import { useLocation } from "wouter";
import AuthContext from "~/contexts/AuthContext";
// SERVICES
import { signIn as signInService, signUp as signUpService } from "~/services/firebase/auth";
import { signOut as signOutService, getAuth } from "firebase/auth";

export function useAuth() {
	const { token, setToken: updateToken, loading, setLoading } = useContext(AuthContext);
	const [, navigate] = useLocation();
	const isAuthenticated = Boolean(token);

	const setToken = (token) => {
		updateToken(token);
		window.sessionStorage.setItem("token", token);
	};

	const removeToken = () => {
		updateToken(null);
		window.sessionStorage.removeItem("token");
	};

	const signUp = async ({ email, password }) => {
		try {
			setLoading(true);
			const { accessToken } = await signUpService({ email, password });
			setTimeout(() => {
				setToken(accessToken);
				setLoading(false);
			}, 1500);
		} catch (err) {
			setLoading(false);
			/* eslint-disable */
			throw { errors: err };
		}
	};

	const signIn = async ({ email, password }) => {
		try {
			setLoading(true);
			const { accessToken } = await signInService({ email, password });
			setTimeout(() => {
				setToken(accessToken);
				setLoading(false);
			}, 1500);
		} catch (err) {
			/* eslint-disable */
			setLoading(false);
			throw { errors: err };
		}
	};

	const signOut = async () => {
		try {
			await signOutService(getAuth());
			removeToken(null);
		} catch (err) {
			console.error(err);
		}
	};

	useEffect(() => {
		if (isAuthenticated) navigate("/");
	}, [isAuthenticated, navigate]);

	return { signUp, signIn, signOut, loading, isAuthenticated };
}
