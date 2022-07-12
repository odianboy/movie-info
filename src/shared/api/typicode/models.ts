export type Movie = {
    filmId: number;
    nameRu: string;
    nameEn: string;
    year: string;
    filmLength: string;
    countries: Country[];
    genres: Genre[];
    rating: string;
    ratingVoteCount: number;
    posterUrl: string;
    posterUrlPreview: string;
    ratingChange: null;
}

export type Country = {
    country: string;
}

export type Genre = {
    genre: string;
}