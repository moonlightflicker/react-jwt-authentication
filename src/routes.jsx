import { Route, Router, Switch, Navigate } from "react-router-dom";

import HomePage from "./pages/Home"
import LoginPage from "./pages/Login"

import { history } from './helpers/history';
import RouteGuard from "./components/RouteGuard";

const Routes = () => {
    return (
        <Router history={history}>
            <Routes>
                <RouteGuard
                    exact
                    path="/"
                    component={HomePage}
                />
                <Route
                    path="/login"
                    component={LoginPage}
                />
                <Navigate to="/" />
            </Routes>
        </Router>
    );
}
 
export default Routes;