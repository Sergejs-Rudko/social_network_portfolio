import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = React.memo(() => {
    return (
        <div>
            <div>Profile picture + description</div>
            <MyPosts/>
        </div>
    )
})