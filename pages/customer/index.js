import TabsHeader from "@components/Tabs/TabsHeader";
import Page from "@layout/Page";
import { useState } from "react";

const tabData = [
	{
		title: "Tüm Müşteriler",
		icon: "ri-check-line",
		id: "customer",
	},
	{
		title: "İptal Olanlar",
		icon: "ri-close-line",
		id: "canceled",
	},
];

export default function Home() {
	const [activeTab, setActiveTab] = useState(tabData[0].id);
	return (
		<Page>
			<div className="flex flex-col w-1/2 gap-4">
				<h1 className="text-3xl font-bold">Müşteriler</h1>
				<p className="text-gray-600">
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500s, when an unknown printer took a galley of type and
					scrambled it to make a type specimen book. It has survived not only
					five centuries, but also the leap into electronic typesetting,
					remaining essentially unchanged.
				</p>
			</div>
			<div class="py-10">
				<div class="sm:hidden relative w-11/12 mx-auto bg-transparent rounded">
					<div class="absolute inset-0 m-auto mr-4 z-0 w-6 h-6 rotate-90">
						<i className="ri-code-fill" />
					</div>
					<select
						aria-label="Selected tab"
						class="form-select block w-full p-3 border border-gray-300 rounded text-gray-600 appearance-none bg-transparent relative z-10">
						<option class="text-sm text-gray-600">inactive</option>
						<option class="text-sm text-gray-600">inactive</option>
						<option selected class="text-sm text-gray-600">
							Active
						</option>
						<option class="text-sm text-gray-600">inactive</option>
						<option class="text-sm text-gray-600">inactive</option>
					</select>
				</div>
				<div class="xl:w-full xl:mx-0 h-12 hidden sm:block rounded">
					<TabsHeader
						tabData={tabData}
						onClick={({ id }) => setActiveTab(id)}
						activeTab={activeTab}
					/>

					{/* <div class="flex border-b px-5">
						{tabData.map(({ title, icon, id }) => (
							<button
								onClick={() => setActiveTab(id)}
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
					</div> */}
				</div>
			</div>
		</Page>
	);
}
