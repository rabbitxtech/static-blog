import React, { Fragment } from 'react'
import Link from 'next/link'
import { Dialog, Transition } from '@headlessui/react'
import useOpenMenu from '@/hooks/useOpenMenu'
import ThemeChanger from './ThemeChanger'

const MenuModal = () => {
	const { isOpen, setIsOpen } = useOpenMenu()
	function closeModal() {
		setIsOpen(false)
	}

	function openModal() {
		setIsOpen(true)
	}
	return (
		<>
			<button
				className="block md:hidden w-6 h-6"
				type="button"
				onClick={openModal}
				aria-label="Toggle Menu Modal"
				title="Toggle Menu Modal"
			>
				<span className="gg-menu"></span>
			</button>
			<Transition appear show={isOpen} as={Fragment}>
				<Dialog
					as="div"
					className="relative z-[999]"
					onClose={closeModal}
				>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black bg-opacity-25 backdrop-filter backdrop-blur-sm" />
					</Transition.Child>
					<div className="fixed inset-0 overflow-y-auto">
						<div className="flex min-h-full items-center justify-center p-4 text-center">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								<Dialog.Panel className="w-full max-w-md relative transform overflow-hidden rounded-2xl p-6 text-left align-middle shadow-xl transition-all dark:bg-zinc-700 bg-white">
									<ul className="border-b-[1px] dark:border-white/20">
										<li className="mb-2">
											<Link
												href="/"
												className="hover:text-blue-600 dark:hover:text-sky-500 font-semibold duration-300"
												onClick={closeModal}
											>
												Home
											</Link>
										</li>
										<li className="mb-2">
											<Link
												href="/blogs"
												className="hover:text-blue-600 dark:hover:text-sky-500 font-semibold duration-300"
												onClick={closeModal}
											>
												Blog
											</Link>
										</li>
										<li className="mb-2">
											<Link
												href="/series"
												className="hover:text-blue-600 dark:hover:text-sky-500 font-semibold duration-300"
												onClick={closeModal}
											>
												Series
											</Link>
										</li>
										<li className="mb-2">
											<Link
												href="/bookmark"
												className="hover:text-blue-600 dark:hover:text-sky-500 font-semibold duration-300"
												onClick={closeModal}
											>
												Bookmark
											</Link>
										</li>
									</ul>
									<button
										type="button"
										className="flex justify-center items-center absolute w-8 h-8 top-5 right-5 rounded-md border border-transparent"
										onClick={closeModal}
									>
										<svg
											viewBox="0 0 10 10"
											className="w-2.5 h-2.5 overflow-visible"
											aria-hidden="true"
										>
											<path
												d="M0 0L10 10M10 0L0 10"
												fill="none"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
											></path>
										</svg>
									</button>
									<div className="font-semibold mt-4">
										<ThemeChanger />
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	)
}

export default MenuModal

