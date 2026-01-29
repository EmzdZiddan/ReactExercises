import { useState,useEffect } from "react";


const Test = () => {
  const [angka, setAngka] = useState(0);
  const [status, setStatus] = useState('');

useEffect(() => {
    if (angka % 2 === 0) {
        setStatus('Genap');
    } else {
        setStatus('Ganjil');
    }
})

  return (
    <div>
        <h1>{status}</h1>
      <h1>Angka: {angka}</h1>
      <button onClick={() => setAngka(angka + 1)}>Tambah</button>
    </div>
  );
};


export default Test;