import React from "react";
import styles from "./Header.module.css"

export const Header = React.memo(() => {
    return (
        <div className={styles.header}>
            Header logo
        </div>
    )
})