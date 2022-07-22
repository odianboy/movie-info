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

import { ModalFilter } from './components/Modal-filter/ModalFilter';
import { Header } from './components/Header/Header';
import { MainPage } from './pages/Main/Main';
import { AboutMoviePage } from './pages/About-movie/About-movie';
import { IFormData } from './types/IHeader';

const App: FC = () => {
  const [searchText, setSearchText] = useState('');
  const [sortFilm, setSortFilm] = useState('NUM_VOTE');
  const [typeFilm, setTypeFilm] = useState('FILM');
  const [isShowModal, setIsShowModal] = useState(false);
  const [showBadge, setShowBadge] = useState(false);
  const [formValue, setFormValue] = useState<IFormData>();

  const toggleFilm = () => setTypeFilm('FILM');
  const toggleSeriesTV = () => setTypeFilm('TV_SERIES');
  const toggleSeriesMini = () => setTypeFilm('MINI_SERIES');
  const toggleShowTV = () => setTypeFilm('TV_SHOW');
  const toggleAll = () => setTypeFilm('ALL');

  const toggleShow = () => setIsShowModal(!isShowModal);

  const onSearch = (value: string) => {
    if (value) {
      setSearchText(value);
      setFormValue({});
    }
  }

  const toggleAccept = () => {
    setIsShowModal(!isShowModal);
  }

  const sortData = (value: string) => setSortFilm(value);

  const getFormValue = (value: IFormData) => {
    setFormValue(value);
    setSearchText('');
    setShowBadge(true);
  }

  const resetShowBadge = () => setShowBadge(false);

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
        showBadge={showBadge}
      />
      <Outlet />
      <Routes>
        <Route
          path="/"
          element={<MainPage
            search={searchText}
            typeFilm={typeFilm}
            sortFilm={sortFilm}
            formValue={formValue}
          />
          }
        />
        <Route path=":id" element={<AboutMoviePage />} />
      </Routes>

      {
        <ModalFilter
          isShowModal={isShowModal}
          toggleShow={toggleShow}
          toggleAccept={toggleAccept}
          getFormValue={getFormValue}
          resetShowBadge={resetShowBadge}
        />
      }
    </Fragment>
  );
}

export default App;
