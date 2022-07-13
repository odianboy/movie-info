import React, { FC, Fragment } from 'react';
import './App.scss';
import { MainPage } from './pages/MainPage';
import { Routes, Route, Outlet, Link } from 'react-router-dom';
import { AboutMoviePage } from './pages/AboutMoviePage';
import { PageHeader } from 'antd';
import { AmazonOutlined } from '@ant-design/icons';

const App: FC = () => {
  return (
    <Fragment>
      <PageHeader
        className="site-page-header"
        onBack={() => {}}
        title="Список фильмов"
        backIcon={<AmazonOutlined />}
      />
      <Outlet />
        <Routes>
            <Route path="/" element={ <MainPage />} />
            <Route path=":id" element={<AboutMoviePage />} />
        </Routes>
    </Fragment>
  );
}

export default App;
