import { Route } from "wouter";
import { PrivateRoute } from "../PrivateRoute";
// PAGES
import AuthPage from "~/pages/AuthPage";
import HomePage from "~/pages/HomePage";

export default function AppRoutes() {
	return (
		<>
			<Route exact component={AuthPage} path="/auth" />
			<PrivateRoute exact component={HomePage} path="/" />
		</>
	);
}
