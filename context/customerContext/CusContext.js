import { createContext, useReducer, useEffect } from "react";

export const CusContext = createContext();

export const authCusReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { customer: action.payload };
    case "REGISTER":
      return { customer: action.payload };
    case "LOGOUT":
      return { customer: null };
    default:
      return state;
  }
};

export const CusContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authCusReducer, {
    customer: null,
  });

  useEffect(() => {
    const customer = JSON.parse(localStorage.getItem("customer"));
    // const admin = getCookie("admin");

    if (customer) {
      dispatch({ type: "LOGIN", payload: customer });
    }
  }, []);

  return (
    <CusContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CusContext.Provider>
  );
};
