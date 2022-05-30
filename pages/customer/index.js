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

	console.log(activeTab);
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
						{tabData.map(({ title }) => (
							<option selected class="text-sm text-gray-600">
								{title}
							</option>
						))}
					</select>
				</div>
				<div class="xl:w-full xl:mx-0 h-12 hidden sm:block rounded">
					<TabsHeader
						tabData={tabData}
						onClick={setActiveTab}
						activeTab={activeTab}
					/>

					<TabsContent
						className="py-5"
						activeTabName={activeTab}
						tabName="customer">
						<div className="w-full"></div>
					</TabsContent>
					<TabsContent activeTabName={activeTab} tabName="cancelled">
						Test2
					</TabsContent>
				</div>
			</div>
		</Page>
	);
}
