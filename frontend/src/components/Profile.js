import React from "react";
import t6 from "../images/t6.jpg";

const Profile = () =>{
    return(

        <div className="container emp-profile">
            <h1 style={{fontFamily:'Bahnschrift SemiBold',fontSize:'45px',color:'#DE3163'}}>User Profile...</h1><br></br>
            <div className="border border-success" style={{background:'#F7F4E9',paddingBottom:'90px',borderRadius:'15px',position:'relative'}}>
            
                <div className="row">
                    <div className="col-md-4">
                        <br></br>
                        <img src={t6} style={{width:'300px',marginTop:'40px',marginLeft:'40px'}} alt="teacher" />



                    </div>
                    <div className="col-md-5" style={{background:'transparent'}}>
                        <div className="profile-head">
                        
                            <br></br><br></br><br></br><h5 style={{fontFamily:'cursive',fontSize:'25px'}}>Name : Mr.Amal Perera</h5>
                            <h5 style={{fontFamily:'cursive',fontSize:'18px',paddingTop:'10px'}} className="text-primary">Role : Science Teacher</h5>
                            <h5 style={{fontFamily:'cursive',fontSize:'18px',paddingTop:'10px'}}className="text-primary">E-mail : amailperea@gmail.com </h5>
                            <h5 style={{fontFamily:'cursive',fontSize:'18px',paddingTop:'10px'}}>Institue : Dakma Institute </h5>
                            <h5 style={{fontFamily:'cursive',fontSize:'18px',paddingTop:'10px'}}className="text-primary">Contact : 077-3413282 </h5>
                            <h5 style={{fontFamily:'cursive',fontSize:'18px',paddingTop:'10px'}}>Lives : Galle, Sri Lanka </h5>

                            <p style={{fontFamily:'cursive',fontSize:'14px',paddingTop:'10px'}} class="text-danger" className="profile-rating mt-3 mb-5">RANKINGS : <span>1/10</span> </p>


                            <br></br><button type="submit" class="btn btn-warning" data-toggle="modal" data-target="#myModal">Edit Profile</button>
                           <a href="https://www.microsoft.com/en/microsoft-teams/log-in" type="submit" style={{marginLeft:'20px'}} class="btn btn-danger">My Class</a>
                            <a href="https://google-calendar-clone.netlify.app/" type="submit" style={{marginLeft:'20px'}} class="btn btn-success">Timetable</a>
                          
                            <a href="https://outlook.live.com/owa/" type="submit" style={{marginLeft:'20px'}} class="btn btn-info">Notice</a>

                            <div class="modal fade" id="myModal" role="dialog">
                            <div class="modal-dialog">  
                            <div class="modal-content">
                                <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                                <h4 class="modal-title" style={{fontFamily:'monospace'}}>UPDATE MY DETAILS...</h4> 
                                </div>
                                <div class="modal-body">
          <input name='name' class="from-control" style={{borderRadius:'4px',marginBottom:'10px',fontFamily:'cursive',fontSize: '25x'}} placeholder="Name" />
          <input name='role' class="from-control" style={{marginLeft:'10px',borderRadius:'4px',marginBottom:'10px',fontFamily:'cursive',fontSize: '25x'}} placeholder="Role"/>
          <input name='email' class="from-control" style={{borderRadius:'4px',marginBottom:'10px',fontFamily:'cursive',fontSize: '25x'}} placeholder="E-mail"/> 
          <input name='institute' class="from-control" style={{marginLeft:'10px',borderRadius:'4px',marginBottom:'10px',fontFamily:'cursive',fontSize: '25x'}} placeholder="Institute"/>
          <input name='contact' class="from-control" style={{borderRadius:'4px',marginBottom:'10px',fontFamily:'cursive',fontSize: '25x'}} placeholder="Contact"/>
          <input name='rate' class="from-control" style={{marginLeft:'10px',borderRadius:'4px',marginBottom:'10px',fontFamily:'cursive',fontSize: '25x'}} placeholder="My Ratings"/>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button> 
          <button type="button" class="btn btn-primary">Save Changes</button>
        </div>

                             </div>         
                            
                                         
                                     
                        </div>
                        
                        
                    </div>
                     
                    </div>

                    
                     
                
            
            </div>
     </div>
     </div>
     </div>
            
            
        


        
    )

}
export default Profile

