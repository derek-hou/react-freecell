import React, { createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

// initial state
const initialState = {
    deck : [
        {
            id : '0ADR',
            number: 1,
            suit: 'D',
            color : 'R',
            top : false
        },
        {
            id : '12DR',
            number: 2,
            suit: 'D',
            color : 'R',
            top : false
        },
        {
            id : '23DR',
            number: 3,
            suit: 'D',
            color : 'R',
            top : false
        },
        {
            id : '34DR',
            number: 4,
            suit: 'D',
            color : 'R',
            top : false
        },
        {
            id : '45DR',
            number: 5,
            suit: 'D',
            color : 'R',
            top : false
        },
        {
            id : '56DR',
            number: 6,
            suit: 'D',
            color : 'R',
            top : false
        },
        {
            id : '67DR',
            number: 7,
            suit: 'D',
            color : 'R',
            top : false
        },
        {
            id : '78DR',
            number: 8,
            suit: 'D',
            color : 'R',
            top : false
        },
        {
            id : '89DR',
            number: 9,
            suit: 'D',
            color : 'R',
            top : false
        },
        {
            id : '910DR',
            number: 10,
            suit: 'D',
            color : 'R',
            top : false
        },
        {
            id : '10JDR',
            number: 11,
            suit: 'D',
            color : 'R',
            top : false
        },
        {
            id : '11QDR',
            number: 12,
            suit: 'D',
            color : 'R',
            top : false
        },
        {
            id : '12KDR',
            number: 13,
            suit: 'D',
            color : 'R',
            top : false
        },
        {
            id : '13ACB',
            number: 1,
            suit: 'C',
            color : 'B',
            top : false
        },
        {
            id : '142CB',
            number: 2,
            suit: 'C',
            color : 'B',
            top : false
        },
        {
            id : '153CB',
            number: 3,
            suit: 'C',
            color : 'B',
            top : false
        },
        {
            id : '164CB',
            number: 4,
            suit: 'C',
            color : 'B',
            top : false
        },
        {
            id : '175CB',
            number: 5,
            suit: 'C',
            color : 'B',
            top : false
        },
        {
            id : '186CB',
            number: 6,
            suit: 'C',
            color : 'B',
            top : false
        },
        {
            id : '197CB',
            number: 7,
            suit: 'C',
            color : 'B',
            top : false
        },
        {
            id : '208CB',
            number: 8,
            suit: 'C',
            color : 'B',
            top : false
        },
        {
            id : '219CB',
            number: 9,
            suit: 'C',
            color : 'B',
            top : false
        },
        {
            id : '2210CB',
            number: 10,
            suit: 'C',
            color : 'B',
            top : false
        },
        {
            id : '23JCB',
            number: 11,
            suit: 'C',
            color : 'B',
            top : false
        },
        {
            id : '24QCB',
            number: 12,
            suit: 'C',
            color : 'B',
            top : false
        },
        {
            id : '25KCB',
            number: 13,
            suit: 'C',
            color : 'B',
            top : false
        },
        {
            id : '26AHR',
            number: 1,
            suit: 'H',
            color : 'R',
            top : false
        },
        {
            id : '272HR',
            number: 2,
            suit: 'H',
            color : 'R',
            top : false
        },
        {
            id : '283HR',
            number: 3,
            suit: 'H',
            color : 'R',
            top : false
        },
        {
            id : '294HR',
            number: 4,
            suit: 'H',
            color : 'R',
            top : false
        },
        {
            id : '305HR',
            number: 5,
            suit: 'H',
            color : 'R',
            top : false
        },
        {
            id : '316HR',
            number: 6,
            suit: 'H',
            color : 'R',
            top : false
        },
        {
            id : '327HR',
            number: 7,
            suit: 'H',
            color : 'R',
            top : false
        },
        {
            id : '338HR',
            number: 8,
            suit: 'H',
            color : 'R',
            top : false
        },
        {
            id : '349HR',
            number: 9,
            suit: 'H',
            color : 'R',
            top : false
        },
        {
            id : '3510HR',
            number: 10,
            suit: 'H',
            color : 'R',
            top : false
        },
        {
            id : '36JHR',
            number: 11,
            suit: 'H',
            color : 'R',
            top : false
        },
        {
            id : '37QHR',
            number: 12,
            suit: 'H',
            color : 'R',
            top : false
        },
        {
            id : '38KHR',
            number: 13,
            suit: 'H',
            color : 'R',
            top : false
        },
        {
            id : '39ASB',
            number: 1,
            suit: 'S',
            color : 'B',
            top : false
        },
        {
            id : '402SB',
            number: 2,
            suit: 'S',
            color : 'B',
            top : false
        },
        {
            id : '413SB',
            number: 3,
            suit: 'S',
            color : 'B',
            top : false
        },
        {
            id : '424SB',
            number: 4,
            suit: 'S',
            color : 'B',
            top : false
        },
        {
            id : '435SB',
            number: 5,
            suit: 'S',
            color : 'B',
            top : false
        },
        {
            id : '446SB',
            number: 6,
            suit: 'S',
            color : 'B',
            top : false
        },
        {
            id : '457SB',
            number: 7,
            suit: 'S',
            color : 'B',
            top : false
        },
        {
            id : '468SB',
            number: 8,
            suit: 'S',
            color : 'B',
            top : false
        },
        {
            id : '479SB',
            number: 9,
            suit: 'S',
            color : 'B',
            top : false
        },
        {
            id : '4810SB',
            number: 10,
            suit: 'S',
            color : 'B',
            top : false
        },
        {
            id : '49JSB',
            number: 11,
            suit: 'S',
            color : 'B',
            top : false
        },
        {
            id : '50QSB',
            number: 12,
            suit: 'S',
            color : 'B',
            top : false
        },
        {
            id : '51KSB',
            number: 13,
            suit: 'S',
            color : 'B',
            top : false
        }
    ],
    tableau : [[], [], [], [], [], [], [], []],
    freecells : [{}, {}, {}, {}],
    wincells : [{}, {}, {}, {}],
    builder : []
}

/* let hasChildNode = (node) => {
    if(node.childNodes === null) {
        return false;
    }
} */

// create context - bring this into other files and components to use it
export const GlobalContext = createContext(initialState);

// Provider component - so we can import into App.js
export const GlobalProvider = ({ children }) => { // children is destructured
    const [state, dispatch] = useReducer(AppReducer, initialState); // reducer uses dispatch
    var parentNode;
    var draggedNode;

    let shuffleDeck = () => {
        dispatch({
            type: 'SHUFFLE_DECK'
        });
    }

    let dealDeck = () => {
        dispatch({
            type: 'DEAL_DECK'
        });
    }

    // https://stackoverflow.com/a/27005502
    let allowDrop = (e) => {
        console.log("allowDropDragged",draggedNode);
        console.log("allowDropDraggedR",draggedNode.indexOf("B", draggedNode.length-1));
        e.preventDefault();
        console.log("allowDrop-e.target.offsetParent.id",e.target.offsetParent.id);
        console.log("allowDrop-e.target.offsetParent.idR",e.target.offsetParent.id.indexOf("B", e.target.offsetParent.id.length-1));

        if(e.target.offsetParent.id.indexOf("R", e.target.offsetParent.id.length-1) > 0 && draggedNode.indexOf("R", draggedNode.length-1) > 0) {
            e.dataTransfer.dropEffect = "none"; // dropping is not allowed
        } else if(e.target.offsetParent.id.indexOf("B", e.target.offsetParent.id.length-1) > 0 && draggedNode.indexOf("B", draggedNode.length-1) > 0) {
            e.dataTransfer.dropEffect = "none"; // dropping is not allowed
        } else if (e.target.getAttribute("draggable") === "true") {
            e.dataTransfer.dropEffect = "none"; // dropping is not allowed
        } else {
            e.dataTransfer.dropEffect = "all"; // dropping is allowed
        }
    }

    let drag = (e) => {
        draggedNode = e.target.id;
        e.dataTransfer.setData("text", draggedNode);
        console.log("draggedId", draggedNode);
        /* dispatch({
            type: 'BLOCK_FREECELL',
            payload: e.target.id
        }); */
    }

    /* let drop = (e) => {
        console.log("drop",e);
        e.preventDefault();
        var data = e.dataTransfer.getData("text");
        console.log("data",data);
        console.log("id",e.target.id);
        if(e.target.offsetParent.id !== data) { // stop from dragging card onto itself
            e.target.appendChild(document.getElementById(data));
        }
    } */

    let drop = (e, el) => {
        console.log("drop",e);
        //console.log("element",el);
        e.preventDefault();
        e.stopPropagation();
        var data = e.dataTransfer.getData("text");
        console.log("data",data);
        console.log("parentid",e.target.offsetParent.id);
        
        if(e.target.offsetParent.id !== data) { // stop from dragging card onto itself
            el.appendChild(document.getElementById(data));
        }
    }

    // value property uses an object
    return (
    <GlobalContext.Provider value={{ // allows for tracks to be passed to deeper components        
        deck: state.deck,
        freecells: state.freecells,
        tableau: state.tableau,
        shuffleDeck: shuffleDeck,
        dealDeck: dealDeck,
        drop: drop,
        drag: drag,
        allowDrop: allowDrop
    }}>
    {children}
    </GlobalContext.Provider>);
}