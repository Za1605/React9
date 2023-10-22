import {spaseXServise} from "./spaseXServise";
import {urls} from "../constannts/url";

const launchServise = {
    getAll: () => spaseXServise.get(urls.launches)
}

export {
    launchServise
}