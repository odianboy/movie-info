export interface IHeader {
    onSearch: (value: string) => void;
    toggleFilm: () => void;
    toggleSeriesTV: () => void;
    toggleSeriesMini: () => void;
    toggleShowTV: () => void;
    toggleAll: () => void;
    toggleShow: () => void;
    sortData: (value: string) => void;
}