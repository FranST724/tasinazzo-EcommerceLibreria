const Item = ({prod}) => {
    return (<div key={prod.id}>
        <h1>{prod.id}</h1>
        <div>
            <img src={prod.foto}/>
        </div>
    </div>)
}

export default Item