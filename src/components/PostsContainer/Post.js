import React from 'react';
const Post = ({post}) => {
    const {id, title} = post;
    return (
        <div>
            <div> id:{id}</div>
            <div> title:{title}</div>
            <button onClick={()=>}>  </button>
        </div>
    );
};

export Post;