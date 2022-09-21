const initialState = 0;

const changeCounter = (counter = initialState, action) => {
    switch(action.type){
    case "Increment": return counter + 1;
    case "Decrement": return counter - 1;
    case 'Reset': return 0
    default: return counter;
    }
  };
  export default changeCounter;
