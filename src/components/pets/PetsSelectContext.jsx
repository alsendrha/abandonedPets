import { createContext, useState } from "react";

export const PetsSelectContext = createContext();

export const PetsSelectProvider = (props) => {
  const [petsCode, setPetsCode] = useState("");

  return (
    <PetsSelectContext.Provider value={{ petsCode, setPetsCode }} {...props} />
  );
};
