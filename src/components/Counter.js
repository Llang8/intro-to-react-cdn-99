import { useState } from 'react';

export default function Counter(props) {
    let [count, setCount] = useState((props.defaultValue) ? props.defaultValue : 0)

    function incrementCount(incrementor) {
      setCount(count + incrementor)
    }

    return (
        <div className="counter">
            <p>{ count }</p>
            <button onClick={() => incrementCount(1)}>Increment</button>
            <button onClick={() => incrementCount(2)}>Increment By 2</button>
            <button onClick={() => incrementCount(-1)}>Decrement</button>
        </div>
    )
}