import { View } from '@/models/view.model'
import connectMongo from '@/utils/mongodb'
import { NextResponse } from 'next/server'
import { Post, allPosts } from '@/.contentlayer/generated'

const newAndUpdateView = async (slug: string) => {
	try {
		const doc = await View.findOneAndUpdate(
			{ slug: slug },
			{ $inc: { count: 1 } },
			{ upsert: true }
		)
		if (!doc) return 1
		return doc.count + 1
	} catch (error) {
		throw error
	}
}

export async function POST(
	request: Request,
	{
		params
	}: {
		params: { slug: string }
	}
) {
	const post: Post | undefined = allPosts.find(
		(post) => post.slug === params.slug
	)

	if (!post) {
		return NextResponse.json({ error: { message: '404 Not found' } })
	}

	await connectMongo()
	await newAndUpdateView(params.slug)
	const doc = await View.findOne({ slug: params.slug })
		.select(['-_id', 'slug', 'count'])
		.exec()
	return NextResponse.json(doc)
}

