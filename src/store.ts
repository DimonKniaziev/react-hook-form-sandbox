import {create} from 'zustand';

type MultiPagesFormState = {
  name: {
    firstName: string | null;
    lastName: string | null;
  };
  adress: {
    city: string | null;
    street: string | null;
    houseNumber: number | null;
  };
  setName: (firstName: string, lastName: string) => void;
  setAdress: (city: string, street: string, houseNumber: number) => void;
}

export const useFormStore = create<MultiPagesFormState>((set, get) => ({
  name: {
    firstName: '',
    lastName: ''
  },
  adress: {
    city: '',
    street: '',
    houseNumber: null
  },
  setName: (firstName, lastName) => set(() => ({name: {firstName, lastName}})),
  setAdress: (city, street, houseNumber) => set(() => ({adress: {city, street, houseNumber}}))
}));