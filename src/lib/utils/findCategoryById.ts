import { categories } from "@/data/mockData";

export function findCategoryById(categoryId: string) {
  return categories.find((cat) => cat.categoryId === categoryId) || null;
}
