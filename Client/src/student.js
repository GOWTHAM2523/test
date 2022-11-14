import React from 'react';
import "bootstrap/dist/css/bootstrap.css";



export default function Student () {

    const handlesubmit = async(event) => {
        event.preventDefault();

        var datastring = new FormData(event.target);

        var config = {headers : {"enctype" : "multipart/form-data"}};

        let studentname = document.getElementById("studentname").value;
        let Rollno = document.getElementById("Rollno").value;
        let DOB = document.getElementById("DOB").value;
        let Address = document.getElementById("address").value;
        let Mobilenumber =document.getElementById("Mobilenumber").value;

    
    if(studentname === '' || studentname === null)
    {
        alert('Enter the studentname');
    }
    else if(Rollno === '' || Rollno === null)
    {
        alert('Enter the Rollno');
    }
    else if(DOB === '' || DOB === null)
    {
        alert('select the DOB');
    }
    else if(Address === '' || Address === null)
    {
        alert('Enter the Address');
    }
    else if(Mobilenumber === '' || Mobilenumber === null)
    {
        alert('Enter the Mobilenumber');
    }
    else
    {
        alert('Success');
    } 

    function store () {
        let a = studentname.value;
        let b = Rollno.value;
        let c = DOB.value;
        let d = Address.value;
        let e = Mobilenumber.value;

    }


}

    return(
        <>     
                <h3> Student Details </h3>
                <div className='container bg-primary mt-5'>   
                <form onSubmit={handlesubmit}>
                    <label>  Student name : </label>
                    <input type="text" value="Gowtham" placeholder="studentname" id="studentname" name='studentname' className='mt-5 '/> <br/>
                    <label>  Roll no: </label>
                    <input type="text" value="2004" placeholder="Rollno" id="Rollno" nmae="Roll no" className='ml-5'/> <br/>
                    <label>   DOB:     </label>
                    <input type="date" value="" placeholder="DOB" id="DOB" name="DOB" className='ml-3'/><br/>
                    <label>  Address: </label>
                    <input type="address" vlaue="" placeholder="address" id="address" name="address" className='ml-4'/> <br/>
                    <label>  Mobilenumber: </label>
                    <input type="number" vlaue="" placeholder='Mobile number' id="Mobilenumber" name="Mobilenumber" className='ml-2'/> <br/>
                    <input type="Submit" vlaue="" id="submitbutton" onSubmit="store"/>
                </form>
            </div>
            
            <div className='table-responsive ml-5% container'>
            <h3> Tables </h3>
                <div className='table table-bordered'>
                    <table>
                        <thead>
                            <tr>
                                <th>Student Name </th>
                                <th>Roll no</th>
                                <th> DOB </th>
                                <th> Address </th>
                                <th> Mobilenumber</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                            </tr>
                        </tbody>
                        
                    </table>
                </div>
                
            </div>

        </>


    );
}