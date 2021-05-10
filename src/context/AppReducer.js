/**
 * Shuffle an array using Fisher-Yates algorithm
 * https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
 */
let shuffle = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;
    
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
    
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
    
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    
    return array;
}

/**
 * 
 * @param {*} state - this is the full state
 * @param {*} action - the dispatch object contains the actions
 * @returns - a new state
 */
const appReducer = (state, action) => {
    let copyState = { ...state }

    switch(action.type) { 
        // case 'TOGGLE_BEAT':
        //     const copyState = { ...state };
        //     copyState.tracks[action.payload.id-1].beats[action.payload.index].selected = !state.tracks[action.payload.id-1].beats[action.payload.index].selected;
        //     //console.log(copyState)
        //     return copyState;

        case 'SHUFFLE_DECK':
            console.log("shuffle");
            copyState.deck = shuffle(copyState.deck);
            //console.log(copyState);
            return copyState;
        case 'DEAL_DECK':
            copyState.deck = shuffle(copyState.deck);

            for(let j=0; j<copyState.tableau.length;j++) {
                copyState.tableau[j] = []; // reset the array to empty
            }

            let i=0;
            while(i<copyState.deck.length) {
                for(let j=0; j<copyState.tableau.length;j++) {
                    if (copyState.deck[i]) {
                        copyState.tableau[j].push(copyState.deck[i]); // copy the card from the deck to tableau
                    }
                    i++; // go to the next card                   
                }
            }
            //console.log("DEAL_DECK", copyState);
            return copyState;
        case 'BLOCK_FREECELL':
            //console.log("block freecell");
            //copyState.deck = shuffle(copyState.deck);
            //console.log(copyState);
            return;
        default:
            return state;
    }
}

export default appReducer;