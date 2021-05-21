import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import { Card } from './Card';

export const Cell = ({ cell, cards, type }) => {
    const { drop, allowDrop } = useContext(GlobalContext);
    
    /* console.log("cell", cell);
    console.log("cards", cards);
    console.log("type", type); */
    return (
        <div id={type === 'FreeCell' ? `fc` + cell : `tc` + cell} onDrop={(e) => drop(e, e.target)} onDragOver={(e) => allowDrop(e)}>
            { 
                cards.map((card, index) => {
                    return <Card key={index} card={card} cell={index} />
                })
            }
        </div>
    )
}
