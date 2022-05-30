import React from "react";

export default function TabsHeader({ tabData, activeTab, onClick }) {
	return (
		<div class="flex border-b px-5">
			{tabData.map(({ title, icon, id }) => (
				<button
					onClick={(tabData) => onClick(tabData)}
					class={`text-sm transition-all ease-in-out duration-200 border-blue-600 pt-3 rounded-t ${
						id === activeTab ? "text-blue-600" : ""
					} hover:text-blue-600 mr-12 cursor-pointer`}>
					<div class="flex items-center content-center px-3 mb-3">
						<i className={icon}></i>
						<span class="ml-1 font-normal">{title}</span>
					</div>
					<div
						class={`w-full transition-all ease-in-out duration-200 bg-blue-600 ${
							id === activeTab ? "h-1" : "h-0"
						}`}
					/>
				</button>
			))}
		</div>
	);
}
