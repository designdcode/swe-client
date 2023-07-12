import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import App from "./layouts/App";
import reportWebVitals from "./reportWebVitals";
import client from "./utils/apollo";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BoardContextProvider } from "./contexts";

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter forceRefresh>
      <ToastContainer position="bottom-right" autoClose={3000} />
      <BoardContextProvider>
        <App />
      </BoardContextProvider>
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById("root")
);
reportWebVitals();
