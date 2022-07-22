import { ICountry, IGenre } from "./IMovie";

export interface IFilter {
    genres: IGenre[];
    countries?: ICountry[];
    onChangeGenre?: (value: number) => void;
}

export interface IModalFilter {
    isShowModal?: boolean;
    toggleShow?: () => void;
    toggleAccept?: () => void;
    getFormValue: (value: {}) => void;
    resetShowBadge: () => void;
}