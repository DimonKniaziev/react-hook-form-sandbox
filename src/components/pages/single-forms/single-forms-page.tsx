import React from 'react';
import ShippingForm from '../../shipping-form';
import YUPForm from '../../yup-form';
import DynamicForm from '../../dynamic-form';
const SingleFormsPage: React.FC = () => {
  return(
    <div className='single-forms-page'>
      <h1>Pure React Hook Form</h1>
      <ShippingForm/>
      <h1>React Hook Form + YUP</h1>
      <YUPForm/>
      <h1>Dynamic Form</h1>
      <DynamicForm/>
    </div>
  )
}

export default SingleFormsPage;