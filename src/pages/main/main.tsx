import React, { FC } from 'react';
import 'antd/dist/antd.min.css';
import { List } from '../../components/List/List';
import { ISearch } from '../../types/ISearch';

export const MainPage: FC<ISearch> = (params: ISearch) => {
    const { search, genre, typeFilm, sortFilm, formValue } = params;
    return (
        <main className='main'>
            <List
                search={search}
                genre={genre}
                typeFilm={typeFilm}
                sortFilm={sortFilm}
                formValue={formValue}
            />
        </main>
    );
}