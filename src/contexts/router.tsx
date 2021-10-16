import { BrowserRouter, Route, Switch, RouteProps } from "react-router-dom";
import AuthPage from "../pages/auth";
import Homepage from "../pages/Home";
const routes: RouteProps[] = [
  {
    path: "/",
    component: Homepage,
    exact: true,
  },
  {
    path: "/auth",
    component: AuthPage,
    exact: true,
  },
];

export const Router = () => (
  <BrowserRouter>
    <Switch>
      {routes.map((r) => (
        <Route {...r} key={r.path as string}></Route>
      ))}
    </Switch>
  </BrowserRouter>
);
