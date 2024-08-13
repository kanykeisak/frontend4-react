import React, {useState} from 'react';

const Count = () => {
    const [count, setCount] = useState(0)
    const increment = () => {
        setCount(prev => prev+1)
    }
    const decrement = () => {
        if (count > 0) setCount(prev => prev-1)
    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
        </div>
    );
};

export default Count;