function About(props) {
    return (
        <section className="about">
            <h2>About Me</h2>
            <p>{props.description}</p>
        </section>
    )
}

export default About;