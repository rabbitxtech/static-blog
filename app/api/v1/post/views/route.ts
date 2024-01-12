import { View } from '@/models/view.model'
import connectMongo from '@/utils/mongodb'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET() {
	await connectMongo()
	let doc = await View.find({}).select(['-_id', 'slug', 'count']).exec()
	return NextResponse.json(doc, { status: 200 })
}

