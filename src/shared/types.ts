export interface IDish {
  title: string;
  description?: string;
}

export interface IMenuCategory {
  titile: string;
  dishes: IDish[];
}
