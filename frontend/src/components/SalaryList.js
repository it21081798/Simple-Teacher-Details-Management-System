import React from "react";
import axios from "axios";
import s5 from "../images/s5.jpg"
import jsPDF from "jspdf";
import "jspdf-autotable";


class SalaryList extends React.Component
{
state = {
    salary : [],
    uname :'',
    urole :'',
    usalary :'',
    udate : ''
}
getSalary = ()=>{
    axios.get('http://localhost:8071/salary/')
    .then(res=>{
        console.log(res);
        this.setState({salary:res.data});
    })
}
componentDidMount = ()=>{
    this.getSalary(); 
}
handleDelete = (id)=>{
    axios.delete(`http://localhost:8071/salary/delete/${id}`)
    .then(res=>{
        alert("Do you want to Delete it..?")
        console.log(res);
        window.location = window.location;
    })
}
handleUpdate = (e)=>{
    this.setState({[e.target.name]:e.target.value});
    
}
handleModalUpdate = (e)=>{
    axios.put(`http://localhost:8071/salary/update/${this.state.uid}`,{name:this.state.uname,role:this.state.urole,salary:this.state.usalary,date:this.state.udate})
    .then(res=>{
        alert("Update Successfully")
        console.log(res);
        this.setState({uname:'',urole:'',usalary:'',udate:''})
        window.location = window.location;
    })

}





render()
{
    return(
        <div>
            <img src={s5} style={{width:'700px',}}/>
           
            
            
            
            
            <h2 style={{fontFamily:'baloo',fontSize:'55px',textDecoration:'underline'}}>Teacher's Salary...</h2><br></br>
           
            
            
            
            {  
            
                this.state.salary.map(salary=>(
                    
                    <div key ={salary._id}class ="border border-success" style={{borderRadius:'10px',padding:'15px',backgroundColor:'#FAF0DC',display :'inline-block',marginLeft:'15px',marginTop:'10px',border:''}}>
                        
                        <div class ="card-body">
                            <h5 style={{fontFamily:'cursive',fontSize:'17px'}}>Name : {salary.name}</h5>
                            <h5 style={{fontFamily:'cursive',fontSize:'17px'}}>Role : {salary.role}</h5>
                            <h5 style={{fontFamily:'cursive',fontSize:'17px'}}>Salary : {salary.salary}</h5>
                            <h5 style={{fontFamily:'cursive',fontSize:'17px'}}>Date : {salary.date}</h5>
                            
                                    <div class="container" style={{display:'inline'}}>
                                  
                                    
                                    <button type="button" class="btn btn-outline-warning" data-toggle="modal" data-target="#myModal" onClick={()=>{this.setState({uid:salary._id,uname:salary.name,urole:salary.role,usalary:salary.salary,udate:salary.data})}}>Update</button>
                                    <button style ={{marginTop:'0px',marginLeft:'20px'}} onClick ={()=>this.handleDelete(salary._id)}className="btn btn-outline-danger">Delete</button>
                                    <a href="/report" className="btn btn-outline-primary" style={{marginLeft:'20px'}}>Get Report</a>

                                    
                                    <div class="modal fade" id="myModal" role="dialog">
                                        <div class="modal-dialog">
                                        
                                        
                                        <div class="modal-content">
                                            <div class="modal-header">
                                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                                            <h4 class="modal-title" style={{fontFamily:'monospace'}}>UPDATE RECORDS...</h4>
                                            </div>
                                            <div class="modal-body">
                                            <input onChange= {(e)=>this.handleUpdate(e)} value={this.state.uname}  name ='uname' class="from-control" style ={{borderRadius:'4px',marginBottom:'10px',fontFamily:'cursive',fontSize:'15px'}} placeholder="Name :"/>
                                            <input onChange= {(e)=>this.handleUpdate(e)} value={this.state.urole}  name ='urole' class="from-control" style ={{borderRadius:'4px',marginBottom:'10px',marginLeft:'10px',fontFamily:'cursive',fontSize:'15px'}} placeholder="Role :"/>
                                            <input onChange= {(e)=>this.handleUpdate(e)} value={this.state.usalary}name ='usalary' class="from-control" style ={{borderRadius:'4px',marginBottom:'10px',fontFamily:'cursive',fontSize:'15px'}} placeholder="Salary :"/>
                                            <input onChange= {(e)=>this.handleUpdate(e)} value={this.state.udate}  name ='udate' class="from-control" style ={{borderRadius:'4px',marginBottom:'10px',marginLeft:'10px',fontFamily:'cursive',fontSize:'15px'}} placeholder="Date :"/>
                                            </div>
                                            <div class="modal-footer">
                                                <button class="btn btn-primary" onClick={(e)=>this.handleModalUpdate(e)}>Save Changes</button>
                                            <button type="button" class="btn btn-danger" data-dismiss="modal" onClick={()=>{this.setState({uname:'',urole:'',usalary:'',udate:''})}}>Close</button>
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
    )
}
}
export default SalaryList;