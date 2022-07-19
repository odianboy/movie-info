import { Select } from 'antd';
import React, { FC } from 'react';
import { generationKey } from '../../helpers/generationKey/generationKey';
import { ISortMovie } from '../../types/ISortMovie';

export const SelectSort: FC<ISortMovie> = (props: ISortMovie) => {
    const { sortData } = props;
    const sortValue = [
        {id: generationKey(), name: 'Рейтингу', value: 'RATING'},
        {id: generationKey(), name: 'Году', value: 'YEAR'},
        {id: generationKey(), name: 'Голосам', value: 'NUM_VOTE'},
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