import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "../src/app/App";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./index.css";
import { createStore } from "./store/createStore";
import { SocialNetworkProvider } from "./app/hooks/socialNetwork";
import { TechnologiesProvider } from "./app/hooks/technologies";

const store = createStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <SocialNetworkProvider>
          <TechnologiesProvider>
            <App />
          </TechnologiesProvider>
        </SocialNetworkProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
