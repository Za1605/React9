import {jsonServise} from "./jsonServise";
import {urls} from "../constants/urls";

const postServise = {
    getAll:() => jsonServise.get(urls.posts.base),
    getDyId:(id) => jsonServise.get(urls.posts.byId(id))}

export {
    postServise
}