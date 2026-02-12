import { useState, useEffect } from "react";

function TitleCounter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `카운트: ${count}`;
        console.log('제목 변경됨');
    }, [count]);

    return (
        <div>
            <h2>카운트: ${count}</h2>
            <button onClick={() => setCount(count +1)}>버튼</button>
        </div>
    )
}

export default TitleCounter;