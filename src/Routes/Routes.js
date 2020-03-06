import Login from "../views/login/Login.view";
import Notes from "../views/Notes/Notes.layout";

const ROUTES = [
  { path: "/", name: "Login", component: Login },
  { path: "/notes", name: "Notes", component: Notes }
];
export default ROUTES;
