export interface IAdvert {
  year: number;
  make: string;
  model: string;
  type: string;
  img: string | null;
  description: string;
  fuelConsumption: string;
  engineSize: string;
  accessories: string[];
  functionalities: string[];
  rentalPrice: string;
  rentalCompany: string;
  address: string;
  rentalConditions: string;
  premium: boolean;
  mileage: number;
}

export interface IHttpError {
  status: number;
  message?: string;
}

export interface IErrorMessageList {
  [key: number]: string;
}

export interface IFindFilterProps {
  page?: string;
  limit?: string;
  favorite?: string;
}

export interface IFindFilter {
  skip: number;
  limit: number;
}
