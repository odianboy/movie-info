import React, {
    FC,
    useState,
    useEffect
} from "react";
import { Modal } from 'antd';

import { MovieSelect } from '../Select/Select';
import { IFilter, IModalFilter } from "../../types/IFilter";
import { API_URL } from "../../constants/api";
import { RoutesEnum } from "../../constants/routes";
import { getData } from "../../services/getData";


export const ModalFilter: FC<IModalFilter> = (params: IModalFilter) => {
    const { isShowModal, toggleShow, updateData, toggleAccept } = params;
    const [filterList, setFilterList] = useState<IFilter>({} as IFilter);

    useEffect(() => {
        getData(API_URL, RoutesEnum.Filters)
            .then(res => {
                const filters = res.data;
                
                setFilterList(filters);
            })
            .catch(err => {
                console.log(err);
            });
    }, [])
    
    return (
        <Modal
            title="Расширенный поиск"
            visible={isShowModal}
            onOk={toggleAccept}
            onCancel={toggleShow}
        >
            <MovieSelect
                genres={filterList.genres}
                updateData={updateData}
            />
        </Modal>
    )
}