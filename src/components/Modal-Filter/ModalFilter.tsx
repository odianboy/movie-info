import React, {
    FC,
    useState,
    useEffect
} from "react";
import { Modal } from 'antd';
import axios from 'axios';

import { MovieSelect } from '../Select/Select';
import { IFilter, IModalFilter } from "../../types/IFilter";
import { API_KEY, API_URL } from "../../constants/api";
import { RoutesEnum } from "../../constants/routes";


export const ModalFilter: FC<IModalFilter> = (params: IModalFilter) => {
    const {isShowModal, toggleShow, updateData, toggleAccept} = params;
    const [filterList, setFilterList] = useState<IFilter>({} as IFilter);

    const getMovieFilterList = () => {
        return axios.get(`${API_URL}${RoutesEnum.Filters}`, {
            headers: {
            'X-API-KEY': API_KEY,
            }
        })
        .then(res => {
            const filters = res.data;
            console.log('Запрос для списка фильтров');
            
            setFilterList(filters);
        })
    }

    useEffect(() => {
        getMovieFilterList()
    }, [])
    
    return (
        <Modal
            title="Расширенный поиск"
            visible={isShowModal}
            onOk={toggleAccept}
            onCancel={toggleShow}
        >
            <MovieSelect genres={filterList.genres} updateData={updateData}/>
        </Modal>
    )
}