import { useState } from "react";
// HOOKS
import { useAuth } from "~/hooks";

export function useAuthForm() {
	const initialForm = { email: "", password: "" };
	const [typeForm, setTypeForm] = useState("signIn");
	const [form, setForm] = useState(initialForm);
	const [formErrors, setFormErrors] = useState({});

	const { signIn, signUp, loading } = useAuth();
	const actionHandlers = { signIn, signUp };

	const changeTypeForm = (e) => {
		const updateTypeForm = e.target.value;
		setTypeForm(updateTypeForm);
		setForm(initialForm);
		setFormErrors({});
	};

	const validateForm = (form) => {
		const errors = {};
		Object.keys(form).forEach((key) => {
			if (!form[key]) errors[key] = "Campo Obligatorio";
		});
		setFormErrors(errors);
		return errors;
	};

	const onChange = (e) => setForm((currForm) => ({ ...currForm, ...{ [e.target.id]: e.target.value } }));

	const OnSubmit = (e) => {
		const promise = new Promise((resolve, reject) => {
			const errors = Boolean(Object.entries(validateForm(form)).length);
			if (!errors) {
				if (!loading) {
					actionHandlers[typeForm](form)
						.then(() => resolve(true))
						.catch((res) => {
							setFormErrors(res?.errors);
							resolve(false);
						});
				}
			}
		});

		return promise;
	};

	return {
		form,
		formErrors,
		changeTypeForm,
		typeForm,
		loading,
		onChange,
		OnSubmit,
	};
}
