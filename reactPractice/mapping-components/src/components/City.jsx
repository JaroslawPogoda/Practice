

function City(props){
    const {city}=props
    
    return (
        <div className="City">
            <p>County: {city.country}</p>
            <p>Capital: {city.capitol}</p>
            <p>Population: {city.population}</p>
            <p>Language: {city.language}</p>
        </div>
    );
}
export default City;