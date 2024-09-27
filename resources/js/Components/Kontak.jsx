import { useState } from "react";
import { useForm } from "@inertiajs/react";

export default function Kontak() {
    const { data, setData, post, errors } = useForm({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/contact', data); // Ganti dengan URL yang sesuai
    };

    return (
        <section className="flex flex-col w-full xl:w-[1200px] xl:mx-auto py-12 px-6 shadow-sm rounded-sm">
            <h3 className="font-bold text-xl mb-4">Kontak Kami</h3>
            <p className="mb-4">
                Kami siap membantu Anda! Silakan isi formulir di bawah ini untuk mengirim pesan.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input 
                    type="text" 
                    placeholder="Nama" 
                    value={data.name} 
                    onChange={(e) => setData('name', e.target.value)}
                    className="border p-2 rounded"
                    required 
                />
                {errors.name && <div className="text-red-500">{errors.name}</div>}
                
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={data.email} 
                    onChange={(e) => setData('email', e.target.value)}
                    className="border p-2 rounded"
                    required 
                />
                {errors.email && <div className="text-red-500">{errors.email}</div>}
                
                <textarea 
                    placeholder="Pesan" 
                    value={data.message} 
                    onChange={(e) => setData('message', e.target.value)}
                    className="border p-2 rounded"
                    required 
                />
                {errors.message && <div className="text-red-500">{errors.message}</div>}

                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Kirim Pesan
                </button>
            </form>
        </section>
    );
}
