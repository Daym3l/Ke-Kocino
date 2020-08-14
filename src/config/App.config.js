const DEV = {
  server: "http://localhost:1862/api"
};
const PROD = {
  server: "http://localhost:1862/api"
};

export const DEFAULT_CONFIG =
  process.env.NODE_ENV === "development" ? DEV : PROD;
