import React from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
import { ProductGrid } from '@/components/product-grid';
import { type SharedData } from '@/types';

interface Product {
    id: number;
    name: string;
    description: string;
    price: string;
    image_url: string | null;
    stock: number;
}

interface PaginatedProducts {
    data: Product[];
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
    links: Array<{
        url: string | null;
        label: string;
        active: boolean;
    }>;
}

interface Props {
    products: PaginatedProducts;
    [key: string]: unknown;
}

export default function ProductsIndex({ products }: Props) {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Semua Produk - TechStore" />
            
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

                {/* Main Content */}
                <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                    {/* Page Header */}
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-[#EDEDEC] mb-2">
                            📱 Semua Produk
                        </h1>
                        <p className="text-gray-600 dark:text-[#A1A09A]">
                            Temukan {products.total} produk elektronik terbaik untuk kebutuhan Anda
                        </p>
                    </div>

                    {/* Products Grid */}
                    <ProductGrid products={products.data} />

                    {/* Pagination */}
                    {products.last_page > 1 && (
                        <div className="mt-12 flex justify-center">
                            <nav className="flex items-center gap-2">
                                {products.links.map((link, index) => {
                                    if (!link.url) {
                                        return (
                                            <span
                                                key={index}
                                                className="px-3 py-2 text-gray-400 dark:text-[#706f6c]"
                                                dangerouslySetInnerHTML={{ __html: link.label }}
                                            />
                                        );
                                    }

                                    return (
                                        <Link
                                            key={index}
                                            href={link.url}
                                            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                                                link.active
                                                    ? 'bg-[#f53003] text-white dark:bg-[#FF4433]'
                                                    : 'text-gray-700 hover:bg-gray-100 dark:text-[#A1A09A] dark:hover:bg-gray-800'
                                            }`}
                                            dangerouslySetInnerHTML={{ __html: link.label }}
                                        />
                                    );
                                })}
                            </nav>
                        </div>
                    )}

                    {/* Empty State */}
                    {products.data.length === 0 && (
                        <div className="text-center py-16">
                            <div className="text-8xl mb-6">🔍</div>
                            <h2 className="text-2xl font-semibold text-gray-900 dark:text-[#EDEDEC] mb-4">
                                Produk tidak ditemukan
                            </h2>
                            <p className="text-gray-600 dark:text-[#A1A09A] mb-8">
                                Saat ini belum ada produk yang tersedia
                            </p>
                            <Link
                                href={route('home')}
                                className="inline-block rounded-lg bg-[#f53003] px-6 py-3 text-white hover:bg-[#e02a00] dark:bg-[#FF4433] dark:hover:bg-[#e63326]"
                            >
                                Kembali ke Beranda
                            </Link>
                        </div>
                    )}
                </main>
            </div>
        </>
    );
}