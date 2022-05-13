import "../Category/category.scss";

interface CategoryProps {
    id: number,
    name: string,
    img: string
}

export const ItemCategory: React.FC<CategoryProps> = ({
    id,
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