import './App.css';
import Home from './Components/Home/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Nomatch from './Components/Nomatch/Nomatch';
import LeagueDetail from './Components/LeagueDetail/LeagueDetail';


function App() {
  return (
    <div className="App">
   
     
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/league/:leagueDetail" element={<LeagueDetail/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="*" element={<Nomatch/>}></Route>

        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
