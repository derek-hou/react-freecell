import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
//import { Cell } from "./Cell";

export const Card = ({ card }) => {
    const { drag, drop, allowDrop } = useContext(GlobalContext);

    return (
        <div id={card.id} draggable="true" onDragStart={(e) => drag(e)} onDrop={(e) => drop(e)} onDragOver={(e) => allowDrop(e)}>
            <span>{card.number}</span>
            <span>{card.suit}</span>
            <span>{card.color}</span>
        </div>
    )
}
