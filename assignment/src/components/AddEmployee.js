import React from 'react'
import { useState } from 'react'

function AddEmployee() {
  return (
    <div>
        <form>
            <p id='formparag'>Add Employee</p>

            <div id='name'>
                <label>Name</label><br></br>
                <input type='text'></input><br></br>
            </div>

            <div id='surname'>
                <label>Surname</label><br></br>
                <input type='text'></input><br></br>
            </div>

            <div id='phone'>
                <label>Phone</label><br></br>
                <input type='text'></input><br></br>
            </div>

            <div id='email'>
                <label>Email</label><br></br>
                <input type='email'></input><br></br>
            </div>

            <div id='nationalid'>
                <label>National ID</label><br></br>
                <input type='text'></input><br></br>
            </div>

            <div id='department'>
                <label>Department</label><br></br>
                <input type='text'></input><br></br>
            </div>

            <div id='dob'>
                <label>Date Of Birth</label><br></br>
                <input type='date'></input>
            </div>
            {/* <div>
             <button className='clear_btn'>Clear</button>
            <button className='submit_btn'>Submit</button> 
            </div> */}
        </form>
        <div className='loadingform'>
        <img id='loading' src={require('./img/Vector.png')}/>
        <img id='loader' src={require('./img/Group.jpg')}/>
        </div>
            </div>
            
  )
}

export default AddEmployee