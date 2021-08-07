
import React, { useState } from 'react';
import './App.css';
import data from './mock-data.json'
const App = ()=>{
  const [contacts,setContacts]= useState(data);
const [addFormData,setAddFormData] = useState({
fullName:'',
address:'',
phoneNumber:'',
email:''
})


const handleAddFormChange=(event)=>{
  event.preventDefault();

  const fieldName = event.target.getAttribute('name')
  const fieldValue = event.target.value;

  const newFormData={ ...addFormData};
  
}


  return (
  <div className='app-container'>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Address</th>
          <th>Phone Number</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contacts)=>(
        <tr>
          <td>Jenny Chan</td>  
          <td>3 waterfoot</td>
          <td>333-962-7516</td>
          <td>jenny.chan@email.com</td>
        </tr>
         ))}
      </tbody>
    </table>

    <h2>Add a Contact</h2>
    <from>
    <input
     type='text' 
      name='fullName'
      required='required'
      placeholder = 'Enter a name...'
      /> 
      <input
      type='text' 
       name='address'
       required='required'
       placeholder = 'Enter a address...'
       />
        <input
     type='text' 
      name='phoneNumber'
      required='required'
      placeholder = 'Enter a phone number...'
      />
       <input
     type='email' 
      name='email'
      required='required'
      placeholder = 'Enter an email...'
      />
      <button type='submit'>Add</button>
    </from>
  </div>
  )
}

export default App;
