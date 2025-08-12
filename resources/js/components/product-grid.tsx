import React from 'react';
import { ProductCard } from './product-card';

interface Product {
    id: number;
    name: string;
    description: string;
    price: string;
    image_url: string | null;
    stock: number;
}

interface Props {
    products: Product[];
    title?: string;
    className?: string;
}

export function ProductGrid({ products, title, className = '' }: Props) {
    if (products.length === 0) {
        return (
            <div className={`text-center py-12 ${className}`}>
                <div className="text-6xl mb-4">🛒</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-[#EDEDEC] mb-2">
                    Belum ada produk
                </h3>
                <p className="text-gray-600 dark:text-[#A1A09A]">
                    Produk akan segera tersedia
                </p>
            </div>
        );
    }

    return (
        <div className={className}>
            {title && (
                <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-[#EDEDEC]">
                    {title}
                </h2>
            )}
            
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}