import React, { FC, useEffect, useState } from 'react';
import {
    Button,
    DatePicker,
    Form,
    InputNumber
} from 'antd';

import { MovieSelect } from './components/Select/Select';

import { getData } from '../../../../services/getData';
import { RoutesEnum } from '../../../../constants/routes';
import { API_URL } from '../../../../constants/api';
import { IFilter, IModalFilter } from '../../../../types/IFilter';
import { IFormData } from '../../../../types/IHeader';

import styles from './ModalForm.module.scss'


export const ModalForm: FC<IModalFilter> = (props: IModalFilter) => {
    const { getFormValue, resetShowBadge } = props;

    const [form] = Form.useForm();
    const [disabledSave, setDisabledSave] = useState(false);
    const [filterList, setFilterList] = useState<IFilter>({} as IFilter);

    const { RangePicker } = DatePicker;

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

    const onFinish = (value: IFormData) => getFormValue(value);
    const onReset = () => {
        form.resetFields();

        getFormValue(form.getFieldsValue());
        resetShowBadge();
    };

    const onChangeGenre = (value: number) => {
        form.setFieldsValue({ genre: value })
    }

    const handleFormChange = () => {
        const hasErrors = form
            .getFieldsError()
            .some((field) => field.errors.length > 0);

        setDisabledSave(hasErrors);
    }

    return (
        <Form
            form={form}
            layout="vertical"
            initialValues={
                { remember: true }
            }
            onFinish={onFinish}
            onFieldsChange={handleFormChange}
        >
            <Form.Item
                label="Минимальный рейтинг:"
                name='ratingFrom'
                rules={[
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('ratingTo') > value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(new Error('Минимальное значение рейтинга, не может превышать максимального!'));
                        },
                    })
                ]}
            >
                <InputNumber min={1} max={10} />
            </Form.Item>

            <Form.Item
                label="Максимальный рейтинг:"
                name='ratingTo'
            >
                <InputNumber min={1} max={10} />
            </Form.Item>

            <Form.Item
                label="Временной промежуток:"
                name='years'
            >
                <RangePicker picker="year" />
            </Form.Item>

            <Form.Item
                label="Жанр:"
                name="genre"
            >
                <MovieSelect
                    genres={filterList.genres}
                    onChangeGenre={onChangeGenre}
                />
            </Form.Item>

            <Form.Item>
                <Button
                    className={styles.btn}
                    type="primary"
                    htmlType="submit"
                    disabled={disabledSave}
                >
                    Найти
                </Button>
                <Button
                    className={styles.btn}
                    htmlType="button"
                    onClick={onReset}
                >
                    Сбросить
                </Button>
            </Form.Item>
        </Form>
    )
}