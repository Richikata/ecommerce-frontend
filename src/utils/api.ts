import axios, { AxiosInstance } from "axios";
import { Product } from "../types/product";

const api: AxiosInstance = axios.create({
	baseURL: "http://localhost:3000", // Replace with your actual API base URL
	timeout: 5000,
	headers: {
		"Content-Type": "application/json",
	},
});

export const getProducts = async (): Promise<Product[]> => {
	try {
		const response = await api.get<Product[]>("/products");
		return response.data;
	} catch (error) {
		console.error("Error fetching products:", error);
		throw error;
	}
};

export const getProductById = async (id: string): Promise<Product> => {
	try {
		const response = await api.get<Product>(`/products/${id}`);
		return response.data;
	} catch (error) {
		console.error(`Error fetching product with id ${id}:`, error);
		throw error;
	}
};

export default api;
