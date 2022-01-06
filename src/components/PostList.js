import React from 'react';
import Post from "./Post";

function PostList({ posts }) {
    return (
    <div>
        {posts.map(post => (
            <Post key={post.id} {...post} /> //object spread operator
        ))}
    </div>
    )
}

export default PostList;