import ReactDOM from "react-dom";
import { App } from "./components";
import DateAdapter from "@mui/lab/AdapterDayjs";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

import "./index.css";

const client = new ApolloClient({
    uri: "http://localhost:5000/graphql",
    cache: new InMemoryCache()
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <LocalizationProvider dateAdapter={DateAdapter}>
            <App />
        </LocalizationProvider>
    </ApolloProvider>,
    document.getElementById("root")
);
