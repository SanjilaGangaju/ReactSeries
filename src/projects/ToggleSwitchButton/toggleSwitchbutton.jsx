import { useState } from "react";
import './toggleSwitchStyles.css';
const toggleSwitchButton =()=>{
    const [isOn, setIsOn] = useState(true);
const clickHandler=()=>{
    setIsOn(!isOn);
}
const BgColor= {backgroundColor: isOn? "black" : "white"};
const onOff= isOn ? "on": "off";
    return (
        <>
        <div className="toggle-switch-div" style={BgColor} onClick={clickHandler}>
            <div className={`toggle-switch ${onOff}`}>
                <span className="toggle-text">{isOn? "☽︎":"🔆"}</span>
            </div>
        </div>
        </>
    )
}

export default toggleSwitchButton;