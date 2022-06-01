import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./state/Store";
import { ReduxCounter } from "./ReduxCounter";

export function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <ReduxCounter />
        </BrowserRouter>
      </Provider>
    </div>
  );
}
