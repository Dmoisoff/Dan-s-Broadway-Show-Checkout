export type Show = {
  price: number;
  name: string;
  id: number;
  note: string;
};

export type Shows = {
  [id: number]: Show;
};
