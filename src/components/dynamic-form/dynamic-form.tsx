import React from "react";
import './dynamic-form.scss'
import { useForm, useFieldArray, Controller } from "react-hook-form";

const DynamicForm = () => {
  const { 
    control,
    register,    
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      users: [
        {
          name: "",
          age: null
        },
        {
          name: "",
          age: null
        }
      ]
    }
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "users"
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="dynamic-form-container">
      <form onSubmit={handleSubmit(onSubmit)} className="dynamic-form">
        {fields.map((item, index) => (
          <div key={item.id} className="form-item-container">
            <div className='form-field-container'>
              <input
                {...register(`users.${index}.name`, {
                  required: true,
                  maxLength: 30,
                  minLength: 3
                })}
                placeholder="Name"
              />
              {/* {errors?.users?.[index]?.name && (<div className='error-message'>{errors.users?.[index]?.name?.message}</div>)} */}
              {errors?.users?.[index]?.name && errors?.users?.[index]?.name?.type === "required" && (
                <div className='error-message'>This is required</div>
              )}
              {errors?.users?.[index]?.name && errors?.users?.[index]?.name?.type === "maxLength" && (
                <div className='error-message'>Max length exceeded</div>
              )}
              {errors?.users?.[index]?.name && errors?.users?.[index]?.name?.type === "minLength" && (
                <div className='error-message'>Min length exceeded</div>
              )}
            </div>
            <div className='form-field-container'>
              <input
                {...register(`users.${index}.age`, {
                  required: 'Age is required'
                })}
                type="number"
                placeholder="Age"
              />
            </div>
            <div className='form-field-container'>
              <button type="button" onClick={() => remove(index)}>
                Delete
              </button>
            </div>
          </div>
        ))}
        <div className="button-container">
          <button type="button" onClick={() => append({ name: "", age: null })} className="add-user-button">
            Add User
          </button>

          <button type="submit" className="submit-button">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default DynamicForm;