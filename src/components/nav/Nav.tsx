function Nav() {
  return (
    <>
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
              <a
                className="nav-link active text-light"
                aria-current="page"
                href="/"
              >
                About Me
              </a>
              <a className="nav-link active text-light" href="/portfolio">
                Portfolio
              </a>
              <a className="nav-link active text-light" href="/contact">
                Contact
              </a>
              <a
                className="nav-link active text-light"
                href="https://drive.google.com/file/d/1SxRqoXPQHGFq0HD2kemqU-X3eGQb8CJ3/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
