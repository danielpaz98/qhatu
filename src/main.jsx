import { StrictMode } from "react";
// PLUGINS
import { createRoot } from "react-dom/client";
import App from "./App";
// PROVIDER CONTEXTS
import { AuthContextProvider } from "~/contexts/AuthContext";

const container = document.getElementById("app");
const root = createRoot(container);

root.render(
	<StrictMode>
		<AuthContextProvider>
			<App />
		</AuthContextProvider>
	</StrictMode>
)
