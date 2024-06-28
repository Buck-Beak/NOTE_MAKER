import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import useFetch from "./useFetch";
import {useEffect, useState} from "react";
import { useRef } from "react";

const NoteDetails = () => {
    const {id} = useParams();
    const {data:notes} = useFetch('http://localhost:8000/notes/'+id);
    const history = useHistory();
    const textareaRef = useRef(null);
    const [newData,setNewData] = useState('');

    const handleDelete=() =>{
        fetch('http://localhost:8000/notes/'+notes.id,{
            method:'DELETE'
        }).then(()=>history.push('/'));
    };

    useEffect(()=>{
        if(textareaRef.current){
            textareaRef.current.style.height = 'auto'; //reset height to auto to get correct scroll height
            textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
        }
    },[notes]);

    const handleSave=()=>{
        fetch('http://localhost:8000/notes/'+notes.id,{
            method:'PUT',          //for updating
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({ ...notes, body: newData })
        }).then(()=>history.push('/'));
    }

    return ( 
        <div className="note-details">
            {notes && (
                <article>
                    <img src="/images/pin.png" alt="" />
                    <div className="title-body">
                        <h1>
                            {notes.title}
                        </h1>
                        <textarea
                            ref = {textareaRef}
                            defaultValue = {notes.body}
                            onInput ={(e)=>{
                                setNewData(e.target.value);
                                textareaRef.current.style.height = 'auto';
                                textareaRef.current.style.height = textareaRef.current.scrollHeight+'px';
                            }}
                        >
                        </textarea>
                    </div>
                    <div className="buttons">
                        <button onClick={handleSave}>Save Note</button>
                        <button onClick={handleDelete}>Delete Note</button>
                    </div> 
                </article>
            )}
        </div>
     );
}
 
export default NoteDetails;