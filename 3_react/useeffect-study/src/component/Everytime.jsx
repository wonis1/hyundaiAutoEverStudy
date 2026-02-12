import { useState, useEffect } from "react";

export default function Everytime() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("랜더링 될 때마다");
    })
    const increment = () => setCount(count + 1);



    return (
        <>
            <p>{count}</p>
            <button onClick={increment}> BUTTON </button>
        </>
    )
}