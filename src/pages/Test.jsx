import { useState, useEffect } from "react";

const Test = () => {
    const [pacarSaya, setPacarSaya] = useState(0);
    const [status, setStatus] = useState('');
    
    useEffect(() => {
        if (pacarSaya >= 1 ) {
            setStatus('ada');
        } else {
            setStatus('tidak ada');
        }
    }, [pacarSaya]);


  return (
    <div className="bg-gray-800 flex flex-col items-center justify-center gap-4 h-screen">
        <h1>{status}</h1>

        <h1 className="text-white text-6xl font-bold">{pacarSaya}</h1>
        
        <button
            onClick={() => setPacarSaya(pacarSaya + 1)}
            className="bg-green-600 text-lg text-white font-bold rounded-xl px-6 py-3 hover:bg-green-700"
            >Tambah Pacar
        </button>

        <button
            onClick={() => setPacarSaya(pacarSaya - 1)}
            className="bg-red-600 text-lg text-white font-bold rounded-xl px-6 py-3 hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >Kurang Pacar
        </button>

    </div>
  );
};

export default Test;