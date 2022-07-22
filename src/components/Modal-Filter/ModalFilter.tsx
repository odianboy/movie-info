import React, { FC } from "react";
import { Modal } from 'antd';

import { IModalFilter } from "../../types/IFilter";
import { ModalForm } from "../Modal-form/ModalForm";


export const ModalFilter: FC<IModalFilter> = (params: IModalFilter) => {
    const { isShowModal, toggleShow, toggleAccept, getFormValue, resetShowBadge } = params;

    return (
        <Modal
            title="Расширенный поиск"
            visible={isShowModal}
            onOk={toggleAccept}
            onCancel={toggleShow}
        >
            <ModalForm
                getFormValue={getFormValue}
                resetShowBadge={resetShowBadge}
            />
        </Modal>
    )
}