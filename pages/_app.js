import Head from "next/head";

import Layout from "../src/layout/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>ShoppyLab | Ecommerce ShoppyLab Mağazam</title>
				<link rel="icon" type="image/x-icon" href="/favicon.png" />
				<link
					href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css"
					rel="stylesheet"
				/>
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}

export default MyApp;
