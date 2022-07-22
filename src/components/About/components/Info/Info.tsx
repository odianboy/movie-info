import React, { FC, useState } from 'react';
import { Image } from 'antd';

import {
    IAbout,
    ICountry,
    IGenre,
    IMovieInfo
} from '../../../../types/IMovie';

import { Text } from '../Text/Text';
import { getTimeFromMins } from '../../../../helpers/getTimeFromMins/getTimeFromMins';
import { generationKey } from '../../../../helpers/generationKey/generationKey';

import styles from './Info.module.scss';


export const Info: FC<IAbout> = (props: IAbout) => {
    const [visible, setVisible] = useState(false);
    const {
        posterUrl,
        year,
        ratingKinopoisk,
        slogan,
        genres,
        countries,
        filmLength,
        webUrl
    } = props.movie;

    const movieInfo = [
        { title: 'Год производства: ', info: year },
        { title: 'Рейтинг кинопоиска: ', info: ratingKinopoisk },
        { title: 'Слоган: ', info: slogan },
        { title: 'Время: ', info: `${filmLength} мин. / ${getTimeFromMins(filmLength!)}` },
    ]

    return (
        <section className={styles.aboutInfo}>
            <Image
                preview={visible}
                src={posterUrl}
                onClick={() => setVisible(true)}
            />
            <section className={styles.aboutText}>
                {movieInfo.map((item: IMovieInfo) => {
                    return (
                        <Text
                            key={generationKey()}
                            title={item.title}
                            info={item.info}
                        />
                    )
                })}
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
                <a href={webUrl}>
                    Ссылка на кинопоиск
                </a>
            </section>
        </section>
    )
}