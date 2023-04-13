export default function Loading() {
	// You can add any UI inside Loading, including a Skeleton.
	return (
		<div className="w-full h-[calc(100vh-60px)] flex justify-center items-center">
			<div className="lds-ring">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	)
}
