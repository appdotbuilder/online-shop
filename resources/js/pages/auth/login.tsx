import React, { FormEventHandler } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';




interface Props {
    status?: string;
    canResetPassword: boolean;
    [key: string]: unknown;
}

export default function Login({ status, canResetPassword }: Props) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset(),
        });
    };

    return (
        <>
            <Head title="Masuk - TechStore" />

            <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-50 dark:bg-gray-900">
                {/* Header */}
                <div className="w-full sm:max-w-md px-6 py-4 mb-6">
                    <Link href="/" className="flex items-center justify-center">
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                            🛒 <span className="text-red-600">TechStore</span>
                        </h1>
                    </Link>
                </div>

                {/* Login Form */}
                <Card className="w-full sm:max-w-md shadow-lg">
                    <CardHeader className="text-center">
                        <CardTitle className="text-2xl font-bold">🔑 Masuk ke Akun Anda</CardTitle>
                        <CardDescription>
                            Masukkan email dan password untuk mengakses dashboard
                        </CardDescription>
                    </CardHeader>

                    <CardContent>
                        {status && (
                            <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-md">
                                <p className="text-sm text-green-600">{status}</p>
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
                                    autoComplete="username"
                                    onChange={(e) => setData('email', e.target.value)}
                                    placeholder="nama@email.com"
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
                                    autoComplete="current-password"
                                    onChange={(e) => setData('password', e.target.value)}
                                    placeholder="Masukkan password"
                                />
                                {errors.password && (
                                    <p className="mt-2 text-sm text-red-600">{errors.password}</p>
                                )}
                            </div>

                            <div className="flex items-center space-x-2">
                                <input
                                    id="remember"
                                    name="remember"
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500"
                                    checked={data.remember}
                                    onChange={(e) => setData('remember', e.target.checked as false)}
                                />
                                <Label htmlFor="remember" className="text-sm">
                                    Ingat saya
                                </Label>
                            </div>

                            <div className="flex items-center justify-between">
                                {canResetPassword && (
                                    <Link
                                        href={route('password.request')}
                                        className="text-sm text-red-600 hover:text-red-500"
                                    >
                                        Lupa password?
                                    </Link>
                                )}
                            </div>

                            <Button 
                                type="submit" 
                                className="w-full bg-red-600 hover:bg-red-700"
                                disabled={processing}
                            >
                                {processing ? '⏳ Masuk...' : '🚀 Masuk'}
                            </Button>
                        </form>

                        <div className="mt-6 text-center">
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Belum punya akun?{' '}
                                <Link
                                    href={route('register')}
                                    className="font-medium text-red-600 hover:text-red-500"
                                >
                                    Daftar sekarang
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
            </div>
        </>
    );
}