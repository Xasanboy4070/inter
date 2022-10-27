import "./navbar.css";
import interLogo from "./../../images/inter-logo.jpg";
function Navbar() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <img src={interLogo} alt="" />
          </li>
        </ul>
        <ul>
          <li>
            <h1>Xasanboy Orifjonov</h1>
          </li>
          <li>
            <span>X</span>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
