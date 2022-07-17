import React, { FC } from 'react';
import 'antd/dist/antd.min.css';
import { List } from '../../components/List/List';
import { ISearch } from '../../types/ISearch';

export const MainPage: FC<ISearch> = (props: ISearch) => {
    return (
        <main className='main'>
            <List
                search={props.search}
                genre={props.genre}
            />
        </main>
    );
}