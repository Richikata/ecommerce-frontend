"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState, useEffect } from 'react';
import styles from './MainContent.module.css';
import { Product } from "@/types/product";
import { getProducts } from "@/utils/api";
import dynamic from 'next/dynamic';

const ProductSection = dynamic(() => import('./ProductSection'), { ssr: false });

export default function MainContent() {
  const [products, setProducts] = useState<Product[]>([]);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error('Failed to fetch products:', error);
        setError('Failed to load products. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const bestSelling = products.filter(p => p.soldCount > 50);
  const newArrivals = products.slice(0, 10);
  const featured = products.filter(p => p.stock > 0 && !p.isSoldOut);

  return (
    <main className={styles.mainContent}>
      <ProductSection title="Best Selling" products={bestSelling} />
      <ProductSection title="New Arrivals" products={newArrivals} />
      <ProductSection title="Featured Products" products={featured} />
    </main>
  );
}

