import React, { useContext, /* useEffect */ } from 'react'
import { GlobalContext } from '../context/GlobalState';
import { Cell } from "./Cell";
import { TableauCell } from "./TableauCell";
import { Freecells } from './Freecells';
import { useEvent } from './useEvent';

export const Tableau = () => {
    // hooks
    const { deck, tableau, shuffleDeck, dealDeck } = useContext(GlobalContext);
    
    useEvent('load', dealDeck);
    //let shuffledDeck = shuffleDeck(deck);
    //console.log("tableau", tableau);

    return (
        <div className="container">
            <Freecells />
            <button onClick={() => dealDeck(deck)}>New Game</button>
            <div className="tableau">
                { 
                    tableau.map((card, index) => {
                        return <Cell key={'tid'+index} cell={index} cards={card} type="tableauCell" />
                    })
                }
            </div>
        </div>
    )
}
