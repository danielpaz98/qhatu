import { Route, Redirect } from "wouter";
// HOOKS
import { useAuth } from "~/hooks";

export function PrivateRoute({ component: Component, ...rest }) {
	const { isAuthenticated } = useAuth();

	return <Route {...rest}>{isAuthenticated ? <Component /> : <Redirect to="/auth" />}</Route>;
}
