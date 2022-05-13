import create from 'zustand';
import { Category } from "../../../model";


interface CategoryStore {
    categories: Category[],
    createCategory: (name: string, img: string) => void;
}

export const useCategoryStore = create<CategoryStore>((set, get) => ({
    categories: [],
    createCategory: (name, img) => {
        const { categories } = get();
        const newCategory = {
            id: Date.now(),
            typeId: Date.now(),
            name,
            img
        }

        set({
            categories: [newCategory].concat(categories),
        })
    },
}))