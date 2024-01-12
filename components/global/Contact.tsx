'use client'

import { useState, FormEvent } from 'react'
import emailjs from '@emailjs/browser'
import { HashLoader } from 'react-spinners'
import toast from 'react-hot-toast'

const Contact = () => {
	const [isLoading, setIsLoanding] = useState<boolean>(false)
	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		setIsLoanding(true)
		event.preventDefault()

		const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string
		const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string
		const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string

		emailjs
			.sendForm(serviceID, templateID, event.currentTarget, publicKey)
			.then(
				() => {
					setIsLoanding(false)
					toast.success('Email sent successfully!')
				},
				() => {
					setIsLoanding(false)
					toast.error('Error! Failed to send email')
				}
			)
		event.currentTarget?.reset()
	}
	return (
		<div className="text-black dark:text-white">
			<form onSubmit={onSubmit}>
				<div className="grid grid-cols-2 gap-5 mb-4">
					<input
						type="email"
						required
						className="rounded-md p-4 border dark:border-white/20 dark:hover:border-white/30 dark:bg-zinc-800 bg-slate-50"
						placeholder="Email"
						name="user_email"
					/>
					<input
						type="text"
						required
						className="rounded-md p-4 border dark:border-white/20 dark:hover:border-white/30 dark:bg-zinc-800 bg-slate-50 "
						placeholder="Name"
						name="user_name"
					/>
				</div>
				<div className="mb-4">
					<textarea
						className="w-full h-[250px] resize-none border dark:border-white/20 dark:hover:border-white/30 dark:bg-zinc-800 bg-slate-50 rounded-md p-4"
						placeholder="Type your text here ..."
						required
						name="message"
					></textarea>
				</div>
				<button
					type="submit"
					className="w-full rounded-md p-4 font-bold text-white bg-blue-600 dark:bg-blue-400 duration-300"
					disabled={isLoading}
				>
					{isLoading ? (
						<HashLoader color="#ffffff" size={20} />
					) : (
						'Submit'
					)}
				</button>
			</form>
		</div>
	)
}

export default Contact

