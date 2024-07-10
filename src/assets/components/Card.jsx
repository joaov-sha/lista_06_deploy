function Card(props){

    return(
        <>
            <div className="card">
                <a href="#">
                    {props.texto}
                </a>
            </div>
        </>
    )
}

export default Card