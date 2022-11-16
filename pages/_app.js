import "../styles/globals.css";
import { QueryClientProvider, QueryClient } from "react-query";
import { store } from "../redux/store";
import { Provider } from "react-redux";
import { AuthContextProvider } from "../context/AuthContext";
import "react-toastify/dist/ReactToastify.css";
import { getTotals } from "../redux/cartSlice";
const queryClient = new QueryClient();

store.dispatch(getTotals());

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </QueryClientProvider>
    </AuthContextProvider>
  );
}

export default MyApp;
