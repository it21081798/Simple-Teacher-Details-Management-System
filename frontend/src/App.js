import './App.css';
import Header from './components/Header';
import AddSalary from "./components/AddSalary";
import SalaryList from './components/SalaryList';
import AddTeacher from "./components/AddTeacher";
import ListTeacher from "./components/ListTeacher";
import Profile from './components/Profile';
import HomePage from './components/homePage';
import Report from './components/Report';






import {Route, Routes} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Header/>
     

      
      
    
   
      
      
      
     
      
      <Routes>
      
      <Route path ="/add" element ={<AddSalary />}/>
      <Route path ="/salary" element ={<SalaryList/>}/>
      <Route path ="/addTeacher" element={<AddTeacher/>}/>
      <Route path ="/list" element={<ListTeacher/>}/>
      <Route path ="/profile" element={<Profile/>}/>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/report" element={<Report/>}/>
      
      

  
      </Routes>
      
      
      
      
    </div>
  );
}

export default App;
