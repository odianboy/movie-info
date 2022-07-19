export interface ISortMovie {
    id?: number;
    name?: string;
    value?: string;
    sortData?: (value: string) => void;
}