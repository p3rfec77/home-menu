export interface Dish {
  title: string;
  description: string;
}

export interface MenuCategory {
  titile: string;
  dishes: Dish[];
}
