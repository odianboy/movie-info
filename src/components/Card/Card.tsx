import React, { FC } from 'react';
import {
    Card,
    Rate,
} from 'antd';
import { IMovie } from '../../types/IMovie';

export const MovieCard: FC<IMovie> = (movie: IMovie) => {
    const {
        posterUrl,
        nameRu,
        year,
        rating
    } = movie;
    const { Meta } = Card;

    return (
        <Card
            hoverable
            cover={
                <img
                    className="card-img"
                    alt="poster"
                    src={posterUrl}
                />
            }
        >
            <Meta
                title={nameRu}
                description={year}
            />
            <Rate
                allowHalf
                count={10}
                disabled={true}
                defaultValue={+rating!}
            />
        </Card>
    );
}