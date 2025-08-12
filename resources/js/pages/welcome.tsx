import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { ProductGrid } from '@/components/product-grid';

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
    [key: string]: unknown;
}

export default function Welcome({ products }: Props) {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="TechStore - Toko Online Elektronik Terpercaya">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            
            <div className="min-h-screen bg-[#FDFDFC] dark:bg-[#0a0a0a]">
                {/* Header */}
                <header className="border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-[#161615]">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="flex h-16 items-center justify-between">
                            <div className="flex items-center">
                                <h1 className="text-2xl font-bold text-gray-900 dark:text-[#EDEDEC]">
                                    🛒 <span className="text-[#f53003] dark:text-[#FF4433]">TechStore</span>
                                </h1>
                            </div>
                            
                            <nav className="flex items-center gap-4">
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

                {/* Hero Section */}
                <section className="bg-gradient-to-r from-[#f53003] to-[#e02a00] py-20 dark:from-[#FF4433] dark:to-[#e63326]">
                    <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                        <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
                            🚀 Toko Elektronik Terpercaya
                        </h2>
                        <p className="mb-8 text-xl text-white/90 sm:text-2xl">
                            Temukan gadget terbaru dengan harga terbaik dan kualitas terjamin
                        </p>
                        
                        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <Link
                                href={route('products.index')}
                                className="inline-block rounded-lg bg-white px-8 py-3 text-lg font-semibold text-[#f53003] hover:bg-gray-100 dark:text-[#FF4433]"
                            >
                                🛍️ Belanja Sekarang
                            </Link>
                            
                            {!auth.user && (
                                <Link
                                    href={route('register')}
                                    className="inline-block rounded-lg border-2 border-white px-8 py-3 text-lg font-semibold text-white hover:bg-white hover:text-[#f53003] dark:hover:text-[#FF4433]"
                                >
                                    📝 Daftar Gratis
                                </Link>
                            )}
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-16">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h3 className="text-3xl font-bold text-gray-900 dark:text-[#EDEDEC] mb-4">
                                ✨ Mengapa Pilih TechStore?
                            </h3>
                            <p className="text-lg text-gray-600 dark:text-[#A1A09A]">
                                Kami berkomitmen memberikan pengalaman berbelanja terbaik
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                            <div className="text-center">
                                <div className="text-5xl mb-4">🚚</div>
                                <h4 className="text-xl font-semibold text-gray-900 dark:text-[#EDEDEC] mb-2">
                                    Pengiriman Cepat
                                </h4>
                                <p className="text-gray-600 dark:text-[#A1A09A]">
                                    Pengiriman ke seluruh Indonesia dengan jaminan aman dan cepat
                                </p>
                            </div>
                            
                            <div className="text-center">
                                <div className="text-5xl mb-4">🔒</div>
                                <h4 className="text-xl font-semibold text-gray-900 dark:text-[#EDEDEC] mb-2">
                                    Transaksi Aman
                                </h4>
                                <p className="text-gray-600 dark:text-[#A1A09A]">
                                    Sistem pembayaran yang aman dan terpercaya dengan berbagai metode
                                </p>
                            </div>
                            
                            <div className="text-center">
                                <div className="text-5xl mb-4">🎯</div>
                                <h4 className="text-xl font-semibold text-gray-900 dark:text-[#EDEDEC] mb-2">
                                    Kualitas Terjamin
                                </h4>
                                <p className="text-gray-600 dark:text-[#A1A09A]">
                                    Semua produk original dengan garansi resmi dan layanan purna jual
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Featured Products */}
                <section className="bg-gray-50 py-16 dark:bg-[#161615]">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h3 className="text-3xl font-bold text-gray-900 dark:text-[#EDEDEC] mb-4">
                                🔥 Produk Pilihan
                            </h3>
                            <p className="text-lg text-gray-600 dark:text-[#A1A09A]">
                                Produk terbaru dan terpopuler dengan teknologi canggih
                            </p>
                        </div>
                        
                        <ProductGrid products={products} />
                        
                        <div className="text-center mt-12">
                            <Link
                                href={route('products.index')}
                                className="inline-block rounded-lg bg-[#f53003] px-8 py-3 text-lg font-semibold text-white hover:bg-[#e02a00] dark:bg-[#FF4433] dark:hover:bg-[#e63326]"
                            >
                                Lihat Semua Produk →
                            </Link>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                {!auth.user && (
                    <section className="py-16">
                        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
                            <div className="rounded-2xl bg-gradient-to-r from-[#f53003] to-[#e02a00] p-8 text-white dark:from-[#FF4433] dark:to-[#e63326] lg:p-12">
                                <h3 className="mb-4 text-3xl font-bold">
                                    🎉 Bergabung dengan TechStore
                                </h3>
                                <p className="mb-8 text-lg">
                                    Daftar sekarang dan dapatkan akses ke produk eksklusif, diskon khusus, dan notifikasi produk terbaru!
                                </p>
                                
                                <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                                    <Link
                                        href={route('register')}
                                        className="inline-block rounded-lg bg-white px-8 py-3 text-lg font-semibold text-[#f53003] hover:bg-gray-100 dark:text-[#FF4433]"
                                    >
                                        📝 Daftar Sekarang
                                    </Link>
                                    <Link
                                        href={route('login')}
                                        className="inline-block rounded-lg border-2 border-white px-8 py-3 text-lg font-semibold text-white hover:bg-white hover:text-[#f53003] dark:hover:text-[#FF4433]"
                                    >
                                        🔑 Sudah Punya Akun?
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* Footer */}
                <footer className="border-t border-gray-200 bg-white dark:border-gray-700 dark:bg-[#161615]">
                    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h4 className="text-xl font-bold text-gray-900 dark:text-[#EDEDEC] mb-2">
                                🛒 TechStore
                            </h4>
                            <p className="text-gray-600 dark:text-[#A1A09A] mb-4">
                                Toko elektronik terpercaya untuk semua kebutuhan teknologi Anda
                            </p>
                            <p className="text-sm text-gray-500 dark:text-[#706f6c]">
                                © 2024 TechStore. Semua hak cipta dilindungi.
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}