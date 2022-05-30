import React from "react";

export default function Sidebar() {
	return (
		<div className="flex-none min-h-screen flex flex-row bg-gray-100 z-0 overflow-hidden">
			<div className="flex flex-col w-56 bg-white overflow-hidden">
				<ul className="flex flex-col py-4">
					<li>
						<a
							href="#"
							className="flex flex-row bg_slider items-center h-12 transform transition-all ease-in duration-200 text-gray-500 hover:text-white m-2">
							<span className="inline-flex items-center justify-center h-12 w-12 text-lg">
								<i className="ri-user-line z-50"></i>
							</span>
							<span className="text-sm font-medium z-10 ">Müşteriler</span>
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
}
