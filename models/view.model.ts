import { Schema, model, models } from 'mongoose'

export interface IView {
	_id: Schema.Types.ObjectId
	slug: string
	count: number
}

const viewSchema = new Schema<IView>(
	{
		slug: { type: String, required: true, unique: true },
		count: { type: Number, default: 0 }
	},
	{ timestamps: true }
)

export const View = models.View || model('View', viewSchema)

