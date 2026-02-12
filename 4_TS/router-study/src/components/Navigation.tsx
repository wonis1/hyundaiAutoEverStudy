import { Link } from "react-router-dom";

export default function Navigation() {
    return (
        <nav>
            <div>
                <Link to="/">Home</Link>
                <Link to="/post/new">new write</Link>
            </div>
        </nav>
    )
}