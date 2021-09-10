import { Link, useLocation } from "react-router-dom";

import styles from "../Styles/Nav.module.scss";
import "../Styles/App.scss";

const logoImg =
  "https://firebasestorage.googleapis.com/v0/b/midwestern-api.appspot.com/o/imgs_mdw%2FLogo.png?alt=media&token=a91b07ea-9f15-49c8-8665-77ac070aa865";
export default function Nav() {
  const location = useLocation();

  return (
    <div className={styles.header}>
      <img src={logoImg} alt='Midwestern Interactive Logo' />
      <Link to={location.pathname === "/" ? "/contact" : ""}>
        <h3 className='text_button'>
          {location.pathname === "/contact" ? "Home" : "contact"}
        </h3>
      </Link>
    </div>
  );
}
