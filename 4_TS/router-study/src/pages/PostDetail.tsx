import { useLocation, useNavigate, useParams } from "react-router-dom";
import type { Post } from "../types/post";

interface PostParams {
    id: string;
}

interface LocationState {
    post?: Post;
}

export default function PostDetail() {
    const { id } = useParams<PostParams>();
    const location = useLocation();
    const navigate = useNavigate();
    const state = location.state as LocationState;
    const { post } = state;

    return (
        <div>
            <h1>포스트 상세 페이지입니다.</h1>
            <button onClick={() => navigate(-1)}>뒤로가기</button>
            <article>
                <h2>{post?.title}</h2>
            </article>
        </div>
    )
}