/* eslint-disable react/prop-types */
import GlobalStyle from "../styles/GlobalStyle";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from  'next/head';
import Link from 'next/link';

function MyApp({ Component, pageProps }) {
  return (
    <>
        <GlobalStyle >
          
       </GlobalStyle>
        <Component {...pageProps} />
    </>
  )
}

export default MyApp
