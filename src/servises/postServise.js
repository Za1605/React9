import {axiosServise} from "./axiosServise";
import {urls} from "../constants/urls";



const postServise = {
    getAll:() => axiosServise.get(urls.posts),
    create: (post) => axiosServise.post(urls.posts, post)

}

export {
    postServise
}