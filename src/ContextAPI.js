import React, { createContext } from "react";
export const DataProvider = createContext(null);
const ContextAPI = ({ children }) => {
  const [address, setAddress] = React.useState("");
  const [reference, setReference] = React.useState("");
  return (
    <DataProvider.Provider
      value={{
        address,
        setAddress,
        reference,
        setReference,
      }}
    >
      {children}
    </DataProvider.Provider>
  );
};

export default ContextAPI;
