export type Show = {
  price: number;
  name: string;
  id: number;
  note: string;
};

export type Shows = {
  [id: number]: Show;
};

export type Option = {
  value: number;
  label: number;
};

export type OrderData = {
  card: string;
  name: string;
  cvv: string;
  expiry: string;
  show: Option;
  terms: boolean;
  ticketQuantity: Option;
};
