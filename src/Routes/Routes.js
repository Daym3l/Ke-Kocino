import React from "react";
import { Minimal as MinimalLayout } from "../layouts/";
const Query = React.lazy(() => import("../views/Querys/sample.query"));
const Login = React.lazy(() => import("../views/login/Login.view"));
const SingUp = React.lazy(() => import("../views/SingUp/Singup.view"));
const NotFound = React.lazy(() => import("../views/ErrorPage/NotFound"));
const NotAuth = React.lazy(() => import("../views/ErrorPage/Page403"));

const ROUTES = [
  { path: "/", name: "Login", component: Login, layout: MinimalLayout },
  { path: "/singup", name: "SingUp", component: SingUp, layout: MinimalLayout },
  { path: "/kekocino/query", name: "Query", component: Query,layout: MinimalLayout },
  { path: "/404", name: "Not Found", component: NotFound,layout: MinimalLayout },
  { path: "/403", name: "Not Auth", component: NotAuth,layout: MinimalLayout }
];
export default ROUTES;
