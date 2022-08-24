import React, { FC, Fragment, useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.scss";

import { ModalFilter } from "./components/Modal-filter/ModalFilter";
import { Header } from "./components/Header/Header";
import { MainPage } from "./pages/Main/Main";
import { AboutMoviePage } from "./pages/About-movie/About-movie";

import { IFormData } from "./types/IHeader";

import { FilmTypeEnum } from "./constants/filmType";
import { RoutesFilmType } from "./constants/routes";
import { SortTypeEnum } from "./constants/sortType";

const App: FC = () => {
  const [searchText, setSearchText] = useState("");
  const [sortFilm, setSortFilm] = useState<string>(SortTypeEnum.numVote);
  const [typeFilm, setTypeFilm] = useState(FilmTypeEnum.film);
  const [isShowModal, setIsShowModal] = useState(false);
  const [showBadge, setShowBadge] = useState(false);
  const [formValue, setFormValue] = useState<IFormData>();
  const [pathUrl, setPathUrl] = useState(RoutesFilmType.all);
  const [page, setPage] = useState(1);

  const toggleAll = () => {
    setTypeFilm(FilmTypeEnum.all);
    setPathUrl(RoutesFilmType.all);
    resetPagination();
  };
  const toggleFilm = () => {
    setTypeFilm(FilmTypeEnum.film);
    setPathUrl(RoutesFilmType.films);
    resetPagination();
  };
  const toggleSeriesTV = () => {
    setTypeFilm(FilmTypeEnum.tvSeries);
    setPathUrl(RoutesFilmType.tvseries);
    resetPagination();
  };
  const toggleSeriesMini = () => {
    setTypeFilm(FilmTypeEnum.miniSeries);
    setPathUrl(RoutesFilmType.miniseries);
    resetPagination();
  };
  const toggleShowTV = () => {
    setTypeFilm(FilmTypeEnum.shows);
    setPathUrl(RoutesFilmType.shows);
    resetPagination();
  };

  const toggleShow = () => setIsShowModal(!isShowModal);

  const onSearch = (value: string) => {
    if (value) {
      setSearchText(value);
      setFormValue({});
    }
    resetPagination();
  };

  const toggleAccept = () => {
    setIsShowModal(!isShowModal);
  };

  const sortData = (value: string) => setSortFilm(value);

  const getFormValue = (value: IFormData) => {
    setFormValue(value);
    setSearchText("");
    setShowBadge(true);
  };

  const resetShowBadge = () => setShowBadge(false);

  const routeName = [
    { id: 1, path: RoutesFilmType.all },
    { id: 2, path: RoutesFilmType.films },
    { id: 3, path: RoutesFilmType.tvseries },
    { id: 4, path: RoutesFilmType.miniseries },
    { id: 5, path: RoutesFilmType.shows },
  ];

  const handleChangePagination = (page: number) => {
    setPage(page);
  };

  const resetPagination = () => {
    setPage(1);
  };

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
      <Routes>
        {routeName.map((item: any) => {
          return (
            <Route
              key={item.id}
              path={item.path}
              element={
                <MainPage
                  search={searchText}
                  typeFilm={typeFilm}
                  sortFilm={sortFilm}
                  formValue={formValue}
                  pathUrl={pathUrl}
                  page={page}
                  handleChangePagination={handleChangePagination}
                />
              }
            >
              <Route path=":id" element={<AboutMoviePage />} />
            </Route>
          );
        })}
        <Route
          path="*"
          element={
            <MainPage
              search={searchText}
              typeFilm={typeFilm}
              sortFilm={sortFilm}
              formValue={formValue}
              pathUrl={pathUrl}
              page={page}
              handleChangePagination={handleChangePagination}
            />
          }
        />
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
};

export default App;
