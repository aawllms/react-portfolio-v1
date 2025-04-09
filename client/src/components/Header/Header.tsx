import Nav from "../nav/Nav";

function Header() {
  
  return (
    <>
      <header
        className="d-flex justify-content-between align-items-center"
        style={{
          // backgroundImage: "url(./FullSizeRender.jpeg)",
          backgroundColor: "#113578",
          color: "white",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <h1 className="m-4" style={{margin: 0, fontFamily: "Roberto, sans-serif", fontSize: "3.5rem"}}>
          <a className="navbar-brand">Aaron Williams</a>
        </h1>
        <Nav />
      </header>
    </>
  );
}

export default Header;
