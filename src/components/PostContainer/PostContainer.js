import React, {useEffect, useState} from 'react';
import PostForm from "./PostForm";
import Posts from "./Posts";
import {postServise} from "../../servises/postServise";

const PostContainer = () => {
    const [posts, setPosts] = useState([])

    useEffect(() =>{
postServise.getAll().then(({data}) => setPosts(data))
    }, [])
    return (
        <div>
            <PostForm/>
            <br/>
            <Posts posts = {posts}/>

        </div>
    );
};

export default PostContainer