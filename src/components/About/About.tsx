import React, { FC } from 'react';
import { Card } from 'antd';

import { Info } from '../Info/Info';
import { IMovie } from '../../types/IMovie';

export const About: FC<IMovie> = (movie: IMovie) => {
    const {
        posterUrl,
        year,
        ratingKinopoisk,
        slogan,
        genres,
        countries,
        filmLength,
        webUrl,
        nameOriginal,
        nameRu,
        description
    } = movie;

    return (
        <section className="site-card-border-less-wrapper movie-about__card">
            <Card
                title={
                    `${
                        nameOriginal ?
                        `${nameRu} (${nameOriginal})`:
                        nameRu
                    }`
                }
            >
                <Info
                    posterUrl={posterUrl}
                    year={year}
                    ratingKinopoisk={ratingKinopoisk}
                    slogan={slogan}
                    genres={genres}
                    countries={countries}
                    filmLength={filmLength}
                    webUrl={webUrl}
                />
                <p>{description}</p>
            </Card>
        </section>
    )
}