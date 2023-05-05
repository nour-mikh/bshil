const RecomRest = (props) => {
    return(
        <>
        <div id="recomRest" >
            <img src={props.img}/>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
        </>
    )
}

export default RecomRest;