function Tile({title, image, story }){
    return (<section>
        <h2>{title}</h2>
        <img src={image}/>
        <p>{story}</p>

    </section> )
}



export default Tile;