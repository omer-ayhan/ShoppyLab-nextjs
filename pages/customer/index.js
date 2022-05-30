import TabsContent from "@components/Tabs/TabsContent";
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
		id: "cancelled",
	},
];

export default function Home() {
	const [activeTab, setActiveTab] = useState(tabData[0].id);

	return (
		<Page>
			<div className="flex flex-col md:w-1/2 gap-4">
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
				<div class="sm:hidden relative  mx-auto bg-transparent rounded">
					<div class="absolute inset-0 m-auto mr-4 z-0 w-6 h-6 rotate-90">
						<i className="ri-code-fill" />
					</div>
					<select
						aria-label="Selected tab"
						class="form-select block w-full p-3 border border-gray-300 rounded text-gray-600 appearance-none bg-transparent relative z-0">
						{tabData.map(({ title }) => (
							<option selected class="absolute top-0 text-lg text-gray-600">
								{title}
							</option>
						))}
					</select>
				</div>
				<div class="xl:w-full xl:mx-0 h-12  rounded">
					<TabsHeader
						tabData={tabData}
						onClick={setActiveTab}
						activeTab={activeTab}
					/>

					<TabsContent
						className="py-5"
						activeTabName={activeTab}
						tabName="customer">
						<div className="flex flex-col 2xl:flex-row 2xl:justify-between w-full bg-white p-3 gap-3 border border-gray-200 rounded-sm">
							<span className="h-10 w-full md:w-1/2 2xl:w-1/3 bg-white cursor-pointer border border-gray-300 text-sm rounded-sm flex">
								<div className="flex items-center content-center">
									<i className="ri-search-line m-3 mb-4 text-lg text-gray-70"></i>
								</div>
								<input
									type="search"
									name="serch"
									placeholder="Search"
									className="flex-grow pl-0 px-4 text-sm focus:outline-none bg-wgite"
								/>
							</span>
							<div className="flex flex-col md:w-10/12 md:flex-row items-center content-start gap-4">
								<p className="text-sm">seçilenleri</p>
								<div class="relative bg-transparent rounded-sm w-full md:w-64">
									<div class="absolute inset-0 m-auto mr-4 z-0 w-6 h-6">
										<i className="ri-arrow-down-s-line" />
									</div>
									<select
										aria-label="Selected tab"
										class="form-select block w-full h-10 px-4 border text-sm border-gray-200 rounded-sm text-gray-600 appearance-none bg-transparent relative z-0 outline-none">
										{tabData.map(({ title }) => (
											<option selected class="text-sm text-gray-600">
												{title}
											</option>
										))}
									</select>
								</div>
								<button className="flex items-center justify-center w-full md:w-1/3 h-10 px-4 border text-sm border-gray-200 rounded-sm text-gray-900 bg-transparent relative z-10 hover:bg-slate-900 hover:text-white transition-colors duration-300 ease-in-out">
									<i className="ri-add-fill"></i>
									Müşteri Ekle
								</button>
								<button className="flex items-center justify-center w-full md:w-1/3 h-10 px-4 border text-sm border-gray-200 rounded-sm text-gray-900 bg-transparent relative z-10 hover:bg-slate-900 hover:text-white transition-colors duration-300 ease-in-out">
									<i className="ri-file-chart-fill mr-1"></i>
									Dışa Aktar
								</button>
								<button className="flex items-center justify-center w-full md:w-1/3 h-10 px-4 border text-sm border-gray-200 rounded-sm text-gray-900 bg-transparent relative z-10 hover:bg-slate-900 hover:text-white transition-colors duration-300 ease-in-out">
									<i className="ri-file-chart-fill mr-1"></i>
									İçe Aktar
								</button>
							</div>
						</div>
					</TabsContent>
					<TabsContent activeTabName={activeTab} tabName="cancelled">
						Test2
					</TabsContent>
				</div>
			</div>
		</Page>
	);
}
