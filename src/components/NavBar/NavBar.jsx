import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import { FaHome, FaUser, FaShoppingBag, FaEnvelope, FaUsers } from 'react-icons/fa'; 

function NavBar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>Lauhy</div>
            <ul className={styles.links}>
                <li><Link to="/"><FaHome /> </Link></li>
                <li><Link to="/sobre"><FaUser /> </Link></li>
                <li><Link to="/produtos"><FaShoppingBag /> </Link></li>
                <li><Link to="/contato"><FaEnvelope /> </Link></li>
                <li><Link to="/extra"><FaUsers /> </Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;
