import {axiosServise} from "./axiosServise";
import {urls} from "../constants/urls";


const postSercice = {
    getAll:()=>axiosServise.get(urls.posts.byId(id))
}

export {
    postSercice
}