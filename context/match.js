import { createContext, useContext, useState } from "react";

const Context = createContext();

export function MatchProvider({ children }) {
  const [match, setMatch] = useState("appic");
  return (
    <Context.Provider value={[match, setMatch]}>{children}</Context.Provider>
  );
}

export function useMatchContext() {
  return useContext(Context);
}
