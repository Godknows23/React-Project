import React from 'react'
import { useState } from 'react';
import Employee from '../pages/Employee';
import AddEmployee from './AddEmployee';

  

export default function Button({children}) {
    const [isShown, setIsShown] = useState(false);
  const handleClick = event => {
    setIsShown(current => !current);
  };
  return (
    <div>
            <button onClick={handleClick} class='btn'>Add Employee</button>
            {isShown && (
            <div className='modal'>
              {children}
            <AddEmployee />
            <p>Employees</p>
            </div>
            )}
    </div>
  );
}

