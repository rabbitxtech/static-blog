'use client'
import React, { ChangeEvent } from 'react'

const Search = ({ onSearch }: { onSearch: (e: ChangeEvent) => void }) => {
	return (
		<div className="relative shadow-slate-200 dark:shadow-slate-800 shadow-md rounded-full w-full">
			<span className="absolute top-[50%] translate-y-[-50%] left-4">
				<svg
					width="20px"
					height="20px"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g id="Interface / Search_Magnifying_Glass">
						<path
							id="Vector"
							d="M15 15L21 21M10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 13.866 13.866 17 10 17Z"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</g>
				</svg>
			</span>
			<input
				type="search"
				placeholder="Search anything ..."
				className="w-full bg-transparent p-3 pl-11 border-2 dark:border-white/20 dark:focus:border-blue-400 dark:hover:border-blue-400 focus:border-blue-300 hover:border-blue-300 outline-none rounded-full duration-300"
				onChange={onSearch}
			/>
		</div>
	)
}

export default Search
