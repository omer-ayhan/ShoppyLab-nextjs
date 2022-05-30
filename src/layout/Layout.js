import React, { useState } from "react";

import Navbar from "@components/Navbar";
import Sidebar from "@components/Sidebar";

export default function Layout({ children }) {
	const [open, setOpen] = useState(false);
	return (
		<>
			<Navbar onMenuClick={() => setOpen(!open)} />
			<div className="flex">
				<Sidebar open={open} />
				<main className="overflow-x-hidden flex-1">{children}</main>
			</div>
		</>
	);
}
