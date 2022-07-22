import React, { FC } from 'react';
import { Breadcrumb, Card } from 'antd';
import { Link } from 'react-router-dom';

import styles from './About.module.scss';

import { Info } from './components/Info/Info';
import { IAbout } from '../../types/IMovie';
import { Loader } from '../Loader/Loader';

export const About: FC<IAbout> = (props: IAbout) => {
    const {
        nameOriginal,
        nameRu,
        description,
    } = props.movie;
   
    return (
        <section className="site-card-border-less-wrapper about-card">
            <Breadcrumb>
                <Breadcrumb.Item>
                    <Link to="/">На главную</Link>
                </Breadcrumb.Item>
            </Breadcrumb>
            <Card
                title={
                    `${nameOriginal ? `${nameRu} (${nameOriginal})` : nameRu }`
                }
            >
                {props.loading &&
                    <div className={styles.aboutLoader}>
                        <Loader />
                    </div>
                }
                <Info movie={props.movie} />
                <p>{description}</p>
            </Card>
        </section>
    )
}