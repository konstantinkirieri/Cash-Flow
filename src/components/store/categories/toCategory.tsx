import create, { State, StateCreator } from 'zustand';
import { devtools } from 'zustand/middleware'
import { Category } from "../../../model";

interface CategoryStore {
    categories: Category[],
    createCategory: (name: string, img: string) => void;
}

function isCategoryStore
(obj: any): obj is CategoryStore {
    return 'categories' in obj;
}

const localStorageUpdate = <T extends State>(config: StateCreator<T>):
StateCreator<T> => (set, get, api) => config((nextState, ...args) => {
    if (isCategoryStore(nextState)) {
        window.localStorage.setItem('categories', JSON.stringify(
            nextState.categories
        ));
    }
    set(nextState, ...args);
}, get, api);

const getCurrentState = () => {
    try {
        const currentState = (JSON.parse(window.localStorage.getItem
        ('categories') || '[]')) as Category[];
        return(currentState);
    } catch(err) {
        window.localStorage.setItem('categories', '[]');
    }

    return [];
}

export const useCategoryStore = create<CategoryStore>(localStorageUpdate(devtools((set, get) => ({
    categories: getCurrentState(),
    createCategory: (name, img) => {
        const { categories } = get();
        const newCategory = {
            id: Date.now(),
            typeId: Math.floor(Math.random() * 2) + 1,
            name,
            img
        }

        set({
            categories: [newCategory].concat(categories),
        })
    },
}))));