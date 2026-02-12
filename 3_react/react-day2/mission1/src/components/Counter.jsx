import  { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    function increase() {
        setCount(count + 1);
    }
    function decrease() {
        setCount(count - 1);
    }
    function reset() {
        setCount(0);
    }

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increase}>증가</button>
            <button onClick={decrease}>감소</button>
            <button onClick={reset}>리셋</button>

            {count > 0 ? `양수입니다.` : ''}
            {count < 0 ? `음수입니다.` : ''}
            {count === 0 ? `0입니다.` : ''}
        </div>
    )
}

export default Counter;