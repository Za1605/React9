import {axiosServise} from "./axiosService";
import {urls} from "../constants/urls";


const albumServise = {
    getAll:()=> axiosServise.get(urls.albums)
}

export {
    albumServise
}