import React, { FC } from "react";
import { Link, useNavigate } from 'react-router-dom';
import {
    PageHeader,
    Button,
    Input,
    Badge,
} from 'antd';
import { AmazonOutlined } from '@ant-design/icons';

import { IHeader, INavbar } from "../../types/IHeader";
import { ButtonNavbar } from "./components/Button-navbar/ButtonNavbar";
import { SelectSort } from "./components/Select-sort/SelectSort";

import { generationKey } from "../../helpers/generationKey/generationKey";
import { RoutesFilmType } from "../../constants/routes";


export const Header: FC<IHeader> = (params: IHeader) => {
    const navigate = useNavigate();

    const { Search } = Input;

    const buttonNavbar = [
        { id: 1, title: 'Все', toggle: params.toggleAll, path: RoutesFilmType.all },
        { id: 2, title: 'Фильмы', toggle: params.toggleFilm, path: RoutesFilmType.films },
        { id: 3, title: 'ТВ Сериалы', toggle: params.toggleSeriesTV, path: RoutesFilmType.tvseries },
        { id: 4, title: 'Мини Сериалы', toggle: params.toggleSeriesMini, path: RoutesFilmType.miniseries },
        { id: 5, title: 'ТВ Шоу', toggle: params.toggleShowTV, path: RoutesFilmType.shows },
    ];

    return (
        <PageHeader
            className="site-page-header"
            onBack={() => { navigate('/all') }}
            title="Список фильмов"
            backIcon={<AmazonOutlined />}
            extra={[
                buttonNavbar?.map((item: INavbar) => {
                    return (
                        <Link to={item.path!} >
                            <ButtonNavbar
                                key={item.id}
                                title={item.title}
                                toggle={item.toggle}
                            />
                        </Link>
                    )
                }),
                <SelectSort
                    key={generationKey()}
                    sortData={params.sortData}
                />,
                <Search
                    key={generationKey()}
                    placeholder="Название фильма..."
                    onSearch={params.onSearch}
                    allowClear
                />,
                <Badge
                    dot={!!params.showBadge}
                    key={generationKey()}
                >
                    <Button
                        type="primary"
                        onClick={params.toggleShow}
                    >
                        Фильтры
                    </Button>
                </Badge>]
            }
        />
    )
}