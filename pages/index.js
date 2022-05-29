import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div
			style={{
				backgroundColor: "#f5f5f5",
				height: "100vh",
			}}
			className={`${styles.container} z-0`}>
			<h1>Customer</h1>
		</div>
	);
}
