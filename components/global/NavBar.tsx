'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import rocketSpaceAstronomySpaceshipSatellite from '@/public/icon/rocket-space-astronomy-spaceship-satellite.svg'
import clsx from 'clsx'
import ToggleDarkMode from './ToggleDarkMode'
import MenuModal from './MenuModal'

const isBrowser = () => typeof window !== 'undefined'

const NavBar = () => {
	const [navbar, setNavbar] = useState(false)

	const changeBackground = () => {
		if (window.scrollY > 0) {
			setNavbar(() => true)
		} else {
			setNavbar(() => false)
		}
	}

	useEffect(() => {
		if (isBrowser()) {
			window.addEventListener('scroll', changeBackground)
		}
		return () => {}
	}, [])
	return (
		<div
			className={clsx(
				'sticky w-full top-0 z-50 border-b-[1px] dark:border-white/20 backdrop-filter backdrop-blur-lg duration-500',
				navbar && 'dark:bg-zinc-950/30 bg-slate-200/30'
			)}
		>
			<div className="max-w-6xl mx-auto">
				<div className="py-4 max-sm:px-4 px-8 flex justify-between text-base font-semibold">
					<div>
						<Link href="/" className="leading-6">
							<Image
								src={rocketSpaceAstronomySpaceshipSatellite}
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
										className="hover:text-sky-500"
									>
										Home
									</Link>
								</li>
								<li>
									<Link
										href="/blogs"
										className="hover:text-sky-500"
									>
										Blog
									</Link>
								</li>
								{/* <li className="hover:text-sky-500">
									<Link
										href="/"
										className="hover:text-sky-500"
									>
										About
									</Link>
								</li> */}
							</ul>
							<ul className="space-x-8 flex ml-6 pl-6 border-l dark:border-white/20">
								<li className="text-sky-500">
									<ToggleDarkMode />
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
