import classes from './CategoryItem.module.css'

export default function CategoryItem(props: any) {
    return (
        <div className={classes.item} tabIndex={0}>
            <img src={props.path} alt={props.category}/>
            <p>{props.category}</p>
        </div>
    )
}