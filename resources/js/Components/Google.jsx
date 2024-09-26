import { Link } from "@inertiajs/react";

export default function Google({ }) {
    return (
        <section className="flex flex-col md:flex-row gap-6 w-full xl:w-[1200px] xl:mx-auto py-12 px-6 ">
            <img 
                src="/images/image.png" 
                alt="contoh_gambar" 
                className="w-full md:w-[120rem] h-auto object-cover rounded-sm"
            />
            <div className="flex-auto">
                <h3 className="font-bold text-xl mb-4">Google Adwords</h3>
                <p className="mb-4 text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <Link href="#" className="font-semibold flex justify-end">
                    Read More
                </Link>
            </div>
        </section>
    );
}
