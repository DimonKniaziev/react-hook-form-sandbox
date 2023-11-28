import React from 'react';
import './app.scss'
import ShippingForm from '../shipping-form';
import YUPForm from '../yup-form';

const App: React.FC = () => {
  return(
    <div className='app'>
      <h1>Pure React Hook Form</h1>
      <ShippingForm/>
      <h1>React Hook Form + YUP</h1>
      <YUPForm/>
    </div>
  )
}

export default App;