import React, {
    useState,
    useEffect,
    FC
} from 'react';
import { Pagination, Spin, Tooltip } from 'antd';
import { Link } from 'react-router-dom';

import { MovieCard } from '../Card/Card';
import { ISearch } from '../../types/ISearch';
import { IMovie } from '../../types/IMovie';
import { generationKey } from '../../helpers/generationKey/generationKey';
import { API_URL } from '../../constants/api';
import { RoutesEnum } from '../../constants/routes';
import { getData } from '../../services/getData';
import { getDateFormat } from '../../helpers/getDateFormat/getDateFormat';
import { LoadingOutlined } from '@ant-design/icons';

import styles from './List.module.scss';

export const List: FC<ISearch> = (params: ISearch) => {
    const { search, typeFilm, sortFilm, formValue } = params;
    const [movies, setMovie] = useState<IMovie[]>([]);
    const [page, setPage] = useState<number>(1);
    const [pageCount, setPageCount] = useState<number>(1);
    const [loading, setLoading] = useState(false);
    const antIcon = <LoadingOutlined style={{ fontSize: 100 }} spin />;

    useEffect(() => {
        const yearFrom = formValue?.years ? formValue?.years[0] : null;
        const yearTo = formValue?.years ? formValue?.years[1] : null;
        setLoading(true)

        getData(
            API_URL,
            RoutesEnum.Filter, {
            genres: formValue?.genre,
            ratingTo: formValue?.ratingTo,
            ratingFrom: formValue?.ratingFrom,
            yearFrom: yearFrom ? getDateFormat(yearFrom) : null,
            yearTo: yearTo ? getDateFormat(yearTo) : null,
            type: typeFilm,
            order: sortFilm,
            keyword: search,
            page: page,
        }
        )
            .then(res => {
                const movies = res.data.items;
                const pageCount = res.data.totalPages;

                setMovie(movies);
                setPageCount(pageCount);
                setLoading(false);
            })
            .catch(error => {
                console.log(error);
            });
    }, [typeFilm, sortFilm, formValue, search, page]);

    const handleChange = (page: number) => {
        setPage(page);
    }

    return (
        <section className="main-list">
            {loading &&
                <div className='loader'>
                    <Spin indicator={antIcon} />
                </div>
            }

            <article className="movie">
                {movies?.map((film: IMovie) =>
                    <Tooltip
                        key={generationKey()}
                        title={film.ratingKinopoisk ?? film.rating}
                        color='volcano'
                        placement='rightTop'
                        overlayStyle={{ padding: 0 }}
                        zIndex={0}
                    >
                        <Link
                            to={
                                `${film.filmId ??
                                film.kinopoiskId}`
                            }
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
                    </Tooltip>
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