import React from "react";
import axios from "axios";
import myteacher from "../images/myteacher.jpg"


class ListTeacher extends React.Component
{
    state = {
        teachers: [],
        uname: '',
        uage:'',
        ugender:'',
        uphoneNumber:'',
        uemail:'',
        udescription:'',
        uid:''
       
     


    }
    getTeachers = ()=>{
        axios.get("http://localhost:8071/Teacher/").then(res=>{
            console.log(res);
            this.setState({teachers:res.data});
        })
        
        }
        componentDidMount = ()=>{
            this.getTeachers();
        }
        handleDelete = (id)=>{
            axios.delete(`http://localhost:8071/Teacher/delete/${id}`)
            .then(res=>{
                alert("Do You Want to Delete it..???")
                console.log(res);
                window.location = window.location
            }) 
        }
        handleUpdate = (e)=>{
            this.setState({[e.target.name]:e.target.value});
             

        }
        handleModalUpdate = (e)=>{
            axios.put(`http://localhost:8071/Teacher/update/${this.state.uid}`,{name:this.state.uname,age:this.state.uage,gender:this.state.ugender,phoneNumber:this.state.uphoneNumber,email:this.state.uemail,description:this.state.udescription}).then(res=>{
                alert("Update Successfully")
                console.log(res);
                this.setState({uname:'',uage:'',ugender:'',uphoneNumber:'',uemail:'',udescription:''}) 
                window.location = window.location;
                
            })
        }
        render()
        {
            return(
                <div>
                     <img src ={myteacher} style={{width:'700px',marginTop:'20px',marginBottom:'20px'}} /><br></br><br></br>
                    <h1 style={{fontFamily:'baloo',fontSize:'55px',textDecoration:'underline'}} > Our Teacher's...</h1><br></br>
                    
                   
                    {
                        this.state.teachers.map(teachers=>(
                            <div key ={teachers._id} class="border border-danger" style={{background:'#E1F2F7'
                                ,borderRadius:'15px',padding:'15px',display:"inline-block",marginLeft:'15px',marginTop:'20px'}}>
                                
                                <div class="card-body">
                                    P
                                    <h5 style={{fontFamily:'cursive',fontSize:'17px'}}>Name : {teachers.name}</h5>
                                    <h5 style={{fontFamily:'cursive',fontSize:'17px'}}>Age : {teachers.age}</h5>
                                    <h5 style={{fontFamily:'cursive',fontSize:'17px'}}>Gender : {teachers.gender}</h5>
                                    <h5 style={{fontFamily:'cursive',fontSize:'17px'}}>Phone Number : {teachers.phoneNumber}</h5>
                                    <h5 style={{fontFamily:'cursive',fontSize:'17px'}}>E-mail : {teachers.email}</h5>
                                    <h5 style={{fontFamily:'cursive',fontSize:'17px'}}>Description : {teachers.description}</h5>

  <div class="container" style={{display:'inline'}}>
  <a href="/profile" button class="btn btn-outline-success">View Profile </a>
  <button style={{marginLeft:'20px'}} type="button" class="btn btn-outline-warning" data-toggle="modal" data-target="#myModal" onClick={()=>{this.setState({uid:teachers._id,uname:teachers.name,uage:teachers.age,ugender:teachers.gender,uphoneNumber:teachers.phoneNumber,uemail:teachers.email,udescription:teachers.description})}}>Update</button>
  <button style={{marginLeft:'20px'}} onClick={()=>this.handleDelete(teachers._id)} class="btn btn-outline-danger">Delete</button>
  <div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog">  
    <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title" style={{fontFamily:'monospace'}}>UPDATE DETAILS...</h4> 
        </div>
        <div class="modal-body">
          <input  onChange={(e)=>this.handleUpdate(e)} value={this.state.uname }  name='uname' class="from-control" style={{borderRadius:'4px',marginBottom:'10px',fontFamily:'cursive',fontSize: '25x'}} placeholder="Name" />
          <input  onChange={(e)=>this.handleUpdate(e)} value={this.state.uage } name='uage' class="from-control" style={{marginLeft:'10px',borderRadius:'4px',marginBottom:'10px',fontFamily:'cursive',fontSize: '25x'}} placeholder="Age"/>
          <input  onChange={(e)=>this.handleUpdate(e)} value={this.state.ugender } name='ugender' class="from-control" style={{borderRadius:'4px',marginBottom:'10px',fontFamily:'cursive',fontSize: '25x'}} placeholder="Gender"/> 
          <input  onChange={(e)=>this.handleUpdate(e)} value={this.state.uphoneNumber} name='uphoneNumber' class="from-control" style={{marginLeft:'10px',borderRadius:'4px',marginBottom:'10px',fontFamily:'cursive',fontSize: '25x'}} placeholder="Phone Number"/>
          <input  onChange={(e)=>this.handleUpdate(e)} value={this.state.uemail } name='uemail' class="from-control" style={{borderRadius:'4px',marginBottom:'10px',fontFamily:'cursive',fontSize: '25x'}} placeholder="E-mail"/>
          <input  onChange={(e)=>this.handleUpdate(e)} value={this.state.udescription } name='udescription' class="from-control" style={{marginLeft:'10px',borderRadius:'4px',marginBottom:'10px',fontFamily:'cursive',fontSize: '25x'}} placeholder="Description"/>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-dismiss="modal"onClick={()=>{this.setState({uname:'',uage:'',ugender:'',uphoneNumber:'',uemail:'',udescription:''})}}>Close</button> 
          <button type="button" class="btn btn-primary" onClick={(e)=>this.handleModalUpdate(e)}>Save Changes</button>
        </div>
      </div>
      
    </div>
  </div>
  
</div>
</div>
</div>

 ))
    }
                    

                </div>
            );
        }
        

    }
 
export default ListTeacher;