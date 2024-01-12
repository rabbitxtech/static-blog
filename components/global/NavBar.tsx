'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import rocket from '@/public/icon/rocket.svg'
import clsx from 'clsx'
import ThemeChanger from './ThemeChanger'
import { useViewStore } from '@/hooks/useViewStore'
import dynamic from 'next/dynamic'

const MenuModal = dynamic(() => import('./MenuModal'))

const isBrowser = () => typeof window !== 'undefined'

const NavBar = () => {
	const getViews = useViewStore((state) => state.fetch)
	const listViews = useViewStore((state) => state.listViews)
	const [navbar, setNavbar] = useState(false)

	const changeBackground = () => {
		if (window.scrollY > 0) {
			setNavbar(() => true)
		} else {
			setNavbar(() => false)
		}
	}

	useEffect(() => {
		if (listViews.length == 0) {
			getViews()
		}
		if (isBrowser()) {
			window.addEventListener('scroll', changeBackground)
		}
		return () => {}
	}, [])
	return (
		<div
			className={clsx(
				'sticky w-full top-0 z-50 border-b-[1px] dark:border-white/20 backdrop-filter backdrop-blur-sm duration-500',
				navbar && 'dark:bg-zinc-950/30 bg-slate-200/30'
			)}
		>
			<div className="max-w-6xl mx-auto">
				<div className="py-4 max-sm:px-4 px-8 flex justify-between items-center text-base font-semibold">
					<div>
						<Link href="/" className="leading-6">
							<Image
								src={rocket}
								alt=""
								className="mr-2 inline-block"
							></Image>
							<span className="font-h">RabbitxTech</span>
						</Link>
					</div>
					<div className="flex items-center">
						<MenuModal />
						<nav className=" leading-6 justify-center items-center hidden md:flex">
							<ul className="space-x-8 flex">
								<li>
									<Link
										href="/"
										className="hover:text-blue-600 dark:hover:text-sky-500"
									>
										Home
									</Link>
								</li>
								<li>
									<Link
										href="/blogs"
										className="hover:text-blue-600 dark:hover:text-sky-500"
									>
										Blog
									</Link>
								</li>
								<li>
									<Link
										href="/series"
										className="hover:text-blue-600 dark:hover:text-sky-500"
									>
										Series
									</Link>
								</li>
								<li>
									<Link
										href="/bookmark"
										className="hover:text-blue-600 dark:hover:text-sky-500"
									>
										Bookmark
									</Link>
								</li>
							</ul>
							<ul className="space-x-8 flex ml-6 pl-6 border-l dark:border-white/20">
								<li>
									<ThemeChanger />
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</div>
	)
}

export default NavBar

