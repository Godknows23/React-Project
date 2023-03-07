import React from "react";
import Button from "../components/Button";
import Card from "../components/Card";
;



const Employees = [
    {
      id: 1,
      selected: false,
      "name": "Godknows",
       "surname": "Pesanai",
       "phone": "0784982542",
       "email": "god@velocityinch.tech",
       "national_id": "62-203947A83",
       "department": "ICT",
       "date_of_birth": "10/10/2001"
    },
    {
      id: 2,
      selected: false,
      "name": "Eunice",
      "surname": "Mhoka",
      "phone": "0784982541",
      "email": "eunice@velocityinch.tech",
      "national_id": "62-203947M83",
      "department": "ICT",
      "date_of_birth": "10/10/2010"
    },
    {
      id: 3,
      selected: false,
      "name": "Israel",
    "surname": "Velocity",
    "phone": "0784982543",
    "email": "israel@velocityinch.tech",
    "national_id": "62-203947F83",
    "department": "HR",
    "date_of_birth": "10/10/2011"
    },
    {
      id: 4,
      selected: false,
      "name": "Tendai",
          "surname": "velocity",
          "phone": "0784982541",
          "email": "tendai@velocityinch.tech",
          "national_id": "62-203947M83",
          "department": "BS",
          "date_of_birth": "10/10/1990"
    },
    {
      id: 5,
      selected: false,
      "name": "Tino",
    "surname": "Pesanai",
    "phone": "0784982547",
    "email": "tino@velocityinch.tech",
    "national_id": "62-203947W83",
    "department": "HR",
    "date_of_birth": "10/10/1992"
    },
    {
            id: 6,
            selected: false,
            "name": "Director",
            "surname": "Velocity",
            "phone": "0784982549",
            "email": "director@velocityinch.tech",
            "national_id": "62-203947T83",
            "department": "ICT",
            "date_of_birth": "10/10/20201"
          },
          {
            id: 7,
            selected: false,
            "name": "Saka",
            "surname": "Velocity",
            "phone": "0784982541",
            "email": "saka@velocityinch.tech",
            "national_id": "62-203947K83",
            "department": "BS",
            "date_of_birth": "10/10/1992"
             },
             {
                     id: 8,
                     selected: false, 
                    "name": "Testing",
                    "surname": "velocity",
                    "phone": "0784982548",
                    "email": "testing@velocityinch.tech",
                    "national_id": "62-203947N83",
                    "department": "ICT",
                    "date_of_birth": "10/10/1999"
              },
                {
    id: 9,
    selected: false,
    "name": "Joy",
    "surname": "Velocity",
    "phone": "0784982578",
    "email": "joy@velocityinch.tech",
    "national_id": "83-203947A83",
    "department": "HR",
    "date_of_birth": "10/10/1994"
  },
     {
    id: 10,
     selected: false,
    "name": "Anesu",
    "surname": "Chiodza",
    "phone": "0784992541",
    "email": "anesu@velocityinch.tech",
    "national_id": "82-203947J83",
    "department": "HR",
    "date_of_birth": "10/10/1999"
  },
  {
    id: 11,
    selected: false,
    "name": "Prim",
    "surname": "Velocity",
    "phone": "0784982541",
    "email": "prim@velocityinch.tech",
    "national_id": "82-203947J83",
    "department": "ICT",
    "date_of_birth": "10/10/1902"
  },
  {
    id: 12,
    selected: false,
    "name": "Strive",
    "surname": "Velocity",
    "phone": "0784982529",
    "email": "strive@velocityinch.tech",
    "national_id": "92-203947A83",
    "department": "ICT",
    "date_of_birth": "10/10/1997"
  },
  {
    id: 13,
    selected: false,
    "name": "Ak",
    "surname": "Kuseka",
    "phone": "0784982741",
    "email": "ak@velocityinch.tech",
    "national_id": "62-203947J83",
    "department": "BS",
    "date_of_birth": "10/10/1999"
  },
  {
    id: 14,
    selected: false,
    "name": "Andrew",
    "surname": "Michael",
    "phone": "0784982901",
    "email": "andrew@velocityinch.tech",
    "national_id": "87-203947A83",
    "department": "ICT",
    "date_of_birth": "10/10/1996"
  },
  {
    id: 15,
    selected: false,
    "name": "Marcia",
    "surname": "Velocity",
    "phone": "0784982941",
    "email": "mea@velocityinch.tech",
    "national_id": "82-803947A83",
    "department": "HR",
    "date_of_birth": "10/10/1920"
  }
  
  ];
  
  class Employee extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        List: Employees,
        MasterChecked: false,
        SelectedList: [],
      };
    }
  
    // Select/ UnSelect Table rows
    onMasterCheck(e) {
      let tempList = this.state.List;
      // Check/ UnCheck All Items
      tempList.map((employee) => (employee.selected = e.target.checked));
  
      //Update State
      this.setState({
        MasterChecked: e.target.checked,
        List: tempList,
        SelectedList: this.state.List.filter((e) => e.selected),
      });
    }
  
    // Update List Item's state and Master Checkbox State
    onItemCheck(e, item) {
      let tempList = this.state.List;
      tempList.map((employee) => {
        if (employee.id === item.id) {
          employee.selected = e.target.checked;
        }
        return employee;
      });
  
      //To Control Master Checkbox State
      const totalItems = this.state.List.length;
      const totalCheckedItems = tempList.filter((e) => e.selected).length;
  
      // Update State
      this.setState({
        MasterChecked: totalItems === totalCheckedItems,
        List: tempList,
        SelectedList: this.state.List.filter((e) => e.selected),
      });
    }
  
    // Event to get selected rows(Optional)
    getSelectedRows() {
      this.setState({
        SelectedList: this.state.List.filter((e) => e.selected),
      });
    }
 
  
    render() {
     if(Employees && Employeeslist.length > 0) {
      return (
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        checked={this.state.MasterChecked}
                        id="mastercheck"
                        onChange={(e) => this.onMasterCheck(e)}
                      />
                    </th>
                    <th scope="col">Name</th>
                    <th scope="col">Surname</th>
                    <th scope="col">Phone</th>
                    <th scope="col">email</th>
                    <th scope="col">national_id</th>
                    <th scope="col">Department</th>
                    <th scope="col">D.O.B</th>
                  
                  </tr>
                </thead>
                <tbody>
                  {this.state.List.map((employee) => (
                    <tr key={employee.id} className={employee.selected ? "selected" : ""}>
                      <th scope="row">
                        <input
                          type="checkbox"
                          checked={employee.selected}
                          className="form-check-input"
                          id="rowcheck{user.id}"
                          onChange={(e) => this.onItemCheck(e, employee)}
                        />
                      </th>
                      <td>{employee.name}</td>
                      <td>{employee.surname}</td>
                      <td>{employee.phone}</td>
                      <td>{employee.email}</td>
                      <td>{employee.national_id}</td>
                      <td>{employee.department}</td>
                      <td>{employee.date_of_birth}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <a
                className="primary"
                onClick={() => this.getSelectedRows()}
              >
                {this.state.SelectedList.length} Selected
              </a>
              <p id="employeeLogo">Employees</p>
              <Button/>
              <div id="delete_svg">
              <a href="svg"><svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M261 936q-24.75 0-42.375-17.625T201 876V306h-41v-60h188v-30h264v30h188v60h-41v570q0 24-18 42t-42 18H261Zm438-630H261v570h438V306ZM367 790h60V391h-60v399Zm166 0h60V391h-60v399ZM261 306v570-570Z"/>
             </svg> Delete</a>
          </div>
          <div id="edit_svg">
            <a href="svg"><svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M180 876h44l443-443-44-44-443 443v44Zm614-486L666 262l42-42q17-17 42-17t42 17l44 44q17 17 17 42t-17 42l-42 42Zm-42 42L248 936H120V808l504-504 128 128Zm-107-21-22-22 44 44-22-22Z"/>
            </svg> Edit</a>
          </div>
                 <div id="add_salary">
              <a href="icons"><svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M450 856V606H200v-60h250V296h60v250h250v60H510v250h-60Z"/></svg>
               Add Salary </a>      
             </div>       
            </div>
          </div>
        </div>
      );

                  }
          else{
            return(
          <></>
            );
          }
    }
  }
  
  export default Employee;
        