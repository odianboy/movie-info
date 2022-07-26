import React, { FC, Fragment } from 'react';

import { List } from '../../components/List/List';
import { ISearch } from '../../types/IHeader';

export const MainPage: FC<ISearch> = (params: ISearch) => {
    return (
        <Fragment>
            <List
                search={params.search}
                genre={params.genre}
                typeFilm={params.typeFilm}
                sortFilm={params.sortFilm}
                formValue={params.formValue}
                pathUrl={params.pathUrl}
                page={params.page}
                handleChangePagination={params.handleChangePagination}
            />
        </Fragment>
    );
}