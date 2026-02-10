import { NavLink } from "react-router-dom";

const NotFoundPages = () => {

    return(
    <div className="flex flex-col items-center justify-center min-h-screen px-5 font-sans">
        <h1 className="text-9xl font-bold text-blue-600 m-0 leading-none">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mt-5 mb-2">Halaman Tidak Ditemukan</h2>
        <p className="text-base text-gray-500 mb-8 text-center max-w-md">Maaf, halaman yang Anda cari tidak ada atau telah dipindahkan.</p>
        <NavLink to='/' className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">Kembali ke Beranda </NavLink>
    </div>
    )
}

export default NotFoundPages