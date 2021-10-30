import { useState } from "react";
// STYLES
import "./styles/auth-form.css";
// ICONS
import { CircleAlert } from "~/components/SvgIcons";
// COMPONENTS
import Alert from "~/components/Alert";
import Spinner from "~/components/Spinner";
// HOOKS
import { useAuthForm } from "./hooks";

export default function AuthForm() {
	const [showAlert, setShowAlert] = useState(false);
	const { form, formErrors, changeTypeForm, typeForm, loading, onChange, OnSubmit } = useAuthForm();

	const handleOnSubmit = (e) => {
		e.preventDefault();
		OnSubmit().then((res) => res && setShowAlert(true));
	};

	const alertMessage =
		(typeForm === "signIn" && "Sección iniciada correctamente.") ||
		(typeForm === "signUp" && "Cuenta creada correctamente.");

	return (
		<div className="auth-form-card">
			<div className="auth-form-card-tabs">
				<input
					defaultChecked
					className="auth-form-card-tabs-control"
					id="signin"
					name="auth"
					type="radio"
					value="signIn"
					onClick={changeTypeForm}
				/>
				<label className="auth-form-card-tabs-title" htmlFor="signin">
					<h4>Iniciar sesión</h4>
				</label>

				<input
					className="auth-form-card-tabs-control"
					id="signup"
					name="auth"
					type="radio"
					value="signUp"
					onClick={changeTypeForm}
				/>
				<label className="auth-form-card-tabs-title" htmlFor="signup">
					<h4>Crear cuenta</h4>
				</label>

				<div className="line" />

				<form autoComplete="off" className="auth-form" onSubmit={handleOnSubmit}>
					{formErrors?.error && (
						<div className="form-error">
							<CircleAlert /> {formErrors?.error}
						</div>
					)}

					<div className="auth-form-control">
						<label htmlFor="email">Correo electrónico:</label>

						<div className={`auth-form-control-input${formErrors?.email ? " error" : ""}`}>
							<input id="email" placeholder="Ingrese un correo" type="text" value={form.email} onChange={onChange} />
						</div>

						{formErrors?.email && (
							<div className="form-error">
								<CircleAlert /> {formErrors?.email}
							</div>
						)}
					</div>

					<div className="auth-form-control">
						<label htmlFor="password">Contraseña:</label>

						<div className={`auth-form-control-input${formErrors?.password ? " error" : ""}`}>
							<input
								id="password"
								minLength="6"
								placeholder="Ingrese una contraseña"
								type="password"
								value={form.password}
								onChange={onChange}
							/>
						</div>

						{formErrors?.password && (
							<div className="form-error">
								<CircleAlert /> {formErrors?.password}
							</div>
						)}
					</div>

					{typeForm === "signIn" && (
						<>
							<div className="auth-form-forgot-password">
								<a href="#">He olvidado mi contraseña</a>
							</div>

							<div className="auth-form-hold-session">
								<input id="hold-session" type="checkbox" />
								<label htmlFor="hold-session">
									Quiero mantener mi sesión iniciada para personalizar mi experiencia de compra.
								</label>
							</div>
						</>
					)}

					<button className="auth-form-btn" type="submit">
						{loading ? (
							<Spinner />
						) : (
							<span>{(typeForm === "signIn" && "Iniciar sesión") || (typeForm === "signUp" && "Crear cuenta")}</span>
						)}
					</button>

					<Alert
						className={`${showAlert ? "show" : ""}`}
						text={alertMessage}
						type="success"
						onClose={() => setShowAlert(false)}
					/>
				</form>
			</div>
		</div>
	);
}
