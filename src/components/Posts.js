import React, {useEffect, useState} from 'react';



const Posts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https:jsonplaceholder.typicode.com/posts').then(value => value.json()).then(value => setPosts(value))}, []);
    return (
        <div>
            {posts.map(post =><Post key = {post.id} post={post}/>)}
        </div>
    );
};

export Posts;

//з jsonplaceholder отримати всі пости в компоненту Posts.js
//відобразити кожного інформацію (id,title) з кожного поста (компонента Post)
//Зробити кнопку вибора поста, при натисканні на яку в Posts.js ви покажете детальну інфомацію про пост(всю інфу)
