import Nav from "../nav/Nav";

function Header() {
  
  return (
    <>
      <header
        className="d-flex justify-content-between align-items-center"
        style={{
          backgroundImage: "url(./FullSizeRender.jpeg)",
          color: "white",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <h1 className="m-4">
          <a className="navbar-brand">Aaron Williams</a>
        </h1>
        <Nav />
      </header>
    </>
  );
}

export default Header;
