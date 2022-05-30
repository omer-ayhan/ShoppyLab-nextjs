import React from "react";

import Navbar from "@components/Navbar";
import Sidebar from "@components/Sidebar";

export default function Layout({ children }) {
	return (
		<>
			<Navbar />
			<div className="flex">
				<Sidebar />
				<main className="overflow-x-hidden flex-1">{children}</main>
			</div>
		</>
	);
}
