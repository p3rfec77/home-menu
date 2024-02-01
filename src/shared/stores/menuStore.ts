import { defineStore } from "pinia";

import type { IMenuCategory } from "../types";

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
});

export default useMenuStore;
