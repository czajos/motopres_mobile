export namespace AddOrder {
  export interface AddOrderStateI {
    data: {
      part: Part;
      band_number: BandNumber;
      indexx: Indexx;
      company: Company;
      note: Note;
      day: Day;
      month: Month;
      year: Year;
      time_morning:TimeMorning;
      fv:Invoice,
    };
  }

  export interface AddOrderNewStateI {
    data: {
      part: Part;
      band_number: BandNumber;
      indexx: Indexx;
      company: Company;
      price:Price;
      note: Note;
      day: Day;
      month: Month;
      year: Year;
      fv:Invoice,
      deposit:Deposit
    };
  }

  export type Part = string;
  export type BandNumber = string | number;
  export type Indexx = number;
  export type Company = string;
  export type Note = string;
  export type Day = string;
  export type Month = number | string;
  export type Year = number | string;
  export type Price = number | string;
  export type Invoice=boolean
  export type Deposit=boolean
  export type TimeMorning=boolean

}
