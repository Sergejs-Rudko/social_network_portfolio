import React from "react";
import {NavLink} from "react-router-dom";

export const DialogItem = React.memo((props: UserType) => {
    return (
        <div>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
})

//TYPES

export type UserType = {
    name: string
    id: number
}

