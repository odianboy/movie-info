import React, { FC } from 'react';
import {
    Card,
    Rate,
} from 'antd';
import { IMovie } from '../../../../types/IMovie';
import { getRate } from '../../../../helpers/getRate/getRate';

export const MovieCard: FC<IMovie> = (movie: IMovie) => {
    const {
        posterUrl,
        nameRu,
        year,
        rating
    } = movie;
    const infoAbsence = '-';
    const { Meta } = Card;

    return (
        <Card
            hoverable
            cover={
                <img
                    className="poster"
                    alt="poster"
                    src={posterUrl}
                />
            }
        >
            <Meta
                title={nameRu ?? infoAbsence}
                description={year ?? infoAbsence}
            />
            <Rate
                allowHalf
                count={5}
                disabled={true}
                defaultValue={getRate(Math.floor(+rating!))}
            />
        </Card>
    );
}