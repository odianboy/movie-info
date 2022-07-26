import React, { FC } from 'react';
import { Breadcrumb, Card } from 'antd';
import { Link, useNavigate, useLocation } from 'react-router-dom';

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

    const navigate = useNavigate();
    const { pathname } = useLocation();

    const pathnames = pathname.split("/").filter(Boolean);

    return (
        <section className="site-card-border-less-wrapper about-card">
            <Breadcrumb>
                <Breadcrumb.Item>
                    {pathnames.map((name, index) => {
                        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
                        const isLast = index === pathnames.length - 1;
                        return isLast ? (
                            <a key={name}>{name}</a>
                        ) : (
                            <Link key={name} to={routeTo}>
                                {name} /
                            </Link>
                        );
                    })}
                </Breadcrumb.Item>
            </Breadcrumb>
            <Card
                title={
                    `${nameOriginal ? `${nameRu} (${nameOriginal})` : nameRu}`
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