import React from "react";
import { Minimal as MinimalLayout } from "../layouts/";
const Query = React.lazy(() => import("../views/Querys/sample.query"));
const Login = React.lazy(() => import("../views/login/Login.view"));
const SingUp = React.lazy(() => import("../views/SingUp/Singup.view"));

const ROUTES = [
  { path: "/", name: "Login", component: Login, layout: MinimalLayout },
  { path: "/singup", name: "SingUp", component: SingUp, layout: MinimalLayout },
  { path: "/query", name: "Query", component: Query,layout: MinimalLayout }
];
export default ROUTES;
