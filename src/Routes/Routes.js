import Login from "../views/login/Login.view";
import Notes from "../views/Notes/Notes.layout";
import Query from "../views/Querys/sample.query";

const ROUTES = [
  { path: "/", name: "Login", component: Login },
  { path: "/notes", name: "Notes", component: Notes },
  { path: "/query", name: "Query", component: Query }
];
export default ROUTES;
