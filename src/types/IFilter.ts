import { ICountry, IGenre } from "./IMovie";

export interface IFilter {
    genres: IGenre[];
    countries?: ICountry[];
    updateData?: (value: number) => void;
}

export interface IModalFilter {
    isShowModal: boolean;
    toggleShow: () => void;
    toggleAccept: () => void;
    updateData: (value: number) => void;
}