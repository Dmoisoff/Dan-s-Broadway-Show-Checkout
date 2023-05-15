export type Show = {
  price: number;
  name: string;
  id: number;
  note: string;
};

export type Shows = {
  [id: number]: Show;
};

export type Options = {
  value: number;
  label: number;
};
