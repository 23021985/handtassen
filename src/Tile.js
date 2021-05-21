function Tile({title, image, story, TheBrand}){
    return (<section>
        <h2>{title}</h2>
        <img src={image} alt={TheBrand} />
        <p>{story}</p>

    </section> )
}



export default Tile;