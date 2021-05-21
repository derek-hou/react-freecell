import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
//import { Cell } from "./Cell";

export const Card = ({ card }) => {
    const { drag, drop, allowDrop } = useContext(GlobalContext);

    return (
        <div id={card.id} className={card.top === true ? `top card` : `card`} draggable={card.top === true ? true : false} onDragStart={card.top === true ? (e) => drag(e) : null}>
            <span>{card.number}</span>
            <span>{card.suit}</span>
            <span>{card.color}</span>
            <div className="build" onDrop={(e) => drop(e, e.target)} onDragOver={(e) => allowDrop(e)}></div>
        </div>
    )
}
