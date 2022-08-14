const Card = (props) => {
    let style = {
        width: '15rem',
        heigth: '7rem',
    }

    let imgStyle = props.flip? ({transform: 'rotate(180deg)'}) : {}
    
 
    return (
        <div className="col-auto mb-3">
        <div className="card" style={style}>
        <img className="card-img-top" src={props.img} alt="Card cap" style={imgStyle}/>
        <div className="card-body">
            <h5 className="card-title text-center">{props.title}</h5>
            <p className="card-text small">{props.flip? props.descr[1]: props.descr[0]}</p>
        </div>
        </div>
        </div>
    )
}



export default Card