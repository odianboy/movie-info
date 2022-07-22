import React, { FC } from 'react';
import { IMovieInfo } from '../../../../types/IMovie';


export const Text: FC<IMovieInfo> = (props: IMovieInfo) => {
    const { title, info } = props;
    const infoAbsence = '-';

    return (
        <p>
            <strong>{title}</strong>
            {info ?? infoAbsence}
        </p>
    )
}