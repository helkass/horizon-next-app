import { AuthContext } from "./AuthContext";
import { useContext } from "react";

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    console.log("useAuthContext must be used inside an AuthContextProvider");
  }

  return context;
};
