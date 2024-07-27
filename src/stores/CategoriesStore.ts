import { create } from "zustand";
import { Category } from "../models/common";

import CategoriesApiService from "../api/CategoriesApiService";

type State = {
  categories: Category[];
};

type Action = {
  getCategories: (userId: string) => Promise<void>;
};

const useCategoriesInfoStore = create<State & Action>((set) => ({
  categories: [],
  getCategories: async (userId: string) => {
    const categories = await CategoriesApiService.getCategories(userId);
    set(() => ({
      categories,
    }));
  },
}));

export default useCategoriesInfoStore;
