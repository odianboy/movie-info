import React, {
    FC,
    useState,
    useEffect
} from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";

import { About } from '../../components/About/About'
import { IMovie } from "../../types/IMovie";
import { API_KEY, API_URL } from '../../constants/api';
import { RoutesEnum } from '../../constants/routes';

export const AboutMoviePage: FC = () => {
    const params = useParams();
    const [movie, setMovie] = useState<IMovie>({} as IMovie);

    const getMovie = () => {
        axios.get(`${API_URL}${RoutesEnum.Film}${params.id}`, {
            headers: {
                'X-API-KEY': API_KEY,
            }
        })
        .then(res => {
            const film = res.data;
            setMovie(film)
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
            />
        </article>
    )
}