import NotesList from "./NotesList";
import useFetch from "./useFetch";

const Home = () => {
    const {data:notes} = useFetch('http://localhost:8000/notes');
    return ( 
        <div className="home">
            <p>All Notes <img src="/images/sticky-notes.png"/></p>
            {notes && <NotesList notes={notes}/>}
        </div>
     );
}
 
export default Home;