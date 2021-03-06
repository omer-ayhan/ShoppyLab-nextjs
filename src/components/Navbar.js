import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar({ onMenuClick }) {
	return (
		<div className="relative w-screen flex flex-row items-center justify-between bg-white drop-shadow-md z-50 overflow-hidden py-1">
			<div className="transition-all ease-in duration-200 hover:bg-gray-200 p-2 cursor-pointer rounded-md ml-8 text-lg text-gray-700 hidden md:flex">
				<Link href="/">
					<a>
						<Image
							src={require("public/favicon.png")}
							width={40}
							height={40}
							className="rounded-full"
						/>
					</a>
				</Link>
			</div>
			<span className="hidden lg:flex flex-grow max-w-md items-center content-center">
				<span className="flex-1 w-screen md:w-1/3 lg:w-1/4 h-10 bg-gray-200 cursor-pointer border border-gray-300 text-sm rounded-sm flex">
					<input
						type="search"
						name="serch"
						placeholder="Search"
						className="flex-grow px-4 text-sm focus:outline-none bg-gray-200"
					/>
					<div className="flex items-center content-center">
						<i className="ri-search-line m-3 mb-4 text-lg text-gray-70"></i>
					</div>
				</span>
				<a className="flex-0 bg-slate-800 hover:bg-slate-700 text-sm text-white text-center px-3 py-2 m-3 transition-all ease-in duration-200 rounded-md flex items-center content-center cursor-pointer">
					Planı Yükselt <i className="ri-arrow-up-s-line ml-1"></i>
				</a>
			</span>
			<div className="flex flex-row mr-8">
				<div className="relative sm:max-w-xl sm:mx-auto  transition-all ease-in duration-200 hover:bg-gray-200 cursor-pointer rounded-md p-2 text-center">
					<div className="flex flex-col items-center place-content-center mt-1 group cursor-pointer relative text-center pt-1">
						<i className="ri-account-circle-fill ri-lg text-gray-700"></i>
						Avatar
					</div>
				</div>
				<a className="bg-slate-800 hover:bg-slate-700 text-white text-center px-3 py-2 m-3 mx-2 h-10 transition-all ease-in duration-200 rounded-md flex items-center content-center cursor-pointer">
					<i className="ri-notification-2-line"></i>
				</a>
				<a className="bg-slate-800 hover:bg-slate-700 text-white text-center px-3 py-2 m-3 mx-2 h-10 transition-all ease-in duration-200 rounded-md flex items-center content-center cursor-pointer">
					<i className="ri-settings-2-line"></i>
				</a>
				<a className="bg-slate-800 hover:bg-slate-700 text-white text-center px-3 py-2 m-3 mx-2 h-10  transition-all ease-in duration-200 rounded-md flex items-center content-center cursor-pointer">
					<i className="ri-logout-box-r-line"></i>
				</a>
			</div>
			<button onClick={onMenuClick} className="md:hidden text-2xl p-3">
				<i className="ri-menu-3-fill"></i>
			</button>
		</div>
	);
}
