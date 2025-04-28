import React from "react";
import { UseFormRegister } from "react-hook-form";

// export type InputProps = {
//   register: UseFormRegister<any>;
//   name: string;
//   [key: string]: any;
// }

export const Input = ({ register, name, ...rest }) => {
  if (register) {
    return <input {...register(name)} {...rest} />;
  }
}

// export type SelectProps = {
//   register: UseFormRegister<any>;
//   options: string[];
//   name: string;
//   [key: string]: any;
// }

export const Select = ({ register, options, name, ...rest }) => {
  return (
    <select {...register(name)} {...rest}>
      {options.map((value) => (
        <option key={value} value={value}>
          {value}
        </option>
      ))}
    </select>
  );
}