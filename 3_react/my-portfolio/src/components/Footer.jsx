function Footer({ email, github }) {
  return (
    <footer className="footer">
      <p>Email: <a href={`mailto:${email}`}>{email}</a></p>
      <p>GitHub: <a href={`https://${github}`} target="_blank" rel="noopener noreferrer">{github}</a></p>
    </footer>
  );
}

export default Footer;