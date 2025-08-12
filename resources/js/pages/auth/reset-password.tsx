import React, { FormEventHandler } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';



interface Props {
    token: string;
    email: string;
    [key: string]: unknown;
}

export default function ResetPassword({ token, email }: Props) {
    const { data, setData, post, processing, errors, reset } = useForm({
        token: token,
        email: email,
        password: '',
        password_confirmation: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('password.store'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <>
            <Head title="Reset Password - TechStore" />

            <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-50 dark:bg-gray-900">
                {/* Header */}
                <div className="w-full sm:max-w-md px-6 py-4 mb-6">
                    <Link href="/" className="flex items-center justify-center">
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                            🛒 <span className="text-red-600">TechStore</span>
                        </h1>
                    </Link>
                </div>

                {/* Reset Password Form */}
                <Card className="w-full sm:max-w-md shadow-lg">
                    <CardHeader className="text-center">
                        <CardTitle className="text-2xl font-bold">🔑 Reset Password</CardTitle>
                        <CardDescription>
                            Buat password baru untuk akun Anda
                        </CardDescription>
                    </CardHeader>

                    <CardContent>
                        <form onSubmit={submit} className="space-y-4">
                            <div>
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    className="mt-1 block w-full bg-gray-50"
                                    readOnly
                                />
                                {errors.email && (
                                    <p className="mt-2 text-sm text-red-600">{errors.email}</p>
                                )}
                            </div>

                            <div>
                                <Label htmlFor="password">Password Baru</Label>
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
                                <Label htmlFor="password_confirmation">Konfirmasi Password Baru</Label>
                                <Input
                                    id="password_confirmation"
                                    type="password"
                                    name="password_confirmation"
                                    value={data.password_confirmation}
                                    className="mt-1 block w-full"
                                    autoComplete="new-password"
                                    onChange={(e) => setData('password_confirmation', e.target.value)}
                                    placeholder="Ulangi password baru"
                                    required
                                />
                                {errors.password_confirmation && (
                                    <p className="mt-2 text-sm text-red-600">{errors.password_confirmation}</p>
                                )}
                            </div>

                            {errors.token && (
                                <div className="p-4 bg-red-50 border border-red-200 rounded-md">
                                    <p className="text-sm text-red-600">❌ {errors.token}</p>
                                </div>
                            )}

                            <Button 
                                type="submit" 
                                className="w-full bg-red-600 hover:bg-red-700"
                                disabled={processing}
                            >
                                {processing ? '⏳ Mengupdate...' : '🔐 Update Password'}
                            </Button>
                        </form>

                        <div className="mt-6">
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-300" />
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-2 bg-white text-gray-500 dark:bg-gray-800 dark:text-gray-400">
                                        Tips keamanan password
                                    </span>
                                </div>
                            </div>

                            <div className="mt-4 space-y-2">
                                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                                    <span className="mr-2">🔢</span>
                                    Minimal 8 karakter
                                </div>
                                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                                    <span className="mr-2">🔤</span>
                                    Kombinasi huruf besar dan kecil
                                </div>
                                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                                    <span className="mr-2">🔑</span>
                                    Sertakan angka dan simbol
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 text-center">
                            <Link
                                href={route('login')}
                                className="text-sm font-medium text-red-600 hover:text-red-500"
                            >
                                ← Kembali ke halaman masuk
                            </Link>
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