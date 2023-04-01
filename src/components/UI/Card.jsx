import React from 'react'

function Card({data}) {

    return (
        <div className="card " style={{width:"18rem"}} >
            <img className="card-img-top" src={data.url} alt="Title" />
                <div className="card-body">
                    <h4 className="card-title">{data.name}</h4>
                    <p className="card-text">{data.price}</p>
                    <p className="card-text">{data.category}</p>
                </div>
        </div>
    )
}

export default Card