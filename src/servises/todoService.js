import {axiosServise} from "./axiosServise";
import {urls} from "../constants/urls";


const todoService = {
    getAll:() => axiosServise.get(urls.todos)

}

export {
    todoService
}