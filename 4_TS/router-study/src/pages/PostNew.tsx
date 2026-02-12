import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { NewPost } from "../types/post";

export default function PostNew() {
    const navigate = useNavigate();
    const [title, setTitle] = useState<NewPost>({
        title: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        navigate('/', { replace: true })
    }

    return (
        <div>
            <h1>글쓰기 화면입니다.</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={title} onChange={handleChange} />
                <button type="submit">제출</button>
            </form>
        </div>
    )
}