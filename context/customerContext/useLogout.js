import { useCusContext } from "./useCusContext";
import { deleteCookie } from "cookies-next";

export const useLogout = () => {
  const { dispatch } = useCusContext();
  const logout = () => {
    // remove state customer from storage
    localStorage.removeItem("customer");
    deleteCookie("customer");

    // dispatch logout action
    dispatch({ type: "LOGOUT" });
  };
  return { logout };
};
