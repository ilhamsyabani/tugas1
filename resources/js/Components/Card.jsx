export default function Card({ children }) {
    return (
        <div className="border-4 border-gray-600 shadow-sm rounded-sm py-16 px-6 w-full xl:w-[24%]">
            <h3 className="font-bold text-xl mb-2 text-center ">{children}</h3>
        </div>
    );
}