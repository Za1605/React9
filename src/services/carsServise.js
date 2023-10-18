import {axiosServise} from "./axiosServise";
import {urls} from "../constants/urls";

const carsServise = {
getAll:()=> axiosServise.get(urls.cars.base),
create:(data)=>axiosServise.post(urls.cars.base, data),
updateById:(id, data) => axiosServise.put(urls.cars.byId(id),data ),
deleteById :(id)=> axiosServise.delete(urls.cars.byId(id))
}

export default
    carsServise
