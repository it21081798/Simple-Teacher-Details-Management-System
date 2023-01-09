import React,{useEffect, useState} from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'
import salary5 from "../images/salary5.jpg"

export default function SalaryList(){
    const [salary , setSalary] = useState([]);

    useEffect(()=>{
        function getSalary(){
            axios.get("http://localhost:8071/salary/")
            .then((res)=>{
                setSalary(res.data);
            })
            .catch((err)=>{
                console.log(err);
            })
        }
        getSalary();
    },[]);

    let info = [];

    const pdfGen = ()=>{
    {
        const doc = new jsPDF();
        doc.text("Salary Records", 20,20);
        autoTable(doc, {
            head : [["Name","Role","Salary","Date"]],
            body :info,
        });
        doc.save("Salary.pdf");
    }
}

return(
    <div>
        <div className='container'>
            <img src={salary5} style={{width:'300px'}}/>
            <h3 className='salary' style={{fontFamily:'baloo',fontSize:'50px',textDecoration:'underline',}}>Salary Records...</h3><br></br><br></br>
        <button style={{marginLeft:'900px'}} class="btn btn-success"onClick={pdfGen}>Download PDF</button><br></br><br></br><br></br>
        <table class='table table-hover' style={{marginLeft:'20px'}}>
            <thead class='thead-dark'>
                <tr>
                    <th class=" table-secondary"scope='col' style={{fontFamily:'cursive',fontSize:'25px',color:'#DE3163'}}>Name</th>
                    <th class=" table-secondary"scope='col' style={{fontFamily:"cursive",fontSize:'25px',color:'#DE3163'}}>Role</th>
                    <th class=" table-secondary"scope='col' style={{fontFamily:"cursive",fontSize:'25px',color:'#DE3163'}}>Salary</th>
                    <th class=" table-secondary"scope='col' style={{fontFamily:"cursive",fontSize:'25px',color:'#DE3163'}}>Date</th>
                   
                </tr>
            </thead>
        </table>
        {salary.map((salary)=>(
            <div>
                {info.push([salary.name,salary.role,salary.salary,salary.date])}
                <div className='container' key={salary._id}>
                    <br/>

                    <table class='table'>
                        <thead class='thead-dark'> </thead>
                            <tbody>
                                <tr>
                                    <td class=" table-danger" style={{fontFamily:"cursive",fontSize:'16px'}}>{salary.name}</td>
                                    <td class=" table-danger" style={{fontFamily:"cursive",fontSize:'16px'}}>{salary.role}</td>
                                    <td class=" table-danger" style={{fontFamily:"cursive",fontSize:'16px'}}>{salary.salary}</td>
                                    <td class=" table-danger" style={{fontFamily:"cursive",fontSize:'16px'}}>{salary.date}</td>
                                    

                                </tr>
                            </tbody>
                       
                    </table>
                </div>
                </div>
        ))}
    </div>
    </div>

)
        }
