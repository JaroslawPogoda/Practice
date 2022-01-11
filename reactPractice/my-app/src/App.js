import Product from './components/Product'
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
      < Product title="Apple AirPods" description="Lorem ipsum dolor sit amet, graecis intellegat pertinacia cum et" 
      imgurl="https://cdn0.iconfinder.com/data/icons/household-items-2/100/airpod2-512.png"/>
      <Product title="Apple AirPods pro" description="Lorem ipsum dolor sit" imgurl="https://cdn.dribbble.com/users/966/screenshots/14334463/media/3c5d98f0b22cc441020bc422cdb027b1.png?compress=1&resize=1200x900&vertical=top"/>
      </header>
    </div>
  );
}

export default App;
