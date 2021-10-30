import { StrictMode } from "react";
import { render } from "react-dom";
import App from "./App";
// PROVIDER CONTEXTS
import { AuthContextProvider } from "~/contexts/AuthContext";

const app = document.getElementById("app");

render(
	<StrictMode>
		<AuthContextProvider>
			<App />
		</AuthContextProvider>
	</StrictMode>,
	app
);
