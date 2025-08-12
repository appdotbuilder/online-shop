import React, { FormEventHandler } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface Props {
    status?: string;
    [key: string]: unknown;
}

export default function VerifyEmail({ status }: Props) {
    const { post, processing } = useForm({});

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('verification.send'));
    };

    return (
        <>
            <Head title="Verifikasi Email - TechStore" />

            <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-50 dark:bg-gray-900">
                {/* Header */}
                <div className="w-full sm:max-w-md px-6 py-4 mb-6">
                    <Link href="/" className="flex items-center justify-center">
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                            🛒 <span className="text-red-600">TechStore</span>
                        </h1>
                    </Link>
                </div>

                {/* Email Verification Card */}
                <Card className="w-full sm:max-w-md shadow-lg">
                    <CardHeader className="text-center">
                        <CardTitle className="text-2xl font-bold">📧 Verifikasi Email</CardTitle>
                        <CardDescription>
                            Sebelum melanjutkan, silakan periksa email Anda untuk link verifikasi.
                        </CardDescription>
                    </CardHeader>

                    <CardContent>
                        {status === 'verification-link-sent' && (
                            <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-md">
                                <p className="text-sm text-green-600">
                                    ✅ Link verifikasi baru telah dikirim ke alamat email yang Anda daftarkan.
                                </p>
                            </div>
                        )}

                        <div className="mb-6 space-y-4">
                            <div className="text-center">
                                <div className="text-6xl mb-4">📬</div>
                                <p className="text-gray-600 dark:text-gray-400 mb-4">
                                    Kami telah mengirim email verifikasi ke alamat yang Anda daftarkan. 
                                    Klik link dalam email tersebut untuk melanjutkan.
                                </p>
                            </div>

                            <div className="bg-blue-50 border border-blue-200 rounded-md p-4 dark:bg-blue-900/20 dark:border-blue-800">
                                <div className="flex items-start">
                                    <div className="text-blue-600 mr-3">💡</div>
                                    <div className="text-sm">
                                        <p className="font-medium text-blue-800 dark:text-blue-200 mb-1">
                                            Tips untuk menemukan email:
                                        </p>
                                        <ul className="text-blue-700 dark:text-blue-300 space-y-1">
                                            <li>• Periksa folder Spam atau Junk</li>
                                            <li>• Tunggu beberapa menit jika belum masuk</li>
                                            <li>• Pastikan alamat email sudah benar</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <form onSubmit={submit}>
                            <Button 
                                type="submit" 
                                className="w-full bg-red-600 hover:bg-red-700"
                                disabled={processing}
                            >
                                {processing ? '⏳ Mengirim ulang...' : '📧 Kirim Ulang Email Verifikasi'}
                            </Button>
                        </form>

                        <div className="mt-6 text-center space-y-2">
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Sudah diverifikasi?{' '}
                                <Link
                                    href={route('dashboard')}
                                    className="font-medium text-red-600 hover:text-red-500"
                                >
                                    Lanjut ke Dashboard
                                </Link>
                            </p>
                            
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