import cities from '../Data'
import City from './City'
function Main(){
    
    return (
        <div className="Main">
            {cities.map((cityData,index) =>{ return <City city={cityData} key={index} />})}
        </div>
    );
}
export default Main;