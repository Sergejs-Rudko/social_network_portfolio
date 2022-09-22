import React from "react";
import styles from "./Dialogs.module.css"
import {DialogItems} from "./DialogItems/DialogItems";
import {Messages} from "./Messages/Messages";

export const Dialogs = React.memo(() => {
    return (
        <div className={styles.dialogs}>
            <DialogItems/>
            <Messages/>
        </div>
    )
})