import { PulseLoader } from 'react-spinners'

export default function Loading() {
	// You can add any UI inside Loading, including a Skeleton.
	return (
		<div className="w-full h-[calc(100vh-60px)] flex justify-center items-center">
			<PulseLoader color="#58a6ff" />
		</div>
	)
}

