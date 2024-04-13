import { type Order } from '@/composables/types';

// api handler
export type Res<T> = {
	success: boolean
	data?: T
	products?: []
	message?: string | []
	orderId?: string
	total?: number
	order?: Order
}