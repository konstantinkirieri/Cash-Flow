import { ImgHTMLAttributes } from "react";

export interface Category {
    id: number;
    typeId: number,
    img: string;
    name: string;
    // handleAdd: (e: React.FormEvent) => void;
    // onClick: () => void;
    // functionChildren: (name: string) => React.ReactNode;
}