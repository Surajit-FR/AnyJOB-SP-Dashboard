const Footer = (): JSX.Element => {
    const currentYear = new Date().getFullYear();
    const startYear = 2024;

    return (
        <footer className="footer">
            © {startYear === currentYear ? currentYear : `${startYear} - ${currentYear}`} <b>AnyJob</b>
            <span className="d-none d-sm-inline-block"> - Developed by <b>Ariprodesigns</b></span>
        </footer>
    );
};

export default Footer;