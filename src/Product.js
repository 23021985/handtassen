function Product({ span, image, title, price}){
    return (<article className={"product"}>
        <img src={image} alt={title}/>
        <p>{title}</p>
        <span className={"article span"}>{span}</span>
        <h4 className={"price"}>{price}</h4>
    </article>)
}

export default Product;