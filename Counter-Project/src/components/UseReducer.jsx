import { useReducer } from "react";

const init = {state: 1, state2: 2};


function outerFunction(state, action){
    const obj = {...state};
    switch (action){
        case "INC": obj.state++; break;
        case "DEC": obj.state--; break;
        case "INC1": obj.state2++; break;
        case "DEC1": obj.state2--; break;
    }
    return obj;
}

function Example(){
    const [state, dispatch] = useReducer(outerFunction, init);

    return (<>
        <div>{state.state}</div>
        <div>{state.state2}</div>
        <button onClick={() => dispatch("INC")}>Inc</button>
        <button onClick={() => dispatch("DEC")}>Dnc</button>
        <button onClick={() => dispatch("INC2")}>Inc 2</button>
        <button onClick={() => dispatch("DEC2")}>Dnc 2</button>
    </>)
}

export default Example;

