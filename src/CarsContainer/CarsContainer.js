import {carsServise} from "../services/carsServise";
import {useEffect, useState} from "react";
import {CarForm} from "./CarForm";
import {Cars} from "./Cars";

const CarsContainer = () => {
    const [cars, setCars] = useState ([])
    const [trigger, setTrigger] = useState (true)
    const [carForUpdate, setCarForUpdate] = useState (null);

    useEffect(() => {

    }, []); (() => {
        carService.getAll().then(({data}) => setCars(data))
    }, [trigger])

    return (
        <div>
            <CarForm setTrigger={setTrigger} carForUpdate={carForUpdate}/>
            <hr/>
            <Cars cars={cars} setCarForUpdate={setCarForUpdate}/>
        </div>
    );
};

export default CarsContainer;