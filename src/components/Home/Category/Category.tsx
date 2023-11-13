import classes from "./Category.module.css";
import CategoryItem from "./CategoryItem/CategoryItem";
// import sr from '../../../assets'


export default function Category() {
    const category = [
        {category: 'Accessories', imgPath: 'assets/category/accessories.png'},
        {category: 'Camera', imgPath: 'assets/category/camera.png'},
        {category: 'Laptop', imgPath: 'assets/category/laptop.png'},
        {category: 'Smart Phone', imgPath: 'assets/category/smart-phone.png'},
        {category: 'Gaming', imgPath: 'assets/category/gaming.png'},
        {category: 'Smart Watch', imgPath: 'assets/category/smart-watch.png'},
    ];

    return (
        <section className={classes.wrapper}>
            {category.map(
                (data, i) => <CategoryItem
                    key={i}
                    category={data.category}
                    path={data.imgPath}
                />)}
        </section>
    )
}