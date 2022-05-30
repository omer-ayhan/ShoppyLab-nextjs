import React, { useState } from "react";
import { motion } from "framer-motion";

import Navbar from "@components/Navbar";
import Sidebar from "@components/Sidebar";
import { useRouter } from "next/router";

export default function Layout({ children }) {
	const router = useRouter();
	const [open, setOpen] = useState(false);

	const hideMenu = () => setOpen(!open);

	return (
		<>
			<Navbar onMenuClick={hideMenu} />
			<div className="flex">
				<Sidebar onHide={hideMenu} open={open} />
				<motion.main
					key={router.route}
					initial="initial"
					animate="animate"
					variants={{
						initial: {
							opacity: 0,
						},
						animate: {
							opacity: 1,
						},
					}}
					transition={{
						duration: 0.5,
					}}
					className="overflow-x-hidden flex-1">
					{children}
				</motion.main>
			</div>
		</>
	);
}
