import React, { createContext, useState } from "react";

const GlobalContext = createContext();

function GlobalProvider({ children }) {
  const [state, setState] = useState({ user: null });

  return (
    <GlobalContext.Provider value={{ state, setState }}>
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalContext;
