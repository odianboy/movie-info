import { Select } from 'antd';
import React, { FC } from 'react';
import { SortTypeEnum } from '../../../../constants/sortType';
import { ISortMovie } from '../../../../types/IHeader';

export const SelectSort: FC<ISortMovie> = (props: ISortMovie) => {
    const { sortData } = props;
    const sortValue = [
        { id: 1, name: 'Рейтингу', value: SortTypeEnum.rating },
        { id: 2, name: 'Году', value: SortTypeEnum.year },
        { id: 3, name: 'Голосам', value: SortTypeEnum.numVote },
    ];
    const { Option } = Select;

    return (
        <Select
            placeholder="Сортировтаь по ..."
            optionFilterProp="children"
            onChange={sortData}
        >
            {sortValue?.map((item: ISortMovie) =>
                <Option
                    key={item.id}
                    value={item.value}
                >
                    {item.name}
                </Option>
            )}
        </Select>
    )
}