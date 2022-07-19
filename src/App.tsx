import React, {
  FC,
  Fragment,
  useState,
} from 'react';
import {
  Routes,
  Route,
  Outlet,
} from 'react-router-dom';

import './App.scss';

import { AboutMoviePage } from './pages/about-movie/about-movie';
import { MainPage } from './pages/main/main';
import { ModalFilter } from './components/Modal-filter/ModalFilter';
import { Header } from './components/Header/Header';

const App: FC = () => {

  const [searchText, setSearchText] = useState<string>('');
  const [genre, setGenre] = useState<number>();
  const [sortFilm, setSortFilm] = useState<string>('');
  const [typeFilm, setTypeFilm] = useState<string>('');
  const [selectGenre, setSelectGenre] = useState<number>();
  const [isShowModal, setIsShowModal] = useState<boolean>(false);

  const toggleFilm = () => {setTypeFilm('FILM')}
  const toggleSeriesTV = () => {setTypeFilm('TV_SERIES')}
  const toggleSeriesMini = () => {setTypeFilm('MINI_SERIES')}
  const toggleShowTV = () => {setTypeFilm('TV_SHOW')}
  const toggleAll = () => {setTypeFilm('ALL')}

  const toggleShow = () => setIsShowModal(!isShowModal);
  const onSearch = (value: string) => {
    if(value) {
      setSearchText(value)
      setGenre(0);
    }
  };
  const toggleAccept = () => {
    setIsShowModal(!isShowModal);
    setGenre(selectGenre);
    setSearchText('');
  }
  const updateData = (value: number) => setSelectGenre(value);
  const sortData = (value: string) => setSortFilm(value);
  
  return (
    <Fragment>
      <Header
        onSearch={onSearch}
        toggleShow={toggleShow}
        toggleFilm={toggleFilm}
        toggleSeriesTV={toggleSeriesTV}
        toggleSeriesMini={toggleSeriesMini}
        toggleShowTV={toggleShowTV}
        toggleAll={toggleAll}
        sortData={sortData}
      />
      <Outlet />
      <Routes>
        <Route
          path="/"
          element={<MainPage
              search={searchText}
              genre={genre}
              typeFilm={typeFilm}
              sortFilm={sortFilm}
            />
          }
        />
        <Route path=":id" element={<AboutMoviePage />} />
      </Routes>
      
      {isShowModal &&
        <ModalFilter
          isShowModal={isShowModal}
          toggleShow={toggleShow}
          toggleAccept={toggleAccept}
          updateData={updateData}
        />
      }
    </Fragment>
  );
}

export default App;
