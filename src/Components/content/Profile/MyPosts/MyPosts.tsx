import React from "react";
import {Post} from "./Post/Post";

export const MyPosts = React.memo(() => {
    return (
        <div>
            <textarea></textarea>
            <button>add post</button>
            <Post message={`hey first post`} likesCount={2}/>
            <Post message={`yup`} likesCount={0}/>
        </div>
    )
})