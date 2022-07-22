import React, { FC } from "react";
import { useNavigate } from 'react-router-dom';
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


export const Header: FC<IHeader> = (params: IHeader) => {
    const navigate = useNavigate();

    const { Search } = Input;

    const buttonNavbar = [
        { title: 'Все', toggle: params.toggleAll },
        { title: 'Фильмы', toggle: params.toggleFilm },
        { title: 'ТВ Сериалы', toggle: params.toggleSeriesTV },
        { title: 'Мини Сериалы', toggle: params.toggleSeriesMini },
        { title: 'ТВ Шоу', toggle: params.toggleShowTV },
    ];

    return (
        <PageHeader
            className="site-page-header"
            onBack={() => { navigate('/') }}
            title="Список фильмов"
            backIcon={<AmazonOutlined />}
            extra={[
                buttonNavbar?.map((item: INavbar) => {
                    return (
                        <ButtonNavbar
                            key={generationKey()}
                            title={item.title}
                            toggle={item.toggle}
                        />
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