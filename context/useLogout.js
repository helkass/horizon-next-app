import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const logout = () => {
    // remove state admin from storage
    localStorage.removeItem("admin");

    // dispatch logout action
    dispatch({ type: "LOGOUT" });
  };
  return { logout };
};
