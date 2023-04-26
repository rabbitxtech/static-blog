import mongoose, { Mongoose } from 'mongoose'
import '@/models/view.model'

const MONGODB_URI =
	process.env.MONGODB_URI || 'mongodb://localhost:27017/static-blog'

if (!MONGODB_URI) {
	throw new Error(
		'Please define the MONGODB_URI environment variable inside .env'
	)
}

const opts = {
	useNewUrlParser: true,
	autoIndex: false, // Don't build indexes
	maxPoolSize: 10, // Maintain up to 10 socket connections
	serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
	socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
	family: 4, // Use IPv4, skip trying IPv6
	compressors: 'zlib'
}

declare global {
	var mongoClientPromise: Promise<Mongoose>
}

const connectMongo = () => {
	try {
		let conn = null
		if (process.env.NODE_ENV === 'development') {
			if (!global.mongoClientPromise) {
				global.mongoClientPromise = mongoose.connect(MONGODB_URI, opts)
			}
			conn = global.mongoClientPromise
		} else {
			conn = mongoose.connect(MONGODB_URI, opts)
		}
		return conn
	} catch (error) {
		throw error
	}
}




export default connectMongo