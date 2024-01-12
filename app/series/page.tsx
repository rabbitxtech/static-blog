import { ListSeries } from '@/components/global'
import _meta_series from '@/meta/_meta_series.json'

const Page = () => {
	const series = _meta_series.series

	return (
		<div className="max-md:px-4 px-8 mb-5">
			<div className="max-w-6xl m-auto">
				<div className="m-auto max-w-4xl">
					<div className="my-10 text-6xl font-semibold">Series</div>
				</div>
			</div>
			<div className="max-w-6xl flex flex-col mx-auto mt-8">
				<div className="m-auto max-w-4xl w-full">
					<ListSeries series={series} />
				</div>
			</div>
		</div>
	)
}

export default Page

