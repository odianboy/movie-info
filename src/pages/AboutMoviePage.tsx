import React, { FC, useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import { Image, Card } from 'antd';

export const AboutMoviePage: FC = () => {
    const url = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/';
    const token = '2397a418-8907-45e2-8046-4276a4e107c2';
    const params = useParams();

    const [movie, setMovie] = useState<any>({});
    const [visible, setVisible] = useState<boolean>(false);

    const getMovie = () => {
        axios.get(`${url +params.id}`, {
            headers: {
                'X-API-KEY': token,
            }
        })
        .then(res => {
            const film = res.data;
            console.log(res.data);
            setMovie(film)
        })
        .catch(err => {
            console.log(err);
        });
    }

    const getTimeFromMins = (min: number) => {
        let hours = Math.trunc(min/60);
        let minutes = min % 60;
        return hours + ':' + minutes;
    };

    useEffect(() => {
        getMovie();
    }, [])

    return (
        <div className='movie-about'>
            <div className="site-card-border-less-wrapper movie-about__card">
                <Card
                    title={`${movie.nameRu} (${movie.nameOriginal})` }
                >
                    <div className="movie-about__info">
                        <Image
                            preview={visible}
                            src={movie.posterUrl}
                            onClick={() => setVisible(true)}
                        />
                        <div className="movie-about__text">
                            <p>
                                <strong>Рейтинг кинопоиска: </strong>
                                {movie.ratingKinopoisk}
                            </p>
                            <p>
                                <strong>Слоган: </strong>
                                {movie.slogan}
                            </p>
                            <p>
                                <strong>Жанр: </strong>
                                {movie.genres?.map((item: any) => 
                                    <span key={item.genre}>{` ${item.genre}`}</span>
                                )}
                            </p>
                            <p>
                                <strong>Страна: </strong>
                                {movie.countries?.map((item: any) => 
                                    <span key={item.country}>{` ${item.country}`}</span>
                                )}
                            </p>
                            <p>
                                <strong>Время: </strong>
                                {`${movie.filmLength} мин. / ${getTimeFromMins(movie.filmLength)}`}
                            </p>
                            <a href={movie.webUrl}>Ссылка на кинопоиск</a>
                        </div>
                    </div>
                <p>{movie.description}</p>
                </Card>
            </div>
        </div>
    )
}