import React from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "./styles";
import Pages from "./pages";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { ComponentRegistryProvider } from "./components/registry.js";
import TrackTitle from "./components/track-title.js";
import TrackInfo from "./components/track-info.js";
import TrackModules from "./components/track-modules.js";
import TrackReviews from "./components/track-reviews.js";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

const initialRegistry = {
  'TrackTitle': TrackTitle,
  'TrackInfo': TrackInfo,
  'TrackModules': TrackModules,
  'TrackReviews': TrackReviews,
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
