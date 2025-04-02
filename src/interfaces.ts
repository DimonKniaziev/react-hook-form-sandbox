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
    date: Date;
}
  
export interface IOption {
    value: string;
    label: string;
}

export interface IName {
    firstName: string;
    lastName: string;
}

export interface IAdress {
    city: string;
    street: string;
    houseNumber: number;
}