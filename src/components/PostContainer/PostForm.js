import React from 'react';
import {useForm} from "react-hook-form";

const PostForm = () => {
    const {reset,handleSubmit, register} = useForm();
    const save = (post) =>{
        console.log(post);
    }
    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'title'}{...register("title")}/>
            <input type= "text" placeholder={"body"}{...register("bode")}/>
            <button>save</button>
        </form>
    );
};

export default PostForm;