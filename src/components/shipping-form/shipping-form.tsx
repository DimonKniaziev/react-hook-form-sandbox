import React from 'react';
import './shipping-form.scss'
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import ReactSelect from 'react-select';
import { IOption, IShippingFields } from '../../interfaces';

const options: IOption[] = [
  {value: 'germany', label: 'Germany'},
  {value: 'england', label: 'England'},
  {value: 'usa', label: 'USA'},
]

const ShippingForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
    reset,
    setValue,
    control
  } = useForm<IShippingFields>({
    mode: 'onChange'
  });

  const getValue = (value: string) => {
    return value ? options.find((option) => option.value === value) : ''
  }

  const onSubmit: SubmitHandler<IShippingFields> = (data) => {
    console.log(data);
    reset();
  }

  return (
    <div className="shipping-form-container">
       <form onSubmit={handleSubmit(onSubmit)} className='shipping-form'>
        <div className='form-field-container'>
          <input
            {...register('name', {
                required: 'Name is required',
            })}
            placeholder='Name'
          />
          {errors.name && <div className='error-message'>{errors.name.message}</div>}
        </div>
        
        <div className='form-field-container'>
          <input
            {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  message: 'Email is not valid'
                }
            })}
            placeholder='Email'
          />
          {errors.email && <div className='error-message'>{errors.email.message}</div>}
        </div>

        <Controller
            control={control}
            name='adress.country'
            rules={{
                required: 'Country is required'
            }}
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

       <div className='button-container'>
          <button onClick={() => {
            setValue('name', 'ALBERTO');
            setValue('email', 'ALBERTO@GMAIL.COM');
            }}>Fill Data</button>
        </div>
    </div>
  );
}

export default ShippingForm;