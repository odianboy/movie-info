import React, { FC } from "react";
import { Select } from 'antd';

import { IFilter } from "../../types/IFilter";
import { IGenre } from "../../types/IMovie";

export const MovieSelect: FC<IFilter> = (filter: IFilter) => {
    const { Option } = Select;
    const { genres, onChangeGenre } = filter;

    return (
        <Select
            showSearch
            placeholder="Выбрать по жанрам"
            optionFilterProp="children"
            onChange={onChangeGenre}
        >
            {genres?.map((item: IGenre) =>
                <Option
                    key={item.id}
                    value={item.id}
                >
                    {item.genre}
                </Option>
            )}
        </Select>
    )
}