import React, {useState} from 'react';
function clickButton(){
    const [count, setCount] = useState(0);

    function handleClick(){
        setCount(count+1);
    }
    function handleReset(){
        setCount(0);
    }
    return (
        <>
        {count > 5 ? (<button onClick={handleReset}>Reset</button>): (<button onClick={handleClick}>You clicked me {count} {count ===1 ? 'time' : 'times'}</button>)
}
        </>
    )
}
export default clickButton;