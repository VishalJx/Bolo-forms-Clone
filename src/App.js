import './App.css';
import {BrowserRouter, Routes, Route} from  "react-router-dom";
import Nav from './components/script/Nav';
import Home from './components/script/Home';

function App() {
  return(
  <BrowserRouter>
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
