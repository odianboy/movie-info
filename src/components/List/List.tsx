import React, {
    useState,
    useEffect,
    FC
} from 'react';
import axios from 'axios';
import { Pagination } from 'antd';
import { Link } from 'react-router-dom';

import { MovieCard } from '../Card/Card';
import { ISearch } from '../../types/ISearch';
import { IMovie } from '../../types/IMovie';
import { generationKey } from '../../helpers/generationKey/generationKey';
import { API_KEY, API_URL } from '../../constants/api';
import { RoutesEnum } from '../../constants/routes';

export const List: FC<ISearch> = (params: ISearch) => {
    const { search, genre } = params;
    const [movies, setMovie] = useState<IMovie[]>([]);
    const [page, setPage] = useState<number>(1);
    const [pageCount, setPageCount] = useState<number>(1);

    const getMovies = () => {
        axios.get(`${API_URL}${RoutesEnum.Top}`, {
            headers: {
                'X-API-KEY': API_KEY,
            },
            params: {
                page: page,
            }
        })
        .then(res => {
            console.log('Запрос для списка топ фильмов');
            const data = res.data.films;
            const countPage = res.data.pagesCount;

            setMovie(data);
            setPageCount(countPage);
        })
        .catch(error => {
            console.log(error);
        });
    }

    const getMovieSearch = () => {
        axios.get(`${API_URL}${RoutesEnum.Search}`, {
            headers: {
                'X-API-KEY': API_KEY,
            },
            params: {
                keyword: search,
                page: page,
            }
        })
        .then(res => {
            console.log('Запрос для списка поиска фильма');
            const films = res.data.films;
            const pageCount = res.data.pagesCount;

            setMovie(films);
            setPageCount(pageCount);
        })
        .catch(error => {
            console.log(error);
        });
    }

    const getMoviesFilter = () => {
        axios.get(`${API_URL}${RoutesEnum.Filter}`, {
            headers: {
                'X-API-KEY': API_KEY,
            },
            params: {
                genres: genre,
                page: page,
            }
        })
        .then(res => {
            console.log('Запрос для списка фильмов по фильтру');
            const movies = res.data.items;
            const pageCount = res.data.totalPages;

            setMovie(movies);
            setPageCount(pageCount);
        })
        .catch(error => {
            console.log(error);
        });
    }

    useEffect(() => {
        getMovieSearch()
    }, [search])

    useEffect(() => {
        getMoviesFilter()
    }, [genre])

    useEffect(() => {
        getMovies();
    }, [page]);

    const handleChange = (page: number) => {
        setPage(page);
    }

    return (
        <section className='main-list'>
            <article className='movie'>
                {movies.map((film: IMovie) =>
                    <Link
                        to={`${film.filmId ?? film.kinopoiskId}`}
                        key={generationKey()}
                    >
                        <MovieCard
                            posterUrl={film.posterUrl}
                            nameRu={film.nameRu}
                            year={film.year}
                            rating={
                                film.ratingKinopoisk ??
                                film.rating
                            }
                        />
                    </Link>
                )}
            </article>
            <Pagination
                pageSize={movies.length}
                total={movies.length * pageCount}
                showSizeChanger={false}
                onChange={handleChange}
            />
        </section>
    );
}