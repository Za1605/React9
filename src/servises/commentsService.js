import {axiosServise} from "./axiosServise";
import {urls} from "../constants/urls";


const commentsService = {
    getAll:()=> axiosServise.get(urls.comments)

}

export {
    commentsService
}