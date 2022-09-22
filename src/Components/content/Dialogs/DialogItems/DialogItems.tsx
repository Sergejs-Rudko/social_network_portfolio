import React from "react";
import {DialogItem, UserType} from "./DialogItem/DialogItem";

export const DialogItems = React.memo(() => {
    const users: UserType[] = [
        {name: "Zhora", id: 1},
        {name: "Proxa", id: 2},
        {name: "Bastin", id: 3}
    ] as UserType[]

    return (
        <div>
            {
                users.map((u) => <DialogItem id={u.id} name={u.name} key={u.id}/>)
            }
        </div>
    )
})

