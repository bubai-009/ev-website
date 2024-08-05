import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <dib className="nav-logo">EV-olution</dib>
      <ul className="nav-menu">
        <li>Home</li>
        <li>Explore</li>
        <li>About</li>
        <li className="nav-contact">Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
