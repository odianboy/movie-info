import React, {
    FC,
    useState,
    useEffect
} from "react";
import { useParams } from "react-router-dom";

import { About } from '../../components/About/About'
import { IMovie } from "../../types/IMovie";

import { API_URL } from '../../constants/api';
import { RoutesEnum } from '../../constants/routes';
import { getData } from "../../services/getData";

export const AboutMoviePage: FC = () => {
    const params = useParams();
    const [movie, setMovie] = useState({} as IMovie);
    const [loading, setLoading] = useState(false);

    const getMovie = () => {
        setLoading(true);
        getData(API_URL, `${RoutesEnum.Film}${params.id}`)
            .then(res => {
                const film = res.data;
                setMovie(film);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
            });
    }

    useEffect(() => {
        getMovie();
    }, [])

    return (
        <article className='movie-about'>
            <About
                nameOriginal={movie.nameOriginal}
                nameRu={movie.nameRu}
                year={movie.year}
                ratingKinopoisk={movie.ratingKinopoisk}
                slogan={movie.slogan}
                genres={movie.genres}
                countries={movie.countries}
                filmLength={movie.filmLength}
                webUrl={movie.webUrl}
                posterUrl={movie.posterUrl}
                description={movie.description}
                loading={loading}
            />
        </article>
    )
}