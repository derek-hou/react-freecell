import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import { Card } from "./Card";

export const Tableau = () => {
    const { deck } = useContext(GlobalContext);

    return (
        <>  
            <ul className="tableau">
                { deck.map(card => <Card key={card.id} card={card} />)}
            </ul>
        </>
    )
}
