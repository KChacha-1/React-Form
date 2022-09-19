import React from "react";
import {useState} from "react";
import './AddPeople.css'

export default function AddPeople({addContent}) {
    //create the map to hold the values
    const [people, setPeople] = useState({
        name:"",
        phone:"",
        email:"",
})
// needed to handle changes that are in the input phone, name, email
    const handleChange = (e) =>{
        setPeople({...people, [e.target.name]:e.target.value});
    }
    //grabs the form inputs
     const handleSubmit = (e) =>{
        e.preventDefault()  //prevents constant reset 
        addContent(people)  //calls function from app.js to grab the form 
        setPeople({ name:"",phone:"",email:"",})


     }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" id ="name" onChange={handleChange} value={people.name} required/>
      </label>
      <label>
        Phone:
        <input type="tel" name="phone" id="phone" maxLength="10" onChange={handleChange} value={people.phone}  required/>
      </label>
      <label>
        email:
        <input type="email" name="email" id="email" onChange={handleChange} value={people.email} required/>
      </label>
      <button  type="submit">Submit</button>
    </form>
  );
}
