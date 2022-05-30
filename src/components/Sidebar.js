import Link from "next/link";
import { useRouter } from "next/router";
import React, { useRef } from "react";
import useDetectOutside from "src/hooks/useDetectOutside";

const sideMenuData = [
	{
		route: "/",
		matchRoute: ["/"],
		title: "Anasayfa",
		icon: "ri-home-smile-line",
	},
	{
		route: "/customer",
		matchRoute: ["/customer"],
		title: "Müşteriler",
		icon: "ri-user-line",
	},
];

export default function Sidebar({ onHide, open = false }) {
	const router = useRouter();

	return (
		<>
			{open && (
				<div
					onClick={onHide}
					className="md:hidden fixed w-screen h-screen bg-[#0000004d]"
				/>
			)}
			<div
				className={`md:relative md:left-0 transition-all duration-200 ease-in-out flex-none min-h-screen ${
					open ? "absolute flex left-0" : "absolute -left-80"
				} md:flex flex-row bg-gray-100 z-30 md:z-0 overflow-hidden`}>
				<div className="flex flex-col w-56 bg-white overflow-hidden">
					<ul className="flex flex-col py-4">
						{sideMenuData.map(({ route, matchRoute, title, icon }, i) => (
							<li onClick={onHide} key={`${i}.>${i}`}>
								<Link href={route}>
									<a
										className={`flex flex-row bg_slider ${
											matchRoute.includes(router.pathname) ? "active" : ""
										} items-center h-12 transform transition-all ease-in duration-200 text-gray-500 hover:text-white m-2`}>
										<span className="inline-flex items-center justify-center h-12 w-12 text-lg">
											<i className={`${icon} z-50`}></i>
										</span>
										<span className="text-sm font-medium z-10 ">{title}</span>
									</a>
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</>
	);
}
