import "../Category/category.scss";
import { Category } from "../../model";

export const ItemCategory: React.FC<Category> = ({
    id,
    typeId,
    name,
    img
}) => {
    return (
        <div className="cat-item" key={id}>
            <div className="cat-icon">
                <img src={img} alt=""/>
            </div>
            <p className="cat-name">{name}</p>
        </div>
    )
}