import { useState, useEffect } from "react";

export default function WithState() {
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)


    useEffect(() => {
        console.log("count1만 변경");
    }, [count])

    const increment = () => setCount(count + 1)
    const increment2 = () => setCount2(count2 + 1)
    return (
        <>
            <p>{count}</p>
            <button onClick={increment}> BUTTON </button>
            <p>{count2}</p>
            <button onClick={increment2}> BUTTON 2</button>
        </>
    )
}