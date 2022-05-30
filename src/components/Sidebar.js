import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

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

export default function Sidebar() {
	const router = useRouter();

	return (
		<div className="flex-none min-h-screen flex flex-row bg-gray-100 z-0 overflow-hidden">
			<div className="flex flex-col w-56 bg-white overflow-hidden">
				<ul className="flex flex-col py-4">
					{sideMenuData.map(({ route, matchRoute, title, icon }, i) => (
						<li key={`${i}.>${i}`}>
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
	);
}
