import {axiosService} from "./axiosService";
import {urls} from "../constans/urls";

const postService = {
    geByUserId :(userId)=> axiosService.get(urls.posts.base,{params:{userId}})
}