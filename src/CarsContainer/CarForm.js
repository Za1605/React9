import React from 'react';
import {useForm} from "react-hook-form";
import {carsServise} from "../services/carsServise";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../validators/carValidator";

const CarForm = ({setTrigger,carForUpdate}) => {

    const {reset, register, handleSubmit,formState:{isValid,errors} ,setValue} = useForm
    ({mode:'all',
        resolver:joiResolver(carValidator)
    });


    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand, {shouldValidate: true})
            setValue('price', carForUpdate.price, {shouldValidate: true})
            setValue('year', carForUpdate.year, {shouldValidate: true})
        }
    }, [carForUpdate])
    const save = async (car)=>{
        console.log(car);
         await carsServise.create(car);
         setTrigger(prev => !prev)
        reset()
    }
    return (
<>
{/*<form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'brand'} {...register('brand',{
                minLenght: {value: 1, message: 'min 1 character'},
                maxLenght: {value: 20, message: 'max 20 characters'}
            })}/>

            <input type="text" placeholder={'price'} {...register('price',{
                min:{ value:0, message:'min 0'},
                max: { value: 1_000_000, message:'max 1 000 000'},
                valueAsNumber:true
            })}/>
            <input type="text" placeholder={'year'} {...register('year',{
                min:{ value: 1990, message: 'min 1990'},
                max: {value: new Date().getFullYear(), message:'max current year'},
                valueAsNumber:true
            })}/>
            <button disabled={!isValid}>save</button>
            </form>*/}
    <form onSubmit={handleSubmit(save)}>
        <input type="text" placeholder={'brand'} {...register('brand')}/>
        <input type="text" placeholder={'price'} {...register('price', {valueAsNumber: true})}/>
        <input type="text" placeholder={'year'} {...register('year', {valueAsNumber: true})}/>
        <button disabled={!isValid}>save</button>
    </form>
    {errors.brand && <div>{errors.brand.message}</div>}
    {errors.price && <div>{errors.price.message}</div>}
    {errors.year && <div>{errors.year.message}</div>}
</>
    );
};

export {CarForm};