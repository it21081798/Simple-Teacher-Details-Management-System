import React,{useState} from "react";
import axios from "axios";
import salary2 from "../images/salary2.jpg";


export default function AddSalary(){

  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [salary, setSalary] = useState("");
  const [date, setDate] = useState("");

  function sendData(e){

    e.preventDefault();
    
    const newSalary ={
      name,
      role,
      salary,
      date

    }
    axios.post("http://localhost:8071/salary/add",newSalary).then(()=>{
      alert("Data Insert Successfully");
      

    }).catch((err)=>{
      alert(err)
    })
    window.location = window.location;
  }


    return(
      <div className="container">
        <img src={salary2} style={{width:'450px'}}/>
      
        <div class ="border border-secondary" style={{borderRadius:'15px',marginBottom:'20px',backgroundColor:'#E8EAE3', marginTop:'25px',marginLeft:'25px',marginRight:'25px',paddingBlockEnd:'25px'}}>
        
            <h1 style={{fontFamily:'Bahnschrift SemiBold',fontSize:'40px',color:'#DE3163'}}>Add Teacher's Salary...</h1><br></br><br></br>

 <form onSubmit={sendData}>

  
  <div class="form-group row" >
    <label for="name" class="col-sm-2 col-form-label" style={{fontFamily:'cursive',fontSize:'20px'}}>Name :</label>
    <div class="col-sm-8">
      <input type="text" class="form-control" id="name" placeholder="Add Teacher Name :" style={{fontFamily:'monospace',fontSize:'16px'}} required onChange={(e)=>{

        setName(e.target.value);

      }}/><br></br>
    </div>
  </div>

  <div class="form-group row">
    <label for="role" class="col-sm-2 col-form-label" style={{fontFamily:'cursive',fontSize:'20px'}}>Role :</label>
    <div class="form-group col-md-2">
      
      <select  id="inputState" class="form-control" required onChange={(e)=>{
        setRole(e.target.value)
      }}>
        <option selected style={{fontFamily:'monospace',fontSize:'16px'}}>Choose...</option>
        <option style={{fontFamily:'monospace',fontSize:'16px'}}>Teacher</option>
        <option style={{fontFamily:'monospace',fontSize:'16px'}}>Staff Head</option>
      </select>
    </div>
   <br></br>
    </div>

  <div class="form-group row">
    <label for="salary" class="col-sm-2 col-form-label" style={{fontFamily:'cursive',fontSize:'20px'}}>Salary :</label>
    <div class="col-sm-8">
      <input type="text" class="form-control" id="salary" placeholder="Add the Salary Rs: " style={{fontFamily:'monospace',fontSize:'16px'}} required onChange={(e)=>{

        setSalary(e.target.value);

      }}/><br></br>
      
    </div>
  </div>

  <div class="form-group row">
    <label for="date" class="col-sm-2 col-form-label" style={{fontFamily:'cursive',fontSize:'20px'}}>Date :</label>
    <div class="col-sm-2">
      <input type="date" class="form-control" id="date" style={{fontFamily:'monospace',fontSize:'16px'}} required onChange={(e)=>{

        setDate(e.target.value);

      }}/><br></br>
    </div>
  </div><br></br>
  <button type="submit" class="btn btn-primary">Submit </button>
  
</form>
</div>
</div>







    )
}