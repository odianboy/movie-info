import React, { FC } from "react";
import {
    PageHeader,
    Button,
    Input
} from 'antd';
import { useNavigate } from 'react-router-dom';
import { AmazonOutlined } from '@ant-design/icons';

import { IHeader } from "../../types/IHeader";
import { generationKey } from "../../helpers/generationKey/generationKey";

export const Header: FC<IHeader> = (params: IHeader) => {
    const { onSearch, toggleShow } = params;
    const { Search } = Input;
    const navigate = useNavigate();

    return (
        <PageHeader
            className="site-page-header"
            onBack={() => {navigate('/')}}
            title="Список фильмов"
            backIcon={<AmazonOutlined />}
            extra={[
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