import Image from "next/image";
import React from "react";

export default function Navbar() {
	return (
		<div className="w-screen flex flex-row items-center p-1 justify-between bg-white drop-shadow-md z-50">
			<div className="transition-all ease-in duration-200 hover:bg-gray-200 p-2 cursor-pointer rounded-md ml-8 text-lg text-gray-700 hidden md:flex">
				<Image
					src={require("public/favicon.png")}
					width={40}
					height={40}
					className="rounded-full"
				/>
			</div>
			<span className="flex flex-grow max-w-md items-center content-center">
				<span className="flex-1 w-screen md:w-1/3 lg:w-1/4 h-10 bg-gray-200 cursor-pointer border border-gray-300 text-sm rounded-sm flex">
					<input
						type="search"
						name="serch"
						placeholder="Search"
						className="flex-grow px-4 text-sm focus:outline-none"
					/>
					<i className="fas fa-search m-3 mr-5 text-lg text-gray-700 w-4 h-4"></i>
				</span>
				<a className="flex-0 bg-neutral-800 hover:bg-neutral-700 text-white text-center px-3 py-2 m-3 transition-all ease-in duration-200 rounded-md flex items-center content-center cursor-pointer">
					Planı Yükselt ^
				</a>
			</span>
			<div className="flex flex-row-reverse mr-4 ml-4 md:hidden">
				<i className="fas fa-bars"></i>
			</div>
			<div className="flex flex-row mr-8 md:flex">
				<div className="flex flex-col items-center place-content-center transition-all ease-in duration-200 hover:bg-gray-200 cursor-pointer rounded-md m-2 relative p-2 text-center">
					<i className="fas fa-bell m-2 text-lg text-gray-700"></i>
					Avatar
					<div className="opacity-0 w-28 bg-black text-white text-center text-xs rounded-lg my-1 py-2 absolute z-10 group-hover:opacity-100 top-full -left-1/2 ml-14 px-3 pointer-events-none">
						Tooltip center
					</div>
				</div>
				<a className="bg-neutral-800 hover:bg-neutral-700 text-white text-center px-3 py-2 m-3 mx-2  transition-all ease-in duration-200 rounded-md flex items-center content-center cursor-pointer">
					Link
				</a>
				<a className="bg-neutral-800 hover:bg-neutral-700 text-white text-center px-3 py-2 m-3 mx-2 transition-all ease-in duration-200 rounded-md flex items-center content-center cursor-pointer">
					Link
				</a>
				<a className="bg-neutral-800 hover:bg-neutral-700 text-white text-center px-3 py-2 m-3 mx-2  transition-all ease-in duration-200 rounded-md flex items-center content-center cursor-pointer">
					Link
				</a>
			</div>
		</div>
	);
}
