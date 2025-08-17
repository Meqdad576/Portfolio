// Navbar.jsx
function Navbar() {
  return (
    <nav style={{ position: "fixed", top: 0, width: "100%", background: "#eee", padding: "10px" }}>
      <a href="#home" style={{ marginRight: "10px" }}>Home</a>
      <a href="#about" style={{ marginRight: "10px" }}>About</a>
      <a href="#projects" style={{ marginRight: "10px" }}>Projects</a>
      <a href="#contact">Contact</a>
    </nav>
  );
}

export default Navbar;
