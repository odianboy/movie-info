import moment, { Moment } from "moment"

export const getDateFormat = (value: Moment) => {
    return moment(value).format('YYYY');
}