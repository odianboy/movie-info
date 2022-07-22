import React, { FC } from "react";
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from "antd";

import styles from './Loader.module.scss';

export const Loader: FC = () => {
    const antIcon = <LoadingOutlined className={styles.loader} spin />;

    return (
        <Spin indicator={antIcon} />
    );
}