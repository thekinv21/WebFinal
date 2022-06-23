import { BrowserRouter, Routes,Route,} from "react-router-dom";
import Admin from "./components/Admin/Admin";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Rezervation from "./components/Rezervation/Rezervation";
import Sahalar from "./components/Sahalar/Sahalar";
import Subcribes from "./components/Subcribes/Subcribes";
import Dataİnformation from "./components/Information/Dataİnformation";



function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/admin" element = {<Admin/>}/>
        <Route path = "/" element = { <Login/> } />
         <Route path = "/home" element = { <Home/> } />
         <Route path="/datainformation" element = {<Dataİnformation/>}/>
         <Route path="/subcribes" element = {<Subcribes/>}/>
        <Route path = "/login" element= {<Login></Login>}/>
        <Route path="/rezervation" element={<Rezervation/>}/>
        <Route path="/sahalar" element = {<Sahalar/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;