export interface OrdersI {
    id:number | string;
    condition:string;
    collect_date:string | Date;
    part:string;
    band_number:number | string;
    indexx:number | string;
    company:string;
    note:string;
    price:number | string;
    deposit:boolean;
    fv:boolean;
}
export interface OrdersDoneI {
    id:number | string;
    condition:string;
    collect_date:string | Date;
    part:string;
    band_number:number | string;
    indexx:number | string;
    company:string;
    note:string;
    price:number | string;
    deposit:boolean;
    fv:boolean;
}
