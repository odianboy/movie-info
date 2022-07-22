import React, { FC } from "react";
import { Modal } from 'antd';

import { IModalFilter } from "../../types/IFilter";
import { ModalForm } from "./components/Modal-form/ModalForm";


export const ModalFilter: FC<IModalFilter> = (params: IModalFilter) => {
    return (
        <Modal
            title="Расширенный поиск"
            visible={params.isShowModal}
            onOk={params.toggleAccept}
            onCancel={params.toggleShow}
        >
            <ModalForm
                getFormValue={params.getFormValue}
                resetShowBadge={params.resetShowBadge}
            />
        </Modal>
    )
}