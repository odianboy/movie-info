import React, { useState, useEffect, FC } from 'react';
import axios from 'axios';
import { Movie } from '../shared/api/typicode/models';
import { Card, Rate, Pagination} from 'antd';
import { Link } from 'react-router-dom';

export const MovieList: FC = () => {
    const url = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/top';
    const token = '2397a418-8907-45e2-8046-4276a4e107c2';

    const { Meta } = Card;

    const [movies, setMovie] = useState<Movie[]>([]);
    const [page, setPage] = useState<number>(1);
    const [pageCount, setPageCount] = useState<number>(1);

    const getMovies = () => {
        axios.get(url, {
            headers: {
                'X-API-KEY': token,
            },
            params: {
                page: page,
            }
        })
        .then(res => {
            const data = res.data.films;
            const countPage = res.data.pagesCount;
            console.log('Movie', movies);
            setMovie(data);
            setPageCount(countPage);
        })
        .catch(error => {
            console.log(error);
        });
    }

    const handleChange = (page: number) => {
        setPage(page);
    }

    useEffect(() => {
        getMovies();
    }, [page]);

    return (
        <div className='main-list'>
            <div className='movie'>
                {movies.map((film: Movie) =>
                <Link to={`${film.filmId}`} key={film.filmId}>
                     <Card
                        hoverable
                        cover={
                            <img
                                alt="poster"
                                src={film.posterUrl}
                            />
                        }
                    >
                        <Meta
                            title={film.nameRu}
                            description={film.year}
                        />
                        <Rate
                            allowHalf
                            defaultValue={+film.rating}
                        />
                    </Card>
                </Link>
                   
                )}
            </div>
            <Pagination
                pageSize={movies.length}
                total={movies.length * pageCount}
                showSizeChanger={false}
                onChange={handleChange}
            />
        </div>
    );
}