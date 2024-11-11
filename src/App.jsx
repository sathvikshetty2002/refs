// import React from 'react'
// import { useState } from 'react'
// const App = () => {
// let [state, setState]=useState({
// name:"",
// subject:"",
// gender:"",
// lang:[]
// })

// let {name, subject, gender, lang}=state
// let handleChange=(e)=>{
// let {name, value}=e.target
// setState({...state, [name]:value})
// }
// let handleLang=(e)=> {
// let {name, value}=e.target
// setState({...lang, [name]: [value]})
// }
// let handleSubmit=(e)=>{
//    e.preventDefault()
// try{
// console.log({...state});
//  console.log([...lang]);
// }catch(err){
// console.log(err);
// }
// }
// return (
// <div>

// <form action="" onsubmit={handleSubmit}>

// <label html For="">TRAINER NAME:</label>

// <input type="text" name="name" value={name} onChange={handleChange} /><br /><br />


// <label htmlFor="">SUBJECT:</label>

// <input type="text" name="subject" value={subject} onChange={handleChange} /><br /><br />

// <label htmlFor="">GENDER: </label>

// MALE <input type="radio" name="gender" value="MALE" id="" onChange={handleChange} /> 
// FEMALE <input type="radio" name="gender" value="FEMALE" id="" onChange={handleChange}/><br /><br />

// <label htmlFor="">LANGUAGE:</label>

// KANNADA<input type="checkbox" name="lang" value="KANNADA" onChange={handleLang} />
// ENGLISH <input type="checkbox" name="lang" value="ENGLISH" onChange={handleLang} />
// JAPANESE <input type="checkbox" name="lang" value="JAPANESE" onChange={handleLang} />
// <br /><br />


// <button>SUBMIT</button>

// </form>

// </div>

// )
// }
// export default App

// *************************************************************************************************************

import React, { useState } from 'react';
import "./App.css"

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    course: '',
    subject: '',
  });

  const [tableData, setTableData] = useState([]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTableData([...tableData, formData]);
    setFormData({
      name: '',
      email: '',
      course: '',
      subject: '',
    });
  };

  return (
    <div>
      <center>
      <div id="form">
      <h2>Registration Form</h2>
   <form onSubmit={handleSubmit}>
        <div id='part1'>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div id='part1'>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div id='part1'>
          <label htmlFor="course">Course:</label>
          <select id="course" name="course" value={formData.course} onChange={handleChange}>
            <option value="">Select Course</option>
            <option value="Course 1">Course 1</option>
            <option value="Course 2">Course 2</option>
            <option value="Course 3">Course 3</option>
          </select>
        </div>
        <div id='part1'>
          <label htmlFor="subject">Subject:</label>
          <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
      </div>
      </center>

      <h2>Registered Users</h2>
      <div className="table">
      <table border='1px' >
        <thead>
          <tr >
            <th>Name</th>
            <th>Email</th>
            <th>Course</th>
            <th>Subject</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => (
            <tr key={index}>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.course}</td>
              <td>{data.subject}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default RegistrationForm;