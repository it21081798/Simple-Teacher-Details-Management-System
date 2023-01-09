import React,{useState} from "react";
import axios from "axios";
import teacher5 from "../images/teacher5.jpg";
import cartoo2 from "../images/cartoon2.jpg";

export default function AddTeacher(){

const[name, setName] = useState("");
const[age, setAge] = useState("");
const[gender, setGender] = useState("");
const[phoneNumber, setPhone] = useState("");
const[email, setEmail] = useState("");

const[description, setDescription] = useState("");

function sendData(e){
  e.preventDefault();
  
  const newTeacher ={
    name,
    age,
    gender,
    phoneNumber,
    email,
    description

  }

  axios.post("http://localhost:8071/Teacher/add",newTeacher).then(()=>{
    alert("Teacher Added Successfully")
    
    
    
  }).catch((err)=>{
    alert(err)
  })
  window.location = window.location;
 
}


return(


<div className="container">
  <img src={teacher5} style={{width:'450px',position:'static'}}/>
  
<div class ="border border-dark" style={{borderRadius:'15px',marginBottom:'20px',backgroundColor:'#E8EAE3',paddingLeft:"10px",paddingBottom:"20px"}}>
<h1 style={{fontFamily:'Bahnschrift SemiBold',fontSize:'40px',color:'#DE3163'}}>Add Teacher's...</h1><br></br><br></br>


<form onSubmit={sendData}>
 
<div class="form-group row" >
    <label for="name" class="col-sm-2 col-form-label" style={{fontFamily:'cursive',fontSize:'20px'}}>Name :</label>
    <div class="col-sm-8">
      <input type="text" class="form-control" id="name" placeholder="Enter Teacher Name :" style={{fontFamily:'monospace',fontSize:'16px'}} required onChange={(e)=>{

        setName(e.target.value);

      }}/><br></br>
    </div>
  </div>
  
  <div class="form-group row" >
    <label for="name" class="col-sm-2 col-form-label" style={{fontFamily:'cursive',fontSize:'20px'}}>Age :</label>
    <div class="col-sm-8">
      <input type="number" class="form-control" id="name" placeholder="Enter Teacher Age :" style={{fontFamily:'monospace',fontSize:'16px'}} required onChange={(e)=>{

        setAge(e.target.value);

      }}/><br></br>
    </div>
  </div>

  <div class="form-group row" >
    <label for="name" class="col-sm-2 col-form-label" style={{fontFamily:'cursive',fontSize:'20px'}}>Gender :</label>
    <div class="form-group col-md-2">
      
      <select  id="inputState" class="form-control" required onChange={(e)=>{
        setGender(e.target.value)
      }}>
        <option selected style={{fontFamily:'monospace',fontSize:'16px'}}>Choose...</option>
        <option style={{fontFamily:'monospace',fontSize:'16px'}}>Male</option>
        <option style={{fontFamily:'monospace',fontSize:'16px'}}>Female</option>
      </select>
    </div>
   <br></br>
    </div>
  
 

  <div class="form-group row" >
    <label for="name" class="col-sm-2 col-form-label" style={{fontFamily:'cursive',fontSize:'20px'}}>Phone Number :</label>
    <div class="col-sm-8">
      <input type="text" class="form-control" id="name" placeholder="Enter Phone Number (Ex: 123-4567890 only) :" pattern="[0-9]{3}-[0-9]{7}" style={{fontFamily:'monospace',fontSize:'16px'}} required onChange={(e)=>{

        setPhone(e.target.value);

      }}/><br></br>
    </div>
  </div>

  <div class="form-group row" >
    <label for="name" class="col-sm-2 col-form-label" style={{fontFamily:'cursive',fontSize:'20px'}}>E-mail :</label>
    <div class="col-sm-8">
      <input type="text" class="form-control" id="name" placeholder="Enter Teacher E-mail :" style={{fontFamily:'monospace',fontSize:'16px'}} pattern= ".+@gmail\.com" required onChange={(e)=>{

        setEmail(e.target.value);

      }}/><br></br>
    </div>
  </div>

  <div class="form-group row" >
    <label for="name" class="col-sm-2 col-form-label" style={{fontFamily:'cursive',fontSize:'20px'}}>Description :</label>
    <div class="col-sm-8">
      <textarea class="form-control" id="name" rows="5" placeholder="Add Other Information :" style={{fontFamily:'monospace',fontSize:'16px'}} required onChange={(e)=>{

        setDescription(e.target.value);

      }}/><br></br>
    </div>
  </div>
  
       
     

  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
</div>


)
}