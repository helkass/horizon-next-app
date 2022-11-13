import { createContext, useReducer, useEffect } from "react";

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
    const admin = JSON.parse(localStorage.getItem("admin"));

    if (admin) {
      dispatch({ type: "LOGIN", payload: admin });
    }
  }, []);
  console.log("authContext", state);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
