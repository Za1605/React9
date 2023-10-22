import axios from "axios";

import {baseUrlJson} from "../constants/urls";

const jsonServise = axios.create({baseURL: baseUrlJson});

export {
    jsonServise
}