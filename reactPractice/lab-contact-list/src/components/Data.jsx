import Datas from '../Data/Contact.json'
import Contact from './Contact'
import Footer from './Footer'
import '../style/Data.css'
function Data(){
    const {results}= Datas;
    return (
        <div className="Data">
            {results.map((contact, index)=><Contact contact={contact} key={index} />)}
            <Footer/>
        </div>
    );
}

export default Data;