import React, { FormEventHandler } from 'react';
import { Head, useForm } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';



export default function ConfirmPassword() {
    const { data, setData, post, processing, errors, reset } = useForm({
        password: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('password.confirm'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <>
            <Head title="Konfirmasi Password - TechStore" />

            <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-50 dark:bg-gray-900">
                {/* Header */}
                <div className="w-full sm:max-w-md px-6 py-4 mb-6">
                    <div className="flex items-center justify-center">
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                            🛒 <span className="text-red-600">TechStore</span>
                        </h1>
                    </div>
                </div>

                {/* Confirm Password Form */}
                <Card className="w-full sm:max-w-md shadow-lg">
                    <CardHeader className="text-center">
                        <CardTitle className="text-2xl font-bold">🔐 Konfirmasi Password</CardTitle>
                        <CardDescription>
                            Untuk keamanan, silakan konfirmasi password Anda sebelum melanjutkan.
                        </CardDescription>
                    </CardHeader>

                    <CardContent>
                        <div className="mb-4 p-4 bg-yellow-50 border border-yellow-200 rounded-md dark:bg-yellow-900/20 dark:border-yellow-800">
                            <div className="flex items-start">
                                <div className="text-yellow-600 mr-3">⚠️</div>
                                <p className="text-sm text-yellow-700 dark:text-yellow-200">
                                    Ini adalah area sensitif yang memerlukan konfirmasi password untuk melindungi akun Anda.
                                </p>
                            </div>
                        </div>

                        <form onSubmit={submit} className="space-y-4">
                            <div>
                                <Label htmlFor="password">Password Anda</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    className="mt-1 block w-full"
                                    onChange={(e) => setData('password', e.target.value)}
                                    placeholder="Masukkan password saat ini"
                                    required
                                    autoFocus
                                />
                                {errors.password && (
                                    <p className="mt-2 text-sm text-red-600">{errors.password}</p>
                                )}
                            </div>

                            <Button 
                                type="submit" 
                                className="w-full bg-red-600 hover:bg-red-700"
                                disabled={processing}
                            >
                                {processing ? '⏳ Memverifikasi...' : '✅ Konfirmasi Password'}
                            </Button>
                        </form>

                        <div className="mt-6">
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-300" />
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-2 bg-white text-gray-500 dark:bg-gray-800 dark:text-gray-400">
                                        Keamanan akun
                                    </span>
                                </div>
                            </div>

                            <div className="mt-4 space-y-2">
                                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                                    <span className="mr-2">🔒</span>
                                    Password tidak akan disimpan
                                </div>
                                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                                    <span className="mr-2">⏰</span>
                                    Sesi keamanan berlaku sementara
                                </div>
                                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                                    <span className="mr-2">🛡️</span>
                                    Melindungi data sensitif Anda
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 text-center">
                            <form method="POST" action={route('logout')} className="inline">
                                <button
                                    type="submit"
                                    className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white underline"
                                >
                                    Keluar dari akun
                                </button>
                            </form>
                        </div>
                    </CardContent>
                </Card>

                <div className="mt-6 text-center">
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                        🔐 Area ini dilindungi dengan konfirmasi password untuk keamanan maksimal
                    </p>
                </div>
            </div>
        </>
    );
}