import React, { useState } from "react";

import Navbar from "@components/Navbar";
import Sidebar from "@components/Sidebar";

export default function Layout({ children }) {
	const [open, setOpen] = useState(false);

	const hideMenu = () => setOpen(!open);

	return (
		<>
			<Navbar onMenuClick={hideMenu} />
			<div className="flex">
				<Sidebar onHide={hideMenu} open={open} />
				<main className="overflow-x-hidden flex-1">{children}</main>
			</div>
		</>
	);
}
