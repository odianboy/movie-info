import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Movie } from '../shared/api/typicode/models';
import { Card, Rate, Pagination} from 'antd';

const { Meta } = Card;

export const MovieList: React.FC = () => {
    // const url = 'https://kinobd.ru/api/films';
    const url = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/top';
    const token = '0e4248f0-c3dd-4f34-b12d-00cfa5c4c9c4';
    const [movie, setMovie] = useState<Movie[]>([]);

    useEffect(() => {

        function getMovie(page=1) {
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
                console.log('Movie', movie);
                setMovie(data);
            })
            .catch(error => {
                console.log(error);
            })
        }
        getMovie();
        }, []);

    return (
        <div className='main'>
            <div className='movie'>
                {movie.map((film: Movie) => 
                    <Card
                        key={film.filmId}
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="poster" src={film.posterUrl}/>}
                    >
                        <Meta title={film.nameRu} description={film.year}/>
                        <Rate allowHalf defaultValue={+film.rating} />
                    </Card>
                )}
            </div>
            <Pagination defaultCurrent={1} total={50}/>
        </div>
    )
}