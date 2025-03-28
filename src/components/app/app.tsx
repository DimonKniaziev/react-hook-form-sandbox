import React from 'react';
import './app.scss'
import ShippingForm from '../shipping-form';
import YUPForm from '../yup-form';
import DynamicForm from '../dynamic-form';

const App: React.FC = () => {
  return(
    <div className='app'>
      <h1>Pure React Hook Form</h1>
      <ShippingForm/>
      <h1>React Hook Form + YUP</h1>
      <YUPForm/>
      <h1>Dynamic Form</h1>
      <DynamicForm/>
    </div>
  )
}

export default App;