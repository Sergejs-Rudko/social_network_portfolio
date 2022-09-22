import React from "react";
import styles from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

export const Navbar = React.memo(() => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.wrapper}>
                <NavLink to={`profile`} className={(navData) => navData.isActive ? `${styles.active}` : `${styles.item}`}>Profile</NavLink>
                <NavLink to={`dialogs`} className={(navData) => navData.isActive ? `${styles.active}` : `${styles.item}`}>Messages</NavLink>
                <NavLink to={`#`} className={`${styles.item}`}>News</NavLink>
                <NavLink to={`#`} className={`${styles.item}`}>Music</NavLink>
                <NavLink to={`#`} className={`${styles.item}`}>Settings</NavLink>
            </div>
        </nav>
    )
})