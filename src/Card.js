import React from 'react'
import './App.css'

const Card = props => {
    return (
        <div className="card">
            <div className="card-body">
                <p>{props.name}</p>
                <p>{props.title}</p>
                <input type="text" onChange={props.onChangeInput} value={props.name}></input>
                <button onClick={props.onDelete}>Hapus</button>
            </div>
            
        </div>
    )
}

export default Card
