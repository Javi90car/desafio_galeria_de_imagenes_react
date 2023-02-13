const Card = (props) => {

    return (
        <div className="card">
            <div className="">
                <img src={props.imgsrc} className="card-img"></img>
            </div>
            <div className="card-body">
                <h4 className="card-titulo">{props.titulo}</h4>
                <p className="card-descripcion">{props.descripcion}</p>
            </div>
        </div>
    );
};

export default Card;