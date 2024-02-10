import { defineStore } from "pinia";

import type { IDish, IMenuCategory } from "../types";

interface IMenuStore {
  categories: IMenuCategory[];
}

const useMenuStore = defineStore("menu", {
  state: (): IMenuStore => ({
    categories: [
      { titile: "Завтраки", dishes: [{ title: "asaad" }, { title: "asd" }] },
      { titile: "Закуски", dishes: [] },
      { titile: "Салаты", dishes: [] },
      { titile: "Супы", dishes: [] },
      { titile: "Горячие блюда", dishes: [] },
      { titile: "Гарниры", dishes: [] },
      { titile: "Десерты", dishes: [] },
    ],
  }),
  actions: {
    addDish(dish: IDish, categoryTitle: string) {
      const categoryForAdding = this.categories.find(
        (category) => category.titile === categoryTitle
      );
      this.categories.forEach((category) => {
        if (category === categoryForAdding) {
          category.dishes.push(dish);
        }
      });
    },
  },
});

export default useMenuStore;
