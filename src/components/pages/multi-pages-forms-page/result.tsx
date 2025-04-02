import React from "react";
import { useFormStore } from "../../../store";

export const Result: React.FC = () => {
    const {name, adress} = useFormStore()
    return (
        <div className="shipping-form-container">
            <h1>Multi-pages form - Results</h1>
            <form className='shipping-form'>
                <div className='form-field-container'>
                <h2>{name.firstName}</h2>
                </div>
                <div className='form-field-container'>
                <h2>{name.lastName}</h2>
                </div>
                <div className='form-field-container'>
                <h2>{adress.city}</h2>
                </div>
                <div className='form-field-container'>
                <h2>{adress.street}</h2>
                </div>
                <div className='form-field-container'>
                <h2>{adress.houseNumber}</h2>
                </div>
            </form>
        </div>
    )
}