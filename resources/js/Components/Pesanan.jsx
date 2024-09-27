import { Link } from "@inertiajs/react";

export default function Pesanan() {
    return (
        <section className="flex flex-col md:flex-row gap-6 w-full xl:w-[1200px] xl:mx-auto py-12 px-6 shadow-sm rounded-sm">
            <div className="flex-auto">
                <h3 className="font-bold text-xl mb-4">Pemesanan</h3>
                <p className="mb-4">
                    Pesan produk kami dengan mudah dan cepat. Klik tombol di bawah untuk memulai pemesanan Anda!
                </p>
                <Link href="/order" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 flex justify-center">
                    Pesan Sekarang
                </Link>
            </div>
        </section>
    );
}
