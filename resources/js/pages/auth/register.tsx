import React, { FormEventHandler } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';



export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <>
            <Head title="Daftar - TechStore" />

            <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-50 dark:bg-gray-900">
                {/* Header */}
                <div className="w-full sm:max-w-md px-6 py-4 mb-6">
                    <Link href="/" className="flex items-center justify-center">
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                            🛒 <span className="text-red-600">TechStore</span>
                        </h1>
                    </Link>
                </div>

                {/* Register Form */}
                <Card className="w-full sm:max-w-md shadow-lg">
                    <CardHeader className="text-center">
                        <CardTitle className="text-2xl font-bold">📝 Buat Akun Baru</CardTitle>
                        <CardDescription>
                            Bergabung dengan TechStore untuk mendapatkan pengalaman berbelanja terbaik
                        </CardDescription>
                    </CardHeader>

                    <CardContent>
                        <form onSubmit={submit} className="space-y-4">
                            <div>
                                <Label htmlFor="name">Nama Lengkap</Label>
                                <Input
                                    id="name"
                                    name="name"
                                    value={data.name}
                                    className="mt-1 block w-full"
                                    autoComplete="name"
                                    onChange={(e) => setData('name', e.target.value)}
                                    placeholder="Masukkan nama lengkap"
                                    required
                                />
                                {errors.name && (
                                    <p className="mt-2 text-sm text-red-600">{errors.name}</p>
                                )}
                            </div>

                            <div>
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    className="mt-1 block w-full"
                                    autoComplete="username"
                                    onChange={(e) => setData('email', e.target.value)}
                                    placeholder="nama@email.com"
                                    required
                                />
                                {errors.email && (
                                    <p className="mt-2 text-sm text-red-600">{errors.email}</p>
                                )}
                            </div>

                            <div>
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    className="mt-1 block w-full"
                                    autoComplete="new-password"
                                    onChange={(e) => setData('password', e.target.value)}
                                    placeholder="Minimal 8 karakter"
                                    required
                                />
                                {errors.password && (
                                    <p className="mt-2 text-sm text-red-600">{errors.password}</p>
                                )}
                            </div>

                            <div>
                                <Label htmlFor="password_confirmation">Konfirmasi Password</Label>
                                <Input
                                    id="password_confirmation"
                                    type="password"
                                    name="password_confirmation"
                                    value={data.password_confirmation}
                                    className="mt-1 block w-full"
                                    autoComplete="new-password"
                                    onChange={(e) => setData('password_confirmation', e.target.value)}
                                    placeholder="Ulangi password"
                                    required
                                />
                                {errors.password_confirmation && (
                                    <p className="mt-2 text-sm text-red-600">{errors.password_confirmation}</p>
                                )}
                            </div>

                            <Button 
                                type="submit" 
                                className="w-full bg-red-600 hover:bg-red-700"
                                disabled={processing}
                            >
                                {processing ? '⏳ Membuat akun...' : '🎉 Buat Akun'}
                            </Button>
                        </form>

                        <div className="mt-6">
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-300" />
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-2 bg-white text-gray-500 dark:bg-gray-800 dark:text-gray-400">
                                        Keuntungan bergabung
                                    </span>
                                </div>
                            </div>

                            <div className="mt-4 space-y-2">
                                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                                    <span className="mr-2">🛍️</span>
                                    Akses ke produk eksklusif
                                </div>
                                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                                    <span className="mr-2">💰</span>
                                    Diskon khusus member
                                </div>
                                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                                    <span className="mr-2">📱</span>
                                    Notifikasi produk terbaru
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 text-center">
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Sudah punya akun?{' '}
                                <Link
                                    href={route('login')}
                                    className="font-medium text-red-600 hover:text-red-500"
                                >
                                    Masuk sekarang
                                </Link>
                            </p>
                        </div>
                    </CardContent>
                </Card>

                <div className="mt-6 text-center">
                    <Link
                        href="/"
                        className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                        ← Kembali ke beranda
                    </Link>
                </div>

                <div className="mt-4 max-w-md text-center">
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                        Dengan mendaftar, Anda menyetujui{' '}
                        <a href="#" className="text-red-600 hover:text-red-500">
                            Syarat & Ketentuan
                        </a>{' '}
                        dan{' '}
                        <a href="#" className="text-red-600 hover:text-red-500">
                            Kebijakan Privasi
                        </a>{' '}
                        kami.
                    </p>
                </div>
            </div>
        </>
    );
}