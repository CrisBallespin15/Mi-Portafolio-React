function Footer() {
  return (
    <footer className="footer">
      <p>¿Tenés un proyecto, una oferta o solo querés hablar? Escribime.</p>
      <a href="mailto:ballespincristian11@gmail.com">ballespincristian11@gmail.com</a>
      <a href="https://github.com/CrisBallespin15" target="_blank" rel="noreferrer">GitHub</a>
      <p>© {new Date().getFullYear()} Cristian Ballespin</p>
    </footer>
  );
}

export default Footer;