import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./app/App";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, ColorModeScript, extendTheme } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider
      theme={extendTheme({
        initialColorMode: "dark",
        useSystemColorMode: false,
        fonts: {
          heading: `'San Francisco Pro-Bold', sans-serif`,
          body: `'San Francisco Pro', sans-serif`,
          span: `'San Francisco Pro', sans-serif`,
          p: `'San Francisco Pro', sans-serif`,
        },
      })}
    >
      <ColorModeScript initialColorMode="dark" />
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </ChakraProvider>
  </React.StrictMode>
);
