import { useState } from "react";
import { IoIosSwitch } from "react-icons/io"; 
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

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
        <h1>ToggleSwitch <IoIosSwitch></IoIosSwitch></h1>
        <div className="toggle-switch-div" style={BgColor} onClick={clickHandler}>
            <div className={`toggle-switch ${onOff}`}>
                <span className="toggle-text">{isOn? <MdOutlineDarkMode />: <MdOutlineLightMode />}</span>
            </div>
        </div>
        </>
    )
}

export default toggleSwitchButton;