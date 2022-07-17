import { ReactElement } from "react";

export interface IMovie {
    filmId?: number;
    nameRu?: string;
    nameOriginal?: string;
    year?: string;
    filmLength?: number;
    countries?: ICountry[];
    genres?: IGenre[];
    rating?: string | number;
    ratingKinopoisk?: number;
    posterUrl?: string;
    slogan?: string;
    webUrl?: string;
    description?: string;
    kinopoiskId?: number;
}

export interface ICountry  {
    id?: number;
    country: string;
}

export interface IGenre {
    id?: number;
    genre: string;
}

export interface IMovieInfo {
    title: string;
    info?: string | number | ReactElement[];
}