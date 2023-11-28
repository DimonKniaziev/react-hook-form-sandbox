import React, {useState, useEffect} from 'react';
import { object, string, number, date, InferType, mixed } from 'yup';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import ReactSelect from 'react-select';
import { IOption } from '../../interfaces';
import './yup-form.scss';

const options: IOption[] = [
    {value: 'germany', label: 'Germany'},
    {value: 'england', label: 'England'},
    {value: 'usa', label: 'USA'},
  ]

let fieldsSchema = object({
    name: string().required('Name is required').min(3, 'must be at least 3 characters long'),    
    email: string().email('Please, Enter Valid Email').required('Email is Required'),
    country: mixed().oneOf(['usa', 'england', 'germany']).required('Country is required'),
});
interface IFields extends InferType<typeof fieldsSchema>{};

const YUPForm: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: {errors},
        reset,
        setValue,
        control
      } = useForm<IFields>({
        mode: 'onChange',
        resolver: yupResolver(fieldsSchema)
    });

    const getValue = (value: any) => {
        return value ? options.find((option) => option.value === value) : ''
    }
    
    const onSubmit: SubmitHandler<IFields> = (data) => {
    console.log(data);
    reset();
    }

    return (
    <div className="shipping-form-container">
        <form onSubmit={handleSubmit(onSubmit)} className='shipping-form'>
            <div className='form-field-container'>
                <input
                {...register('name')}
                placeholder='Name'
                />
                {errors.name && <div className='error-message'>{errors.name.message}</div>}
            </div>
            
            <div className='form-field-container'>
                <input
                {...register('email')}
                placeholder='Email'
                />
                {errors.email && <div className='error-message'>{errors.email.message}</div>}
            </div>

            <Controller
                control={control}
                name='country'
                render={({field: {onChange, value}, fieldState: {error}}) => (
                    <div className='form-field-container'>
                        <ReactSelect
                            classNamePrefix='custom-select'
                            placeholder='Country'
                            options={options}
                            value={getValue(value)}
                            onChange={(newValue) => onChange((newValue as IOption).value)}
                        />
                        {error && <div className='error-message'>{error.message}</div>}             
                    </div>
                )}
            />

            <div className='button-container'>
                <button type='submit'>Submit</button>
            </div>        
        </form>
    </div>
    );
}

export default YUPForm;