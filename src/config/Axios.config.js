import Axios from "axios";
import { DEFAULT_CONFIG } from "./app.config";

Axios.defaults.baseURL = DEFAULT_CONFIG.server;
Axios.defaults.timeout = 240000;
Axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
Axios.defaults.headers.common['Content-Type'] = 'application/json';


