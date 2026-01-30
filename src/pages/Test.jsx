import {useState} from 'react';
import Button from '../Components/Elements/Button/Index.jsx';

const Test = () => {

    const [count, setCount] = useState([]);
    const hitung = () => {
        setCount([...count, 1]);
    }



    return (
        <div>
            <h1></h1>
            <h1>Count: {count}</h1>
            <Button onClick={() => hitung()}>Increment</Button>
        </div>
    )
}

export default Test;