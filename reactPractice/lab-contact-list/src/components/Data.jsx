import Datas from '../Data/Contact.json'
import Contact from './Contact'
import '../style/Data.css'
function Data(){
    const {results}= Datas;
    return (
        <div className="Data">
            {results.map((contact, index)=><Contact contact={contact} key={index} />)}
        </div>
    );
}

export default Data;