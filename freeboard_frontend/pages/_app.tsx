// import "../styles/globals.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Global } from "@emotion/react";
import "antd/dist/antd.css";
// import "../src/commons/styles/modalStyles.css";
import { AppProps } from "next/app";
import Layout from "../src/components/commons/layout";
// import { globalStyles } from "../src/commons/styles/globalStyles";
import { resetStyles } from "../src/commons/styles/resetStyles";

function MyApp({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    uri: "http://backend08.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Global styles={resetStyles} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
