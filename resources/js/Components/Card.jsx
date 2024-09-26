export default function Card({ children }) {
    return (
        <div className="border-4 border-gray-600 shadow-md rounded-lg py-6 px-4 w-full xl:w-[24%] transition-transform transform hover:scale-105 hover:shadow-lg">
        <h3 className="font-bold text-xl mb-2 text-center text-gray-800">{children}</h3>
        <p className="text-gray-600 text-center">Deskripsi konten di sini</p>
        <div className="mt-4 flex justify-center">
            <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200">
                Action Button
            </button>
        </div>
    </div>
    );
}