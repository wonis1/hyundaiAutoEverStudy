function Header(props) {
    return (
        <header className="header">
            <img src={props.profileImage} alt="프로필" className="profile-image" />
            <h1>{props.name}</h1>
            <p className="title">{props.title}</p>
            <p className="intro">{props.intro}</p>
        </header>
    );
}

export default Header;