export interface IAdress {
    country: string;
    city: string;
    street: string;
    house: string;
}
  
export interface IShippingFields {
    name: string;
    email: string;
    adress: IAdress;
}
  
export interface IOption {
    value: string;
    label: string;
}