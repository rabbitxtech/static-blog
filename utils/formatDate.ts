import { format, parseISO } from 'date-fns'

// Format a post's ISO date (e.g. `2023-04-13T03:01:00.000Z`) as a
// timezone-agnostic string. We only keep the date portion so server and
// client render the same day regardless of their local timezone (avoiding
// the hydration mismatch caused by `parseISO` + local-time formatting).
export const formatPostDate = (date: string): string => {
	return format(parseISO(date.slice(0, 10)), 'LLLL d, yyyy')
}
