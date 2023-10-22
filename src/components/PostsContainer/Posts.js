import React, {useEffect, useState} from 'react';
import {postServise} from "../../Servises/postServise";
import {post} from "axios";
import Post from "./Post";

const Posts = () => {
    const [posts,setPosts] = useState([])
    useEffect(() => {
        postServise.getAll().then(({data}) => setPosts(data))
    },[])
    return (
        <div>
            {posts.map(post=> <Post key = {post.id} post = {post} getPostId = {getPostId} />)}
        </div>
    );
};

export  {Posts};