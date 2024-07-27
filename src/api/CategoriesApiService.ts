import { Category } from "../models/common";
import { ApiService } from "./ApiService";

const CATEGORIES_URL = "/categories";

class CategoriesApiService extends ApiService {
  getCategories = async (userId: string) => {
    try {
      const {
        data: { categories },
      } = await this.fetch<{ categories: Category[] }>(CATEGORIES_URL, {
        params: { user_id: userId },
      });
      return categories;
    } catch (error) {
      console.error(error);
      return [];
    }
  };
}

export default new CategoriesApiService();
