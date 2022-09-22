import React from "react";
import styles from "./Post.module.css"

export const Post = React.memo((props: PostType) => {
    return (
        <div>
            <img
                src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"
                alt="avatar"
                className={styles.avatar}/>
            <span>{props.message}</span>
            <div>{props.likesCount === 0 ? "Be first to like this" : `${props.likesCount} liked this`}</div>
        </div>
    )
})

//TYPES

type PostType = {
    message: string
    likesCount: number
}