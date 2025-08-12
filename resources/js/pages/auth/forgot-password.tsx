import React, { FormEventHandler } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';



interface Props {
    status?: string;
    [key: string]: unknown;
}

export default function ForgotPassword({ status }: Props) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };

    return (
        <>
            <Head title="Lupa Password - TechStore" />

            <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-50 dark:bg-gray-900">
                {/* Header */}
                <div className="w-full sm:max-w-md px-6 py-4 mb-6">
                    <Link href="/" className="flex items-center justify-center">
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                            🛒 <span className="text-red-600">TechStore</span>
                        </h1>
                    </Link>
                </div>

                {/* Forgot Password Form */}
                <Card className="w-full sm:max-w-md shadow-lg">
                    <CardHeader className="text-center">
                        <CardTitle className="text-2xl font-bold">🔐 Lupa Password?</CardTitle>
                        <CardDescription>
                            Tidak masalah! Masukkan email Anda dan kami akan mengirimkan link untuk reset password.
                        </CardDescription>
                    </CardHeader>

                    <CardContent>
                        {status && (
                            <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-md">
                                <p className="text-sm text-green-600">✅ {status}</p>
                            </div>
                        )}

                        <form onSubmit={submit} className="space-y-4">
                            <div>
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    className="mt-1 block w-full"
                                    onChange={(e) => setData('email', e.target.value)}
                                    placeholder="nama@email.com"
                                    required
                                />
                                {errors.email && (
                                    <p className="mt-2 text-sm text-red-600">{errors.email}</p>
                                )}
                            </div>

                            <Button 
                                type="submit" 
                                className="w-full bg-red-600 hover:bg-red-700"
                                disabled={processing}
                            >
                                {processing ? '⏳ Mengirim...' : '📧 Kirim Link Reset'}
                            </Button>
                        </form>

                        <div className="mt-6 text-center space-y-2">
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Ingat password Anda?{' '}
                                <Link
                                    href={route('login')}
                                    className="font-medium text-red-600 hover:text-red-500"
                                >
                                    Masuk sekarang
                                </Link>
                            </p>
                            
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Belum punya akun?{' '}
                                <Link
                                    href={route('register')}
                                    className="font-medium text-red-600 hover:text-red-500"
                                >
                                    Daftar di sini
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
                        💡 Tip: Periksa folder spam jika email tidak muncul di inbox Anda dalam beberapa menit.
                    </p>
                </div>
            </div>
        </>
    );
}