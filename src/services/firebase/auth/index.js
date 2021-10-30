import { auth } from "../index";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export async function signUp({ email, password }) {
	if (email && password) {
		try {
			const { user } = await createUserWithEmailAndPassword(auth, email, password);
			return user;
		} catch (err) {
			switch (err.message) {
				/* eslint-disable */
				case "Firebase: Error (auth/invalid-email).":
					throw { email: "Correo inválido" };
				case "Firebase: Error (auth/email-already-in-use).":
					throw { email: "El correo no es válido o ya está ocupado" };
				case "Firebase: Password should be at least 6 characters (auth/weak-password).":
					throw { password: "La contraseña debe tener al menos 6 caracteres" };
				default:
					throw { error: "Error inesperado al intentar registrarse" };
			}
		}
	}
}

export async function signIn({ email, password }) {
	if (email && password) {
		try {
			const { user } = await signInWithEmailAndPassword(auth, email, password);
			return user;
		} catch (err) {
			switch (err.message) {
				/* eslint-disable */
				case "Firebase: Error (auth/invalid-email).":
					throw { email: "Correo inválido" };
				case "Firebase: Error (auth/missing-email).":
				case "Firebase: Error (auth/wrong-password).":
				case "Firebase: Error (auth/user-not-found).":
					throw { error: "Email o contraseña incorrectos" };
				default:
					throw { error: "Error inesperado al intentar iniciar sesión" };
			}
		}
	}
}
