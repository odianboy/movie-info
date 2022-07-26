export interface IHeader {
    onSearch: (value: string) => void;
    toggleFilm: () => void;
    toggleSeriesTV: () => void;
    toggleSeriesMini: () => void;
    toggleShowTV: () => void;
    toggleAll: () => void;
    toggleShow: () => void;
    sortData: (value: string) => void;
    showBadge: Boolean;
}

export interface INavbar {
    id?: number;
    title: string;
    toggle: () => void;
    path?: string;
}

export interface ISearch {
    search?: string;
    genre?: number;
    typeFilm?: string;
    sortFilm?: string;
    formValue?: IFormData;
    pathUrl?: string;
    page?: number;
    handleChangePagination?: (value: number) => void;
}

export interface IFormData {
    genre?: number;
    years?: moment.Moment[];
    ratingFrom?: number;
    ratingTo?: number;
}

export interface ISortMovie {
    id?: number;
    name?: string;
    value?: string;
    sortData?: (value: string) => void;
}