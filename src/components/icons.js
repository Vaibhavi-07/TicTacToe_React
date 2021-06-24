import React from "react"
import {FaTimes , FaRegCircle , FaPen} from "react-icons/fa"    /// all icons start with Fa.. from /fa 

const Icon = ({name}) => {          //// {name} or (props.name)
    // return(
    //     <h1> <FaTimes className = "icon" /></h1>
    // )

    switch (name) {
        case 'circle':
            return <FaRegCircle  className = "icons" />
        case 'cross':
            return <FaTimes  className = "icons" />    
        default:
            return <FaPen  className = "icons" />
           
    }
}

export default Icon;