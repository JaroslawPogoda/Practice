
import './App.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import ContactUs from './components/Contactus'
import About from './components/About'
import Home from './components/Home'
import Nav from './components/Nav'
import Content from './components/Content/Content'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<ContactUs/>}/>
          <Route path="/content" element={<Content/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
