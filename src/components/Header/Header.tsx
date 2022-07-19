import React, { FC } from "react";
import {
    PageHeader,
    Button,
    Input,
    Select
} from 'antd';
import { useNavigate } from 'react-router-dom';
import { AmazonOutlined } from '@ant-design/icons';

import { IHeader } from "../../types/IHeader";
import { generationKey } from "../../helpers/generationKey/generationKey";
import { ButtonNavbar } from "../Button-navbar/ButtonNavbar";
import { ISortMovie } from "../../types/ISortMovie";
import { SelectSort } from "../Select-sort/SelectSort";

export const Header: FC<IHeader> = (params: IHeader) => {
    const {
        onSearch,
        toggleShow,
        toggleFilm,
        toggleSeriesTV,
        toggleSeriesMini,
        toggleShowTV,
        toggleAll,
        sortData
    } = params;
    const { Search } = Input;
    const { Option } = Select;
    const navigate = useNavigate();

    return (
        <PageHeader
            className="site-page-header"
            onBack={() => {navigate('/')}}
            title="Список фильмов"
            backIcon={<AmazonOutlined />}
            extra={[
                <ButtonNavbar
                    key={generationKey()}
                    title="Все"
                    toggle={toggleAll}
                />,
                <ButtonNavbar
                    key={generationKey()}
                    title="Фильмы"
                    toggle={toggleFilm}
                />,
                <ButtonNavbar
                    key={generationKey()}
                    title="ТВ Сериалы"
                    toggle={toggleSeriesTV}
                />,
                <ButtonNavbar
                    key={generationKey()}
                    title="Мини Сериалы"
                    toggle={toggleSeriesMini}
                />,
                <ButtonNavbar
                    key={generationKey()}
                    title="ТВ Шоу"
                    toggle={toggleShowTV}
                />,
                <SelectSort
                    key={generationKey()}
                    sortData={sortData}
                />,
                <Search
                    key={generationKey()}
                    placeholder="Название фильма..."
                    onSearch={onSearch}
                    allowClear
                />,
                <Button
                    key={generationKey()}
                    type="primary"
                    onClick={toggleShow}
                >
                    Фильтры
                </Button>]
            }
         />
    )
}