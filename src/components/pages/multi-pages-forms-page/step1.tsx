import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IName } from "../../../interfaces";
import { useFormStore } from "../../../store";
import { useNavigate } from "react-router-dom";

export const Step1: React.FC = () => {
    const { setName } = useFormStore();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<IName>({
        mode: 'onChange'
    });
        
    const onSubmit: SubmitHandler<IName> = (data) => {
        console.log(data);
        setName(data.firstName, data.lastName);
        navigate('/multi-page-form/step2')
    }
    
    return (
        <div className="shipping-form-container">
            <h1>Multi-pages form - Step 1</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='shipping-form'>
                <div className='form-field-container'>
                <input
                    {...register('firstName', {
                        required: 'First name is required',
                    })}
                    placeholder='First Name'
                />
                {errors.firstName && <div className='error-message'>{errors.firstName.message}</div>}
                </div>

                <div className='form-field-container'>
                <input
                    {...register('lastName', {
                        required: 'Last name is required',
                    })}
                    placeholder='Last Name'
                />
                {errors.lastName && <div className='error-message'>{errors.lastName.message}</div>}
                </div>
        
                <div className='button-container'>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
    );
}
