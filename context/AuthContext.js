import { createContext, useReducer, useEffect } from "react";
import { getCookie } from "cookies-next";

export const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { admin: action.payload };
    case "LOGOUT":
      return { admin: null };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    admin: null,
  });

  useEffect(() => {
    // const admin = JSON.parse(localStorage.getItem("admin"));
    const admin = getCookie("admin");

    if (admin) {
      dispatch({ type: "LOGIN", payload: admin });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
