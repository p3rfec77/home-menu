import { defineStore } from "pinia";

import type { MenuCategory } from "../types";

interface IMenuStore {
  categories: MenuCategory[];
}

export const useMenuStore = defineStore("menu", {
  state: (): IMenuStore => ({
    categories: [
      { titile: "Завтраки", dishes: [] },
      { titile: "Закуски", dishes: [] },
      { titile: "Салаты", dishes: [] },
      { titile: "Супы", dishes: [] },
      { titile: "Горячие блюда", dishes: [] },
      { titile: "Гарниры", dishes: [] },
      { titile: "Десерты", dishes: [] },
    ],
  }),
});
