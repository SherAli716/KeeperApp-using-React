import React from 'react'
import styles from './Style.css';
import Notes from './notes.js'
import DeteleIcon from "@material-ui/icons/Delete"

const Note = (props) => {

    // console.log(notes.title)
    function handleClick(){
        props.onDelete(props.id);
    }


    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={handleClick}>
                <DeteleIcon />
            </button>

        </div>
    )
}

export default Note
