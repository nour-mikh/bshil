const RecomRest = (props) => {
    return(
        <>
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-100">
            <img className="w-full" src={props.img}/>
            <div className="px-6 py-4 ">
                <div className="font-bold text-xl mb-2">{props.title}</div>
                <p className="text-gray-700 text-base">
                {props.desc}
                </p>
            </div>
        </div>
        </>
    )
}

export default RecomRest;