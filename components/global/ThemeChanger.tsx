'use client'

import React from 'react'
import { useTheme } from 'next-themes'
import { MdDarkMode, MdLightMode } from 'react-icons/md'
const ThemeChanger = () => {
	const { setTheme } = useTheme()

	return (
		<div className="cursor-pointer relative float-left">
			<button
				type="button"
				className="flex dark:hidden p-[6px] hover:bg-gray-200 rounded-md"
				onClick={() => setTheme('dark')}
				aria-label="Change theme to dark"
				title="Change theme"
			>
				<MdLightMode size={24} />
			</button>
			<button
				type="button"
				className="hidden dark:flex p-[6px] dark:hover:bg-white/20 rounded-md"
				onClick={() => setTheme('light')}
				aria-label="Change theme to light"
				title="Change theme"
			>
				<MdDarkMode size={24} />
			</button>
		</div>
	)
}

export default ThemeChanger

