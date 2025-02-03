import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  interface Style {
    footerStyle: React.CSSProperties;
    divStyle: React.CSSProperties;
  }
  const styles: Style = {
    footerStyle: {
      // position: "absolute",
      bottom: 0,
      width: "100%",
    },
    divStyle: {
      background: "black",
      color: "white",
    },
  };
  return (
    <>
      <footer style={styles.footerStyle}>
        <div className="card text-center" style={styles.divStyle}>
          <div className="card-body">
            <p className="card-text">Always be Coding!</p>
            <a
              href="https://github.com/aawllms"
              className="btn btn-outline-secondary"
              target="_blank"
            >
              <FaGithub style={{ fontSize: "30px" }} />
            </a>
            <a
              href="https://linkedin.com/in/aaron-d-williams8"
              className="btn btn-outline-secondary"
              target="_blank"
            >
              <FaLinkedin style={{ fontSize: "30px" }} />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
