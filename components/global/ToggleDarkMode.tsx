'use client'

import React, { useEffect } from 'react'

const ToggleDarkMode = () => {
	useEffect(() => {
		window.addEventListener('storage', (e: Event) => {
			var themeName = localStorage.getItem('theme')
			if (themeName) {
				if (['dark', 'light', 'system'].indexOf(themeName) == -1) {
					localStorage.removeItem('theme')
					if (
						window.matchMedia('(prefers-color-scheme: dark)')
							.matches
					) {
						document.documentElement.classList.add('dark')
					} else {
						document.documentElement.classList.remove('dark')
					}
				} else {
					if (themeName === 'dark') {
						document.documentElement.classList.add('dark')
						document
							.querySelector('meta[name="color-scheme"]')
							?.setAttribute('content', 'dark')
					} else if (themeName === 'system') {
						if (
							window.matchMedia('(prefers-color-scheme: dark)')
								.matches
						) {
							document.documentElement.classList.add('dark')
						} else {
							document.documentElement.classList.remove('dark')
						}
					} else {
						document.documentElement.classList.remove('dark')
					}
				}
			} else {
				if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
					document.documentElement.classList.add('dark')
				}
			}
		})
	}, [])

	return (
		<div className="cursor-pointer relative h-6 overflow-y-hidden" aria-label="Change theme" title='Change theme'>
			<div
				className="dark:top-[56px] top-0 duration-300 ease-in flex relative"
				onClick={(e) => {
					document.documentElement.classList.add('dark')
					localStorage.theme = 'dark'
				}}
			>
				<svg
					width="24px"
					height="24px"
					viewBox="0 0 32 32"
					version="1.1"
					xmlns="http://www.w3.org/2000/svg"
					className="fill-blue-600"
				>
					<title>sun</title>
					<path d="M8.031 16.5c0 4.143 3.358 7.5 7.5 7.5s7.5-3.357 7.5-7.5-3.357-7.5-7.5-7.5c-4.142 0-7.5 3.357-7.5 7.5zM15.531 3.75l-2.109 4.219h4.219l-2.11-4.219zM24.543 7.457l-4.475 1.491 2.982 2.983 1.493-4.474zM10.994 8.948l-4.474-1.491 1.491 4.475 2.983-2.984zM6.969 14.359l-4.219 2.11 4.219 2.109v-4.219zM24.031 18.641l4.219-2.109-4.219-2.109v4.218zM15.531 29.25l2.109-4.219h-4.219l2.11 4.219zM20.068 24.052l4.475 1.491-1.492-4.475-2.983 2.984zM6.52 25.543l4.475-1.491-2.983-2.983-1.492 4.474z"></path>
				</svg>
				<span className="ml-1 text-blue-600">Light</span>
			</div>
			<div
				className="top-7 dark:top-[-24px] flex duration-300 ease-in relative"
				onClick={(e) => {
					document.documentElement.classList.remove('dark')
					localStorage.theme = 'light'
				}}
			>
				<svg
					width="24px"
					height="24px"
					viewBox="0 0 32 32"
					version="1.1"
					xmlns="http://www.w3.org/2000/svg"
					className="fill-blue-400"
				>
					<title>moon</title>
					<path d="M10.895 7.574c0 7.55 5.179 13.67 11.567 13.67 1.588 0 3.101-0.38 4.479-1.063-1.695 4.46-5.996 7.636-11.051 7.636-6.533 0-11.83-5.297-11.83-11.83 0-4.82 2.888-8.959 7.023-10.803-0.116 0.778-0.188 1.573-0.188 2.39z"></path>
				</svg>
				<span className="ml-1 text-blue-400">Dark</span>
			</div>
		</div>
	)
}

export default ToggleDarkMode
