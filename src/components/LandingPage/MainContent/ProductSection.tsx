'use client';

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Product } from "@/types/product";
import Link from 'next/link';
import styles from './MainContent.module.css';
import Image from "next/image";

interface ProductSectionProps {
  title: string;
  products: Product[];
}

export default function ProductSection({ title, products }: ProductSectionProps) {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 4,
      spacing: 20,
    },
    breakpoints: {
      '(max-width: 1200px)': {
        slides: { perView: 3, spacing: 15 },
      },
      '(max-width: 800px)': {
        slides: { perView: 2, spacing: 10 },
      },
      '(max-width: 500px)': {
        slides: { perView: 1, spacing: 10 },
      },
    },
  });

  return (
    <section className={styles.productSection}>
      <h2>{title}</h2>
      <div ref={sliderRef} className="keen-slider">
        {products.map((product) => (
          <Link href={`/products/${product.id}`} key={product.id}>
            <div className={`keen-slider__slide ${styles.productCard}`}>
              <Image src={product.imageUrl} alt={product.name} width={200} height={200} />
              <div className={styles.productInfo}>
                <h3>{product.name}</h3>
                <p>${product.price}</p>
                {product.isSoldOut && <span className={styles.soldOut}>Sold Out</span>}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}