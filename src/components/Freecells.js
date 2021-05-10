import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import { Cell } from "./Cell";

export const Freecells = () => {
    const { freecells } = useContext(GlobalContext);
    //let numfreecells;

    /* if(freecells.length === 0) {
        for(const i = 0; i < numfreecells; i++) {
        }
    } */

    return (
        <div className="freecells">
            { freecells.map((cell, index) => <Cell key={'fid'+index} cell={index} cards={[]} type="freeCell" />) }
        </div>
    )
}
