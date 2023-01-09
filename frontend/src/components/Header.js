import React from "react";


function Header(){
    return(

        <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/" style={{fontSize:'30px',fontFamily:'cursive',color:'red'}}>Dakma</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/salary" style={{fontSize:'16px',paddingLeft:'10px'}}>Salary</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="/add" style={{fontSize:'16px',paddingLeft:'10px'}}>Add Salary</a>
          
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="/list" style={{fontSize:'16px',paddingLeft:'10px'}}>Teachers</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="/addTeacher" style={{fontSize:'16px',paddingLeft:'10px'}}>Add Teachers</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="/report" style={{fontSize:'16px',paddingLeft:'10px'}}>View Records</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}
export default Header;