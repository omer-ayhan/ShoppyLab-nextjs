import Head from "next/head";

import "remixicon/fonts/remixicon.css";
import Layout from "../src/layout/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>ShoppyLab | Ecommerce ShoppyLab Mağazam</title>
				<link rel="icon" type="image/x-icon" href="/favicon.png" />
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}

export default MyApp;
