import React,{useState} from 'react'
import AddIcon from "@material-ui/icons/Add"
import styles from './Style.css';
import Zoom from "@material-ui/core/Zoom"


const Notetext = (props) => {
    const [isExpanded,setExpanded] = useState(false)

    const [note,setNote] = useState({
        title:"",
        content:""
    })

    function handleChange(event){
        const {name , value} =event.target;

        setNote(prevNote => {
            return  {
                ...prevNote,
                [name]:value
            }
        })
    }


    function SubmitNote(event){
        props.onAdd(note);
        setNote({
            title:"",
            content:""
        })
        event.preventDefault();
    }

    function expand(){
        setExpanded(true)
    }
    return (
        <div>
            <form>
                {isExpanded ? 
                <input name="title" onChange={handleChange} value={note.title} placeholder="Title" />
                    : null}
                <textarea name="content" onClick={expand}
                 onChange={handleChange} value={note.content} placeholder="Write a note..." rows={isExpanded ? 3 : 1} />
                
                <Zoom in={isExpanded}>
                <button onClick={SubmitNote}>
                    <AddIcon />
                </button>
                </Zoom>
            </form>
        </div>
    )
}

export default Notetext
