import clsx from 'clsx'
import Link from 'next/link'

export const TabNavItem = ({
	children,
	href,
	isActive
}: {
	children: React.ReactNode
	href: string
	isActive?: boolean
}) => {
	return (
		<Link
			href={href}
			className={clsx('rounded-lg px-3 py-1 text-sm font-medium duration-300', {
				'dark:bg-zinc-600 dark:text-zinc-100 dark:hover:bg-zinc-500 dark:hover:text-white bg-gray-200 hover:bg-gray-300 ':
					!isActive,
				'bg-blue-600 dark:bg-sky-500 text-white': isActive
			})}
		>
			{children}
		</Link>
	)
}
