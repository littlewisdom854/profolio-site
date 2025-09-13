export default function Navbar() {
  return (
    <nav className="navbar navbar-dark sticky-top" style={{ backgroundColor: "#93684E" }}>
      <div className="container-fluid">
        {/* Navbar name */}
        <a className="navbar-brand mx-auto text-white" href="#">My Name</a>

        {/* Right up corner */}
        <div className="d-none d-md-flex">
          <a className="nav-link text-white" href="#projects">Projects</a>
          <a className="nav-link text-white" href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}
