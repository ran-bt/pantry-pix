import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { Auth0Provider } from "@auth0/auth0-react";

const domain = "dev-s0w21xn6u1tjqagb.us.auth0.com";
const clientId = "6RK0JgQLyH3zd1Vdzn1KOHNT7xrSLaRo";
// const domain = process.env.REACT_APP_AUTH0_DOMAIN;
// const clientId = process.env.REACT_APP_CLIENT_ID;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      //redirectUri={"http://localhost:3001"}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
