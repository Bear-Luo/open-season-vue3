import { type Order, type Product } from '@/composables/types';

// api handler
export type Res<T> = {
	success: boolean
	data?: T
	products?: []
	product?: Product
	message?: string | []
	orderId?: string
	total?: number
	order?: Order
}