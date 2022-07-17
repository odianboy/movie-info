import React, { FC, useState } from 'react';
import { Image } from 'antd';

import { Text } from '../Text/Text';
import { ICountry, IGenre, IMovie } from '../../types/IMovie';
import { getTimeFromMins } from '../../helpers/getTimeFromMins/getTimeFromMins';

export const Info: FC<IMovie> = (movie: IMovie) => {
    const [visible, setVisible] = useState<boolean>(false);
    const {
        posterUrl,
        year,
        ratingKinopoisk,
        slogan,
        genres,
        countries,
        filmLength,
        webUrl
    } = movie;

    return (
        <section className="movie-about__info">
            <Image
                preview={visible}
                src={posterUrl}
                onClick={() => setVisible(true)}
            />
            <section className="movie-about__text">
                <Text
                    title='Год производства: '
                    info={year}
                />
                <Text
                    title='Рейтинг кинопоиска: '
                    info={ratingKinopoisk}
                />
                <Text
                    title='Слоган: '
                    info={slogan}
                />
                <Text
                    title='Жанр: '
                    info={genres?.map((item: IGenre) => 
                        <span key={item.genre}>{` ${item.genre}`}</span>
                    )}
                />
                <Text
                    title='Страна: '
                    info={countries?.map((item: ICountry) => 
                        <span key={item.country}>{` ${item.country}`}</span>
                    )}
                />
                <Text
                    title='Время: '
                    info={
                        `${filmLength} мин. / 
                        ${getTimeFromMins(filmLength!)}`
                    }
                />
                <a
                    href={webUrl}
                    target="_blank"
                >
                    Ссылка на кинопоиск
                </a>
            </section>
        </section>
    )
}