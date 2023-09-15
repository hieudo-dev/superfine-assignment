import { useState } from "react";
import { StateContext, defaultState } from "../context/stateContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [state] = useState(defaultState);
  return (
    <StateContext.Provider value={state}>
      <Component {...pageProps} />
    </StateContext.Provider>
  );
}

export default MyApp;
