'use client'

import React, { useState } from 'react'
import { usePathname } from 'next/navigation'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'

const SocialShare = () => {
	const pathName = usePathname()
	const [isShare, setIsShare] = useState<boolean>(false)

	return (
		<div className="relative">
			<a
				href="#"
				onClick={(e) => {
					e.preventDefault()
					setIsShare(() => !isShare)
				}}
			>
				<svg
					width="24px"
					height="24px"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<title>Share</title>
					<g>
						<path
							id="Vector"
							d="M9 13.5L15 16.5M15 7.5L9 10.5M18 21C16.3431 21 15 19.6569 15 18C15 16.3431 16.3431 15 18 15C19.6569 15 21 16.3431 21 18C21 19.6569 19.6569 21 18 21ZM6 15C4.34315 15 3 13.6569 3 12C3 10.3431 4.34315 9 6 9C7.65685 9 9 10.3431 9 12C9 13.6569 7.65685 15 6 15ZM18 9C16.3431 9 15 7.65685 15 6C15 4.34315 16.3431 3 18 3C19.6569 3 21 4.34315 21 6C21 7.65685 19.6569 9 18 9Z"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</g>
				</svg>
			</a>
			{isShare && (
				<div className="absolute flex flex-wrap gap-2 text-black p-2 rounded md:top-10 max-md:top-[50%] md:left-[50%] max-md:right-[40px] md:translate-x-[-50%] max-md:translate-y-[-50%] bg-gray-200 before:w-4 before:h-4 before:absolute md:before:top-[-8px] max-md:before:right-[-8px] md:before:left-[50%] max-md:before:top-[50%] md:before:translate-x-[-50%] max-md:before:translate-y-[-50%] before:rotate-45 before:bg-gray-200">
					<div
						data-href={`${BASE_URL}${pathName}`}
						data-layout=""
						data-size=""
					>
						<a
							className="flex gap-2 fb-xfbml-parse-ignore"
							href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
								`${BASE_URL}${pathName}`
							)}&amp;src=sdkpreparse`}
							target="_blank"
						>
							<svg
								width="24px"
								height="24px"
								viewBox="0 0 48 48"
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g
									stroke="none"
									strokeWidth="1"
									fill="none"
									fillRule="evenodd"
								>
									<g
										transform="translate(-200.000000, -160.000000)"
										fill="#4460A0"
									>
										<path d="M225.638355,208 L202.649232,208 C201.185673,208 200,206.813592 200,205.350603 L200,162.649211 C200,161.18585 201.185859,160 202.649232,160 L245.350955,160 C246.813955,160 248,161.18585 248,162.649211 L248,205.350603 C248,206.813778 246.813769,208 245.350955,208 L233.119305,208 L233.119305,189.411755 L239.358521,189.411755 L240.292755,182.167586 L233.119305,182.167586 L233.119305,177.542641 C233.119305,175.445287 233.701712,174.01601 236.70929,174.01601 L240.545311,174.014333 L240.545311,167.535091 C239.881886,167.446808 237.604784,167.24957 234.955552,167.24957 C229.424834,167.24957 225.638355,170.625526 225.638355,176.825209 L225.638355,182.167586 L219.383122,182.167586 L219.383122,189.411755 L225.638355,189.411755 L225.638355,208 L225.638355,208 Z"></path>
									</g>
								</g>
							</svg>
							<span>Facebook</span>
						</a>
					</div>
					<div className="w-full">
						<a
							className="flex gap-2"
							href={`https://twitter.com/share?url=${encodeURIComponent(
								`${BASE_URL}${pathName}`
							)}`}
							target="_blank"
						>
							<svg
								width="24px"
								height="24px"
								viewBox="0 -4 48 48"
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g
									stroke="none"
									strokeWidth="1"
									fill="none"
									fillRule="evenodd"
								>
									<g
										transform="translate(-300.000000, -164.000000)"
										fill="#00AAEC"
									>
										<path d="M348,168.735283 C346.236309,169.538462 344.337383,170.081618 342.345483,170.324305 C344.379644,169.076201 345.940482,167.097147 346.675823,164.739617 C344.771263,165.895269 342.666667,166.736006 340.418384,167.18671 C338.626519,165.224991 336.065504,164 333.231203,164 C327.796443,164 323.387216,168.521488 323.387216,174.097508 C323.387216,174.88913 323.471738,175.657638 323.640782,176.397255 C315.456242,175.975442 308.201444,171.959552 303.341433,165.843265 C302.493397,167.339834 302.008804,169.076201 302.008804,170.925244 C302.008804,174.426869 303.747139,177.518238 306.389857,179.329722 C304.778306,179.280607 303.256911,178.821235 301.9271,178.070061 L301.9271,178.194294 C301.9271,183.08848 305.322064,187.17082 309.8299,188.095341 C309.004402,188.33225 308.133826,188.450704 307.235077,188.450704 C306.601162,188.450704 305.981335,188.390033 305.381229,188.271578 C306.634971,192.28169 310.269414,195.2026 314.580032,195.280607 C311.210424,197.99061 306.961789,199.605634 302.349709,199.605634 C301.555203,199.605634 300.769149,199.559408 300,199.466956 C304.358514,202.327194 309.53689,204 315.095615,204 C333.211481,204 343.114633,188.615385 343.114633,175.270495 C343.114633,174.831347 343.106181,174.392199 343.089276,173.961719 C345.013559,172.537378 346.684275,170.760563 348,168.735283"></path>
									</g>
								</g>
							</svg>
							<span>Twitter</span>
						</a>
					</div>
				</div>
			)}
		</div>
	)
}

export default SocialShare
