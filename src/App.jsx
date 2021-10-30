// MAIN CSS
import "./assets/css/main.css";
// COMPONENTS
import Header from "~/components/Header";
import Footer from "~/components/Footer";
// APP ROUTER
import AppRoutes from "~/router/routes";

export default function App() {
	return (
		<div className="container">
			<Header />

			<main>
				<AppRoutes />
			</main>

			<Footer />
		</div>
	);
}
