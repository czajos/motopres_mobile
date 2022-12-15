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
}
