import React, { createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

// initial state
const initialState = {
    deck : [
        {
            id : '0ADR',
            number: 1,
            suit: 'D',
            color : 'R'
        },
        {
            id : '12DR',
            number: 2,
            suit: 'D',
            color : 'R'
        },
        {
            id : '23DR',
            number: 3,
            suit: 'D',
            color : 'R'
        },
        {
            id : '34DR',
            number: 4,
            suit: 'D',
            color : 'R'
        },
        {
            id : '45DR',
            number: 5,
            suit: 'D',
            color : 'R'
        },
        {
            id : '56DR',
            number: 6,
            suit: 'D',
            color : 'R'
        },
        {
            id : '67DR',
            number: 7,
            suit: 'D',
            color : 'R'
        },
        {
            id : '78DR',
            number: 8,
            suit: 'D',
            color : 'R'
        },
        {
            id : '89DR',
            number: 9,
            suit: 'D',
            color : 'R'
        },
        {
            id : '910DR',
            number: 10,
            suit: 'D',
            color : 'R'
        },
        {
            id : '10JDR',
            number: 11,
            suit: 'D',
            color : 'R'
        },
        {
            id : '11QDR',
            number: 12,
            suit: 'D',
            color : 'R'
        },
        {
            id : '12KDR',
            number: 13,
            suit: 'D',
            color : 'R'
        },
        {
            id : '13ACB',
            number: 1,
            suit: 'C',
            color : 'B'
        },
        {
            id : '142CB',
            number: 2,
            suit: 'C',
            color : 'B'
        },
        {
            id : '153CB',
            number: 3,
            suit: 'C',
            color : 'B'
        },
        {
            id : '164CB',
            number: 4,
            suit: 'C',
            color : 'B'
        },
        {
            id : '175CB',
            number: 5,
            suit: 'C',
            color : 'B'
        },
        {
            id : '186CB',
            number: 6,
            suit: 'C',
            color : 'B'
        },
        {
            id : '197CB',
            number: 7,
            suit: 'C',
            color : 'B'
        },
        {
            id : '208CB',
            number: 8,
            suit: 'C',
            color : 'B'
        },
        {
            id : '219CB',
            number: 9,
            suit: 'C',
            color : 'B'
        },
        {
            id : '2210CB',
            number: 10,
            suit: 'C',
            color : 'B'
        },
        {
            id : '23JCB',
            number: 11,
            suit: 'C',
            color : 'B'
        },
        {
            id : '24QCB',
            number: 12,
            suit: 'C',
            color : 'B'
        },
        {
            id : '25KCB',
            number: 13,
            suit: 'C',
            color : 'B'
        },
        {
            id : '26AHR',
            number: 1,
            suit: 'H',
            color : 'R'
        },
        {
            id : '272HR',
            number: 2,
            suit: 'H',
            color : 'R'
        },
        {
            id : '283HR',
            number: 3,
            suit: 'H',
            color : 'R'
        },
        {
            id : '294HR',
            number: 4,
            suit: 'H',
            color : 'R'
        },
        {
            id : '305HR',
            number: 5,
            suit: 'H',
            color : 'R'
        },
        {
            id : '316HR',
            number: 6,
            suit: 'H',
            color : 'R'
        },
        {
            id : '327HR',
            number: 7,
            suit: 'H',
            color : 'R'
        },
        {
            id : '338HR',
            number: 8,
            suit: 'H',
            color : 'R'
        },
        {
            id : '349HR',
            number: 9,
            suit: 'H',
            color : 'R'
        },
        {
            id : '3510HR',
            number: 10,
            suit: 'H',
            color : 'R'
        },
        {
            id : '36JHR',
            number: 11,
            suit: 'H',
            color : 'R'
        },
        {
            id : '37QHR',
            number: 12,
            suit: 'H',
            color : 'R'
        },
        {
            id : '38KHR',
            number: 13,
            suit: 'H',
            color : 'R'
        },
        {
            id : '39ASB',
            number: 1,
            suit: 'S',
            color : 'B'
        },
        {
            id : '402SB',
            number: 2,
            suit: 'S',
            color : 'B'
        },
        {
            id : '413SB',
            number: 3,
            suit: 'S',
            color : 'B'
        },
        {
            id : '424SB',
            number: 4,
            suit: 'S',
            color : 'B'
        },
        {
            id : '435SB',
            number: 5,
            suit: 'S',
            color : 'B'
        },
        {
            id : '446SB',
            number: 6,
            suit: 'S',
            color : 'B'
        },
        {
            id : '457SB',
            number: 7,
            suit: 'S',
            color : 'B'
        },
        {
            id : '468SB',
            number: 8,
            suit: 'S',
            color : 'B'
        },
        {
            id : '479SB',
            number: 9,
            suit: 'S',
            color : 'B'
        },
        {
            id : '4810SB',
            number: 10,
            suit: 'S',
            color : 'B'
        },
        {
            id : '49JSB',
            number: 11,
            suit: 'S',
            color : 'B'
        },
        {
            id : '50QSB',
            number: 12,
            suit: 'S',
            color : 'B'
        },
        {
            id : '51KSB',
            number: 13,
            suit: 'S',
            color : 'B'
        }
    ],
    tableau : [],
    freecells : [],
    wincells : [],
    builder : []
}

// create context - bring this into other files and components to use it
export const GlobalContext = createContext(initialState);

// Provider component - so we can import into App.js
export const GlobalProvider = ({ children }) => { // children is destructured
    const [state/* , dispatch */] = useReducer(AppReducer, initialState); // reducer uses dispatch

    /* let randomize = () => {
        state.
    } */

    // value property uses an object
    return (
    <GlobalContext.Provider value={{ // allows for tracks to be passed to deeper components        
        deck: state.deck
    }}>
    {children}
    </GlobalContext.Provider>);
}