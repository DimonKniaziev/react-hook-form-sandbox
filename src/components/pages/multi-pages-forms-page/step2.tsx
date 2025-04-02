import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IAdress } from "../../../interfaces";
import { useFormStore } from "../../../store";
import { useNavigate } from "react-router-dom";

export const Step2: React.FC = () => {
    const { setAdress } = useFormStore();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<IAdress>({
        mode: 'onChange'
    });
        
    const onSubmit: SubmitHandler<IAdress> = (data) => {
        console.log(data);
        setAdress(data.city, data.street, data.houseNumber);
        navigate('/multi-page-form/results')
    }
    
    return (
        <div className="shipping-form-container">
            <h1>Multi-pages form - Step 2</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='shipping-form'>
                <div className='form-field-container'>
                <input
                    {...register('city', {
                        required: 'City is required',
                    })}
                    placeholder='City'
                />
                {errors.city && <div className='error-message'>{errors.city.message}</div>}
                </div>

                <div className='form-field-container'>
                <input
                    {...register('street', {
                        required: 'Street is required',
                    })}
                    placeholder='Street'
                />
                {errors.street && <div className='error-message'>{errors.street.message}</div>}
                </div>

                <div className='form-field-container'>
                <input
                    {...register('houseNumber', {
                        required: 'Street is required',
                    })}
                    placeholder='House Number'
                    type="number"
                />
                {errors.houseNumber && <div className='error-message'>{errors.houseNumber.message}</div>}
                </div>

        
                <div className='button-container'>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
    );
}