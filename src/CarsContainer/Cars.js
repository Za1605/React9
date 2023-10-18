import React from 'react';

import Car from "./Car";

const Cars = ({cars}) => {
    return (
        <div>
            {cars.map(car =><Car key = {car.id} car = {car} etCarForUpdate={setCarForUpdate}/>)}
        </div>
    );
};

export {Cars};