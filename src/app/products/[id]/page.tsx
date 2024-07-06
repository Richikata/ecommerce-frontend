"use client";

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import styles from './ProductDetails.module.css';
import { getProductById } from '../../../utils/api';
import { Product } from '../../../types/product';
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

export default function ProductDetails({ params }: { params: { id: string } }) {
  const router = useRouter();
  const id = params.id;
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      if (typeof id === 'string') {
        try {
          const data = await getProductById(id);
          setProduct(data);
        } catch (error) {
          console.error('Failed to fetch product:', error);
        }
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>
        <img src={product.imageUrl} alt={product.name} className={styles.productImage} />
        <div className={styles.productInfo}>
          <h1>{product.name}</h1>
          <p className={styles.price}>${product.price}</p>
          <p className={styles.description}>{product.description}</p>
          <p className={styles.stock}>In Stock: {product.stock}</p>
          {product.isSoldOut ? (
            <p className={styles.soldOut}>Sold Out</p>
          ) : (
            <button className={styles.addToCart} disabled={product.stock === 0}>
              Add to Cart
            </button>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}