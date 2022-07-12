import React from 'react';
import { PageHeader } from 'antd';
import { AmazonOutlined } from '@ant-design/icons';
import 'antd/dist/antd.min.css';
import { MovieList } from '../components/MovieList';

export const MainPage: React.FC = () => {
    return (
        <div>
            <PageHeader
                className="site-page-header"
                onBack={() => null}
                title="Список фильмов"
                backIcon={<AmazonOutlined />}
            />
            <MovieList />
        </div>
    )
}