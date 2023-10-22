import axios from "axios";

import {baseUrlSpaseX} from "../constannts/url";

const spaseXServise = axios.create({baseURL: baseUrlSpaseX});

export {
    spaseXServise
}