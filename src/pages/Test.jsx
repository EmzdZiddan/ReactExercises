import { useState } from 'react'

const Test = () => {
    const [value, setValue] = useState([])

    const handle = (id) => {
        if(id === value.id){
            setValue(value + 0)
        }else{
            setValue(console.log([...value, {nomor:1}]))
        }
    }

    return (
        <div>
            <h1>NILAI {value}</h1>
            <button onClick={handle}>KLIK SAYA</button>
        </div>
    )
}

export default Test;