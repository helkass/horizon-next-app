import { useRouter } from "next/router";
import { useCusContext } from "./useCusContext";
import { setCookie } from "cookies-next";
export const useLogin = () => {
  const { dispatch } = useCusContext();
  const router = useRouter();
  const url = process.env.URL;
  const login = async (email, password) => {
    const customer = await fetch(`http://localhost:3000/api/customers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await customer.json();
    if (customer.ok) {
      // save the admin in local storage
      localStorage.setItem("customer", JSON.stringify(data));
      setCookie("customer", JSON.stringify(data));
      // update the auth context
      dispatch({ type: "LOGIN", payload: data });
      router.push("/product");
    }
  };
  return { login };
};
