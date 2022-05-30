import React from "react";

export default function TabsContent({
	tabName,
	activeTabName,
	className,
	children,
}) {
	return activeTabName === tabName ? (
		<div className={`flex-1 ${className}`}>{children}</div>
	) : (
		<></>
	);
}
