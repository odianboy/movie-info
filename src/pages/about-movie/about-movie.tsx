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

import styles from './About-movie.module.scss';

export const AboutMoviePage: FC = () => {
    const params = useParams();

    const [movie, setMovie] = useState({} as IMovie);
    const [loading, setLoading] = useState(false);

    const getMovie = () => {
        setLoading(true);
        getData(API_URL, `${RoutesEnum.Film}${params.id}`)
            .then(res => {
                setMovie(res.data);
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
        <article className={styles.movieAbout}>
            <About
                movie={{ ...movie }}
                loading={loading}
            />
        </article>
    )
}