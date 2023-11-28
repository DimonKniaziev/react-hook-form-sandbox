import React from 'react';
import './app.scss'
import ShippingForm from '../shipping-form';

const App: React.FC = () => {
  return(
    <div className='app'>
      <h1>React Hook Form</h1>
      <ShippingForm/>
    </div>
  )
}

export default App;