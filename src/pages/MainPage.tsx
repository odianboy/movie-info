import React, { FC } from 'react';
import 'antd/dist/antd.min.css';
import { MovieList } from '../components/MovieList';

export const MainPage: FC = () => {
    return (
        <main className='main'>
            <MovieList />
        </main>
    );
}