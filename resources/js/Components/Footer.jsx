import { Link } from "@inertiajs/react";

export default function Footer() {
    return (
        <footer className="w-full bg-gray-800 text-white py-4">
            <div className="flex flex-col items-center">
                <p className="mb-2">© 2024 Perusahaan Anda. Semua hak dilindungi.</p>
                <Link href="#" className="text-gray-300 hover:underline">
                    Kebijakan Privasi
                </Link>
                <Link href="#" className="text-gray-300 hover:underline">
                    Syarat dan Ketentuan
                </Link>
            </div>
        </footer>
    );
}
