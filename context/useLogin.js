import { useRouter } from "next/router";
import { useAuthContext } from "./useAuthContext";
import { setCookie } from "cookies-next";
export const useLogin = () => {
  const { dispatch } = useAuthContext();
  const router = useRouter();

  const login = async (email, password) => {
    const admin = await fetch(`http://localhost:3000/api/admin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    // const json = await admin.json();
    if (admin.ok) {
      // save the admin in local storage
      // localStorage.setItem("admin", JSON.stringify(json));
      setCookie("admin", JSON.stringify(admin));
      // update the auth context
      dispatch({ type: "LOGIN", payload: admin });
      router.push("/admin");
    }
  };
  return { login };
};
