import { useState } from "react";

import TabsContent from "@components/Tabs/TabsContent";
import TabsHeader from "@components/Tabs/TabsHeader";
import Page from "@layout/Page";

import customerData from "@data/customerData.json";

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
			<div className="py-10">
				<div className="sm:hidden relative  mx-auto bg-transparent rounded">
					<div className="absolute inset-0 m-auto mr-4 z-0 w-6 h-6 rotate-90">
						<i className="ri-code-fill" />
					</div>
					<select
						defaultValue={tabData[0].id}
						aria-label="Selected tab"
						className="form-select block w-full p-3 border border-gray-300 rounded text-gray-600 appearance-none bg-transparent relative z-0">
						{tabData.map(({ title }) => (
							<option className="absolute top-0 text-lg text-gray-600">
								{title}
							</option>
						))}
					</select>
				</div>
				<div className="xl:w-full xl:mx-0 h-12  rounded">
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
								<div className="relative bg-transparent rounded-sm w-full md:w-64">
									<div className="absolute inset-0 m-auto mr-4 z-0 w-6 h-6">
										<i className="ri-arrow-down-s-line" />
									</div>
									<select
										aria-label="Selected tab"
										className="form-select block w-full h-10 px-4 border text-sm border-gray-200 rounded-sm text-gray-600 appearance-none bg-transparent relative z-0 outline-none">
										{tabData.map(({ title }) => (
											<option selected className="text-sm text-gray-600">
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
						<div class="relative overflow-x-auto shadow-md rounded-sm my-4">
							<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
								<thead class="text-xs text-gray-700 uppercase bg-white ">
									<tr>
										<th scope="col" class="p-4">
											{/* <div class="flex items-center">
												<input
													id="checkbox-all-search"
													type="checkbox"
													class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
												/>
												<label for="checkbox-all-search" class="sr-only">
													checkbox
												</label>
											</div> */}
										</th>
										<th scope="col" class="px-6 py-3">
											Sipariş Numarası
										</th>
										<th scope="col" class="px-6 py-3">
											Sipariş Tarihi
										</th>
										<th scope="col" class="px-6 py-3">
											Ad Soyad
										</th>
										<th scope="col" class="px-6 py-3">
											Durum
										</th>
										<th scope="col" class="px-6 py-3">
											Ödeme Yöntemi
										</th>
										<th scope="col" class="px-6 py-3">
											Ülke
										</th>
										<th scope="col" class="px-6 py-3">
											Toplam
										</th>
									</tr>
								</thead>
								<tbody>
									{customerData.customer_data.map(
										(
											{
												order_id,
												order_date,
												order_status,
												customer_name,
												payment_method,
												country,
												total,
											},
											i
										) => (
											<tr
												class={`${
													i % 2 == 0 ? "bg-gray-200" : "bg-white"
												} hover:bg-gray-50 transition-colors duration-500 ease-in-out`}>
												<td class="w-4 p-4">
													<div class="flex items-center">
														<input
															id="checkbox-table-search-1"
															type="checkbox"
															class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
														/>
														<label
															for="checkbox-table-search-1"
															class="sr-only">
															checkbox
														</label>
													</div>
												</td>
												<th
													scope="row"
													class="px-6 py-4 font-medium text-gray-500 whitespace-nowrap">
													{order_id}
												</th>
												<td class="px-6 py-4 text-gray-500">{order_date}</td>
												<td class="px-6 py-4 text-gray-500">{customer_name}</td>
												<td class="px-6 py-4 text-gray-500">
													{order_status ? (
														<p className="border border-[#33b181] bg-[#ebf9f3] text-[#33b181] text-center w-20 py-px text-sm rounded-md">
															Onaylı
														</p>
													) : (
														<p className="border border-[#de4f71] bg-[#fcf3f6] text-[#de4f71] text-center w-20 py-px text-sm rounded-md">
															İptal
														</p>
													)}
												</td>
												<td class="px-6 py-4 text-gray-500">
													{payment_method}
												</td>
												<td class="px-6 py-4 text-gray-500">{country}</td>
												<td class="px-6 py-4 text-gray-500">{total}</td>
											</tr>
										)
									)}
								</tbody>
							</table>
						</div>
					</TabsContent>
					<TabsContent activeTabName={activeTab} tabName="cancelled">
						<h1 className="text-lg my-3">İptal Olanlar</h1>
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
								<div className="relative bg-transparent rounded-sm w-full md:w-64">
									<div className="absolute inset-0 m-auto mr-4 z-0 w-6 h-6">
										<i className="ri-arrow-down-s-line" />
									</div>
									<select
										aria-label="Selected tab"
										className="form-select block w-full h-10 px-4 border text-sm border-gray-200 rounded-sm text-gray-600 appearance-none bg-transparent relative z-0 outline-none">
										{tabData.map(({ title }) => (
											<option selected className="text-sm text-gray-600">
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
				</div>
			</div>
		</Page>
	);
}
