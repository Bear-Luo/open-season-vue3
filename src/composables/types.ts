export interface Product {
	category: string
	content: string
	description: string
	id: string
	imageUrl: string
	is_enabled: number
	num: number
	origin_price: string
	price: string
	title: string
	unit: string
	image?: string
}

export interface Loading {
	loading: boolean
	light?: boolean
	fullPage?: boolean
}

export interface Category {
	text: string
	active: boolean
}

export interface CartData {
	carts: Carts[]
	total: number
	final_total: number
}
export interface Carts {
	final_total: number | string
	id: string
	product: Product
	product_id: string
	qty: number
	total: number
}
export interface Product {
	category: string
	content: string
	description: string
	id: string
	imageUrl: string
	is_enabled: number
	num: number
	origin_price: string
	price: string
	title: string
	unit: string
}

export interface Order {
	create_at: number
	id: string
	is_paid: boolean
	paid_date: number
	products: OrderProduct
	total: number
	user: User
}
export interface OrderProduct {
	final_total: number
	id: string
	product: {[key: string]: Product}
	product_id: string
	qty: number
}
export interface User {
	[key: string]: string
	address: string
	email: string
	name: string
	tel: string
}

export interface MessagesParams {
	text: string
	class?: string
}
export interface Messages extends MessagesParams {
	timeStamp: number
	top: string
}
