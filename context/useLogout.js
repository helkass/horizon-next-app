import { useAuthContext } from "./useAuthContext";
import { deleteCookie } from "cookies-next";

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const logout = () => {
    // remove state admin from storage
    // localStorage.removeItem("admin");
    deleteCookie("admin");

    // dispatch logout action
    dispatch({ type: "LOGOUT" });
  };
  return { logout };
};
