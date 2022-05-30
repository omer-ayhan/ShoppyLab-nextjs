import React from "react";

export default function TabsHeader({ tabData, activeTab, onClick }) {
	return (
		<div className=" border-b px-5 hidden sm:flex">
			{tabData.map(({ title, icon, id }, i) => (
				<button
					key={`${id}-${i}`}
					onClick={() => onClick(id)}
					className={`text-sm transition-all ease-in-out duration-200 border-blue-600 pt-3 rounded-t ${
						id === activeTab ? "text-blue-600" : ""
					} hover:text-blue-600 mr-12 cursor-pointer`}>
					<div className="flex items-center content-center px-3 mb-3">
						<i className={icon}></i>
						<span className="ml-1 font-normal">{title}</span>
					</div>
					<div
						className={`w-full transition-all ease-in-out duration-200 bg-blue-600 ${
							id === activeTab ? "h-1" : "h-0"
						}`}
					/>
				</button>
			))}
		</div>
	);
}
