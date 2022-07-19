import React, {
    useState,
    useEffect,
    FC
} from 'react';
import { Pagination } from 'antd';
import { Link } from 'react-router-dom';

import { MovieCard } from '../Card/Card';
import { ISearch } from '../../types/ISearch';
import { IMovie } from '../../types/IMovie';
import { generationKey } from '../../helpers/generationKey/generationKey';
import { API_URL } from '../../constants/api';
import { RoutesEnum } from '../../constants/routes';
import { getData } from '../../services/getData';

export const List: FC<ISearch> = (params: ISearch) => {
    const { search, genre, typeFilm, sortFilm } = params;
    const [movies, setMovie] = useState<IMovie[]>([]);
    const [page, setPage] = useState<number>(1);
    const [pageCount, setPageCount] = useState<number>(1);

    useEffect(() => {
        if(search) {
            getData(
                API_URL,
                RoutesEnum.Filter,
                {
                    keyword: search,
                    page: page
                }
            )
            .then(res => {
                console.log('поиск', search);
                
                const films = res.data.items;
                const pageCount = res.data.totalPages;
    
                setMovie(films);
                setPageCount(pageCount);
            })
            .catch(error => {
                console.log(error);
            });
        }
    }, [search, page])

    useEffect(() => {
        if(genre || typeFilm || sortFilm) {
            getData(
                API_URL,
                RoutesEnum.Filter, {
                    genres: genre,
                    type: typeFilm,
                    order: sortFilm,
                    page: page,
                }
            )
            .then(res => {
                console.log('фильтр');
                const movies = res.data.items;
                const pageCount = res.data.totalPages;
    
                setMovie(movies);
                setPageCount(pageCount);
            })
            .catch(error => {
                console.log(error);
            });
        }
        
    }, [genre, typeFilm, sortFilm, page])

    useEffect(() => {
        if(!genre && !search && !typeFilm && !sortFilm) {
            getData(
                API_URL,
                RoutesEnum.Top,
                {page: page}
            )
            .then(res => {
                console.log('топ');
                const data = res.data.films;
                const countPage = res.data.pagesCount;

                setMovie(data);
                setPageCount(countPage);
            })
            .catch(error => {
                console.log(error);
            });
        }
    }, [page]);

    const handleChange = (page: number) => {
        setPage(page);
    }

    return (
        <section className="main-list">
            <article className="movie">
                {movies?.map((film: IMovie) =>
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
                pageSize={movies?.length}
                total={movies?.length * pageCount}
                showSizeChanger={false}
                onChange={handleChange}
            />
        </section>
    );
}