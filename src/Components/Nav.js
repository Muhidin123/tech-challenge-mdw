import { Link, useLocation } from "react-router-dom";

import styles from "../Styles/Nav.module.scss";
import "../Styles/App.scss";

import Logo from "../assets/Logo.png";

export default function Nav() {
  const location = useLocation();

  return (
    <div className={styles.header}>
      <img src={Logo} alt='Midwestern Interactive Logo' />
      <Link to={location.pathname === "/" ? "/contact" : ""}>
        <h3 className='text_button'>
          {location.pathname === "/contact" ? "Home" : "contact"}
        </h3>
      </Link>
    </div>
  );
}
