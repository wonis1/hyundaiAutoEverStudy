import { useState, useEffect } from "react";

export default function Once() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("마운트 될 때");
    }, [])
    const increment = () => setCount(count + 1);

    return (
        <>
            <p>{count}</p>
            <button onClick={increment}> BUTTON </button>
        </>
    )
}