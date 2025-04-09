import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link
              className="nav-link active text-light"
              aria-current="page"
              to="/"
            >
              About Me
            </Link>
            <Link className="nav-link active text-light" to="/portfolio">
              Portfolio
            </Link>
            {/* <Link className="nav-link active text-light" to="/contact">
              Contact
            </Link> */}
            <a
              className="nav-link active text-light"
              href="https://drive.google.com/file/d/16Jkbd2tAsDQdTKzgDKKcn_SqR_oMGWiH/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
            <a
              href="https://github.com/aawllms"
              className="nav-link active text-light"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub style={{ fontSize: "30px" }} />
            </a>
            <a
              href="https://linkedin.com/in/aaron-d-williams8"
              className="nav-link active text-light"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin style={{ fontSize: "30px" }} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
