import React, { FC } from 'react';
import 'antd/dist/antd.min.css';

import { List } from '../../components/List/List';
import { ISearch } from '../../types/IHeader';

export const MainPage: FC<ISearch> = (params: ISearch) => {
    return (
        <main className='main'>
            <List
                search={params.search}
                genre={params.genre}
                typeFilm={params.typeFilm}
                sortFilm={params.sortFilm}
                formValue={params.formValue}
            />
        </main>
    );
}