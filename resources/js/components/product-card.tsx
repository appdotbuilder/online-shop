import React from 'react';
import { Link } from '@inertiajs/react';

interface Product {
    id: number;
    name: string;
    description: string;
    price: string;
    image_url: string | null;
    stock: number;
}

interface Props {
    product: Product;
}

export function ProductCard({ product }: Props) {
    const formatPrice = (price: string) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(parseFloat(price));
    };

    return (
        <div className="group relative overflow-hidden rounded-lg bg-white shadow-sm transition-all hover:shadow-lg dark:bg-[#161615] dark:shadow-[inset_0px_0px_0px_1px_#fffaed2d]">
            <div className="aspect-square w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
                {product.image_url ? (
                    <img
                        src={product.image_url}
                        alt={product.name}
                        className="h-full w-full object-cover transition-transform group-hover:scale-105"
                        loading="lazy"
                    />
                ) : (
                    <div className="flex h-full items-center justify-center bg-gray-200 dark:bg-gray-700">
                        <span className="text-4xl">📦</span>
                    </div>
                )}
            </div>
            
            <div className="p-4">
                <h3 className="mb-2 font-semibold text-gray-900 dark:text-[#EDEDEC] line-clamp-1">
                    {product.name}
                </h3>
                <p className="mb-3 text-sm text-gray-600 dark:text-[#A1A09A] line-clamp-2">
                    {product.description}
                </p>
                
                <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-[#f53003] dark:text-[#FF4433]">
                        {formatPrice(product.price)}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-[#706f6c]">
                        Stok: {product.stock}
                    </span>
                </div>
                
                <Link
                    href={route('products.show', product.id)}
                    className="mt-3 block w-full rounded-md bg-[#f53003] px-4 py-2 text-center text-sm font-medium text-white transition-colors hover:bg-[#e02a00] dark:bg-[#FF4433] dark:hover:bg-[#e63326]"
                >
                    Lihat Detail
                </Link>
            </div>
        </div>
    );
}