import React, { useState } from 'react';
// import {BrowserRouter as Router} from "react-router-dom";
import './Details.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// import Navbar from '../Navbar.js';


function Details() {
    const [selectedDate, setSelectedDate] = useState(null)
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [gender, setGender] = useState('')
    const [description, setDescription] = useState('')


    const handleSubmit=(e)=>{
      e.preventDefault();
      alert('Your Booking has been confirmed!')
      console.log(name,age,gender,description)
    }
  return (
<>
{/* <Router>
  <Navbar/>
</Router> */}
<form class="box" onSubmit={handleSubmit}>
  <h1>Enter your Details</h1>
  <input type="text" name="" placeholder="Full Name" onChange={(event)=> setName(event.target.value)} />
  <input type="text" name="" placeholder="Age" onChange={(event)=> setAge(event.target.value)}/>
  <input type="text" name="" placeholder="Gender" onChange={(event)=> setGender(event.target.value)} />
  <input type="text" name="" placeholder="Disease Description" onChange={(event)=> setDescription(event.target.value)}/>
  <DatePicker selected={selectedDate} onChange={date => setSelectedDate(date)} 
  dateFormat='dd/MM/yyyy' minDate={new Date()} scrollableMonthYearDropdown
  placeholderText="Date of Appointment" />
  <button>Confirm my Booking</button>
</form>
</>
  )
}
export default Details;