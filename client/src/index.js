import React from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "./styles";
import Pages from "./pages";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { ComponentRegistryProvider } from "./components/registry.js";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

const initialRegistry = {
};

ReactDOM.render(
  <ApolloProvider client={client}>
    <ComponentRegistryProvider initialRegistry={initialRegistry}>
      <GlobalStyles />
      <Pages />
    </ComponentRegistryProvider>
  </ApolloProvider>,
  document.getElementById("root")
);
