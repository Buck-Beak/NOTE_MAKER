import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');
    const history = useHistory();

    const handleSubmit = (e)=>{
        e.preventDefault();
        const note = {title,body};
        fetch('http://localhost:8000/notes',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(note)
        })
        .then(()=>{
            history.push('/');
        });
    }
    return ( 
        <div className="create">
            <form onSubmit={handleSubmit} className="items">
                <label>Note Title</label>
                <input 
                    type="text" 
                    required
                    value={title}
                    onChange ={(e)=>setTitle(e.target.value)}
                />
                <label>Note Body</label>
                <textarea
                    value={body}
                    required
                    onChange={(e)=>setBody(e.target.value)}
                ></textarea>
                <button>Add Note</button>
            </form>
        </div>
     );
}
 
export default Create;