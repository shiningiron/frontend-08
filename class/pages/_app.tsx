import { Global } from "@emotion/react";
import "antd/dist/antd.css";
import { AppProps } from "next/app";
import Layout from "../src/components/commons/layout";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { RecoilRoot } from "recoil";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import ApolloSetting from "../src/components/commons/apollo";

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
    return (
        <>
            {/* <Head> 모든 페이지에서 카카오맵을 다운로드 받으므로 비효율적임
                <script
                    type="text/javascript"
                    src="//dapi.kakao.com/v2/maps/sdk.js?appkey=a41559ff27bd46de320516e3ad8fd083"
                ></script>
            </Head> */}
            <RecoilRoot>
                <ApolloSetting>
                    <Global styles={globalStyles} />
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </ApolloSetting>
            </RecoilRoot>
        </>
    );
}

export default MyApp;
