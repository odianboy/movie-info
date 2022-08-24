import React, { useState, useEffect, FC, Fragment } from "react";
import { Pagination, Tooltip } from "antd";
import { Link, Outlet, useParams } from "react-router-dom";

import { MovieCard } from "./components/Card/Card";
import { Loader } from "../Loader/Loader";

import { IMovie } from "../../types/IMovie";
import { ISearch } from "../../types/IHeader";

import { API_URL } from "../../constants/api";
import { RoutesEnum } from "../../constants/routes";
import { getData } from "../../services/getData";
import { getDateFormat } from "../../helpers/getDateFormat/getDateFormat";

import styles from "./List.module.scss";

export const List: FC<ISearch> = (params: ISearch) => {
  const {
    search,
    typeFilm,
    sortFilm,
    formValue,
    pathUrl,
    page,
    handleChangePagination,
  } = params;
  const routerParams = useParams();

  const [movies, setMovie] = useState<IMovie[]>([]);
  const [pageCount, setPageCount] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const yearFrom = formValue?.years ? formValue?.years[0] : null;
    const yearTo = formValue?.years ? formValue?.years[1] : null;
    setLoading(true);

    getData(API_URL, RoutesEnum.Filter, {
      genres: formValue?.genre,
      ratingTo: formValue?.ratingTo,
      ratingFrom: formValue?.ratingFrom,
      yearFrom: yearFrom ? getDateFormat(yearFrom) : null,
      yearTo: yearTo ? getDateFormat(yearTo) : null,
      type: typeFilm,
      order: sortFilm,
      keyword: search,
      page: page,
    })
      .then((res) => {
        setMovie(res.data.items);
        setPageCount(res.data.totalPages);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [typeFilm, sortFilm, formValue, search, page]);

  return (
    <Fragment>
      {routerParams.hasOwnProperty("id") ? (
        <Outlet />
      ) : (
        <section className={styles.movieList}>
          {loading && (
            <div className={styles.loader}>
              <Loader />
            </div>
          )}
          <article className={styles.movie}>
            {movies?.map((film: IMovie) => (
              <Tooltip
                key={film.filmId ?? film.kinopoiskId}
                title={film.ratingKinopoisk ?? film.rating}
                color="volcano"
                placement="rightTop"
                overlayStyle={{ padding: 0 }}
                zIndex={0}
              >
                <Link to={`${pathUrl}/${film.filmId ?? film.kinopoiskId}`}>
                  <MovieCard
                    posterUrl={film.posterUrl}
                    nameRu={film.nameRu}
                    year={film.year}
                    rating={film.ratingKinopoisk ?? film.rating}
                  />
                </Link>
              </Tooltip>
            ))}
          </article>
          {!!movies.length && (
            <Pagination
              pageSize={movies?.length}
              total={movies?.length * pageCount}
              showSizeChanger={false}
              onChange={handleChangePagination}
              current={page}
            />
          )}
        </section>
      )}
    </Fragment>
  );
};
