export interface Product {
	id: string;
	name: string;
	imageUrl: string;
	description: string;
	category: string;
	price: string;
	stock: number;
	isSoldOut: boolean;
	soldCount: number;
}
