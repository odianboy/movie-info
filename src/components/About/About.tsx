import React, { FC } from 'react';
import { Breadcrumb, Card } from 'antd';
import { Link } from 'react-router-dom';

import styles from './About.module.scss';

import { Info } from '../Info/Info';
import { IMovie } from '../../types/IMovie';
import { Loader } from '../Loader/Loader';

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
        description,
        loading,
    } = movie;

    return (
        <section className="site-card-border-less-wrapper movie-about__card">
            <Breadcrumb>
                <Breadcrumb.Item>
                    <Link to="/">На главную</Link>
                </Breadcrumb.Item>
            </Breadcrumb>
            <Card
                title={
                    `${nameOriginal ?
                        `${nameRu} (${nameOriginal})` :
                        nameRu
                    }`
                }
            >{loading &&
                <div className={styles.aboutLoader}>
                    <Loader />
                </div>
                }
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