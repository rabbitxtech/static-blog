'use client'

import React from 'react'
import { useTheme } from 'next-themes'
import { MdDarkMode, MdLightMode } from 'react-icons/md'
const ThemeChanger = () => {
	const { setTheme } = useTheme()

	return (
		<div
			className="cursor-pointer relative float-left"
			aria-label="Change theme"
			title="Change theme"
		>
			<span className="flex dark:hidden p-[6px] hover:bg-gray-200 rounded-md" onClick={() => setTheme('dark')}>
				<MdLightMode size={24} />
			</span>
			<span className="hidden dark:flex p-[6px] dark:hover:bg-white/20 rounded-md" onClick={() => setTheme('light')}>
				<MdDarkMode  size={24} />
			</span>
		</div>
	)
}

export default ThemeChanger

