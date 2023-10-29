import React from 'react';
import {useForm} from "react-hook-form";
import {postServise} from "../../servises/postServise";

const PostForm = ({setPosts}) => {
    const {reset,handleSubmit, register} = useForm();
    const save = async (post) =>{
        const {data} = await postServise.create(post);
    setPosts(prev => [...prev,data])
    }
    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'title'}{...register("title")}/>
            <input type= "text" placeholder={"body"}{...register("bode")}/>
            <input type="text" placeholder={"bodt"} {...register("adress.house")}/>
            <button>save</button>
        </form>
    );
};

export default PostForm;