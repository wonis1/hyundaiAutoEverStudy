import { useState, useEffect } from "react";

export default function WithInterval() {

    useEffect(() => {
        setInterval(() => {
            console.log("tiktok!!");
        }, 1000)
    }, [])

    return (
        <>
            <p>WithInterval 컴포넌트</p>
        </>
    )
}