import React from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
import { type SharedData } from '@/types';

interface Product {
    id: number;
    name: string;
    description: string;
    price: string;
    image_url: string | null;
    stock: number;
    status: string;
    created_at: string;
}

interface Props {
    product: Product;
    [key: string]: unknown;
}

export default function ProductShow({ product }: Props) {
    const { auth } = usePage<SharedData>().props;

    const formatPrice = (price: string) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(parseFloat(price));
    };

    const isInStock = product.stock > 0;

    return (
        <>
            <Head title={`${product.name} - TechStore`} />
            
            <div className="min-h-screen bg-[#FDFDFC] dark:bg-[#0a0a0a]">
                {/* Header */}
                <header className="border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-[#161615]">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="flex h-16 items-center justify-between">
                            <div className="flex items-center">
                                <Link 
                                    href={route('home')}
                                    className="text-2xl font-bold text-gray-900 dark:text-[#EDEDEC] hover:text-[#f53003] dark:hover:text-[#FF4433]"
                                >
                                    🛒 <span className="text-[#f53003] dark:text-[#FF4433]">TechStore</span>
                                </Link>
                            </div>
                            
                            <nav className="flex items-center gap-4">
                                <Link
                                    href={route('home')}
                                    className="text-sm font-medium text-gray-700 hover:text-[#f53003] dark:text-[#A1A09A] dark:hover:text-[#FF4433]"
                                >
                                    Beranda
                                </Link>
                                <Link
                                    href={route('products.index')}
                                    className="text-sm font-medium text-gray-700 hover:text-[#f53003] dark:text-[#A1A09A] dark:hover:text-[#FF4433]"
                                >
                                    Semua Produk
                                </Link>
                                
                                {auth.user ? (
                                    <Link
                                        href={route('dashboard')}
                                        className="inline-block rounded-md border border-[#f53003] px-4 py-2 text-sm font-medium text-[#f53003] hover:bg-[#f53003] hover:text-white dark:border-[#FF4433] dark:text-[#FF4433] dark:hover:bg-[#FF4433]"
                                    >
                                        Dashboard
                                    </Link>
                                ) : (
                                    <div className="flex items-center gap-3">
                                        <Link
                                            href={route('login')}
                                            className="text-sm font-medium text-gray-700 hover:text-[#f53003] dark:text-[#A1A09A] dark:hover:text-[#FF4433]"
                                        >
                                            Masuk
                                        </Link>
                                        <Link
                                            href={route('register')}
                                            className="inline-block rounded-md bg-[#f53003] px-4 py-2 text-sm font-medium text-white hover:bg-[#e02a00] dark:bg-[#FF4433] dark:hover:bg-[#e63326]"
                                        >
                                            Daftar
                                        </Link>
                                    </div>
                                )}
                            </nav>
                        </div>
                    </div>
                </header>

                {/* Breadcrumb */}
                <div className="bg-gray-50 dark:bg-[#161615]">
                    <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
                        <nav className="flex items-center gap-2 text-sm">
                            <Link 
                                href={route('home')}
                                className="text-gray-500 hover:text-[#f53003] dark:text-[#706f6c] dark:hover:text-[#FF4433]"
                            >
                                Beranda
                            </Link>
                            <span className="text-gray-400 dark:text-[#706f6c]">&gt;</span>
                            <Link 
                                href={route('products.index')}
                                className="text-gray-500 hover:text-[#f53003] dark:text-[#706f6c] dark:hover:text-[#FF4433]"
                            >
                                Produk
                            </Link>
                            <span className="text-gray-400 dark:text-[#706f6c]">&gt;</span>
                            <span className="text-gray-900 dark:text-[#EDEDEC] font-medium">
                                {product.name}
                            </span>
                        </nav>
                    </div>
                </div>

                {/* Product Detail */}
                <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                        {/* Product Image */}
                        <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
                            {product.image_url ? (
                                <img
                                    src={product.image_url}
                                    alt={product.name}
                                    className="h-full w-full object-cover"
                                />
                            ) : (
                                <div className="flex h-full items-center justify-center">
                                    <span className="text-8xl">📦</span>
                                </div>
                            )}
                        </div>

                        {/* Product Info */}
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900 dark:text-[#EDEDEC] mb-4">
                                {product.name}
                            </h1>
                            
                            <div className="mb-6">
                                <span className="text-4xl font-bold text-[#f53003] dark:text-[#FF4433]">
                                    {formatPrice(product.price)}
                                </span>
                            </div>

                            <div className="mb-6 flex items-center gap-4">
                                <div className="flex items-center gap-2">
                                    <span className="text-sm text-gray-600 dark:text-[#A1A09A]">Stok:</span>
                                    <span className={`text-sm font-medium ${isInStock ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                                        {isInStock ? `${product.stock} tersedia` : 'Habis'}
                                    </span>
                                </div>
                                
                                {isInStock && (
                                    <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-200">
                                        ✅ Tersedia
                                    </span>
                                )}
                            </div>

                            <div className="mb-8">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-[#EDEDEC] mb-3">
                                    📝 Deskripsi Produk
                                </h3>
                                <p className="text-gray-600 dark:text-[#A1A09A] leading-relaxed">
                                    {product.description}
                                </p>
                            </div>

                            {/* Action Buttons */}
                            <div className="space-y-4">
                                {isInStock ? (
                                    <>
                                        <button
                                            type="button"
                                            className="w-full rounded-lg bg-[#f53003] px-6 py-3 text-lg font-semibold text-white hover:bg-[#e02a00] dark:bg-[#FF4433] dark:hover:bg-[#e63326] transition-colors"
                                        >
                                            🛒 Beli Sekarang
                                        </button>
                                        <button
                                            type="button"
                                            className="w-full rounded-lg border-2 border-[#f53003] px-6 py-3 text-lg font-semibold text-[#f53003] hover:bg-[#f53003] hover:text-white dark:border-[#FF4433] dark:text-[#FF4433] dark:hover:bg-[#FF4433] dark:hover:text-white transition-colors"
                                        >
                                            ❤️ Tambah ke Wishlist
                                        </button>
                                    </>
                                ) : (
                                    <button
                                        type="button"
                                        disabled
                                        className="w-full rounded-lg bg-gray-400 px-6 py-3 text-lg font-semibold text-white cursor-not-allowed dark:bg-gray-600"
                                    >
                                        😔 Stok Habis
                                    </button>
                                )}
                            </div>

                            {/* Authentication Reminder */}
                            {!auth.user && (
                                <div className="mt-6 rounded-lg bg-blue-50 border border-blue-200 p-4 dark:bg-blue-900/20 dark:border-blue-800">
                                    <p className="text-sm text-blue-800 dark:text-blue-200">
                                        💡 <Link 
                                            href={route('login')} 
                                            className="font-semibold underline hover:no-underline"
                                        >
                                            Masuk
                                        </Link> atau <Link 
                                            href={route('register')} 
                                            className="font-semibold underline hover:no-underline"
                                        >
                                            daftar
                                        </Link> untuk dapat melakukan pembelian
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Back Button */}
                    <div className="mt-12">
                        <Link
                            href={route('products.index')}
                            className="inline-flex items-center gap-2 text-[#f53003] hover:text-[#e02a00] dark:text-[#FF4433] dark:hover:text-[#e63326] font-medium"
                        >
                            ← Kembali ke Semua Produk
                        </Link>
                    </div>
                </main>
            </div>
        </>
    );
}