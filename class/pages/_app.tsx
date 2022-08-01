import {
    ApolloClient,
    ApolloLink,
    ApolloProvider,
    InMemoryCache,
} from "@apollo/client";
import { Global } from "@emotion/react";
import "antd/dist/antd.css";
import { AppProps } from "next/app";
import Layout from "../src/components/commons/layout";
import { globalStyles } from "../src/commons/styles/globalStyles";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { createUploadLink } from "apollo-upload-client";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBQ85W8JsQ0hKV-jiOFC-eln7-7sCefCMU",
    authDomain: "iron-4b175.firebaseapp.com",
    projectId: "iron-4b175",
    storageBucket: "iron-4b175.appspot.com",
    messagingSenderId: "502285417083",
    appId: "1:502285417083:web:5971fdf29e9f94f42cc0de",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

function MyApp({ Component, pageProps }: AppProps) {
    const uploadLink = createUploadLink({
        uri: "http://backend08.codebootcamp.co.kr/graphql",
    });

    const client = new ApolloClient({
        link: ApolloLink.from([uploadLink]),
        cache: new InMemoryCache(),
    });

    return (
        <ApolloProvider client={client}>
            <Global styles={globalStyles} />
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ApolloProvider>
    );
}

export default MyApp;
