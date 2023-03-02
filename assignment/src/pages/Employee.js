import React from "react";
import Button from "../components/Button";
import Card from "../components/Card";

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
                        
            </div>
          </div>
        </div>
      );
    }
  }
  
  export default Employee;

// let employeeslist = [
//     {
//        "name": "Godknows",
//        "surname": "Pesanai",
//        "phone": "0784982542",
//        "email": "god@velocityinch.tech",
//        "national_id": "62-203947A83",
//        "department": "ICT",
//        "date_of_birth": "10/10/2001"
//     },
//     {
//       "name": "Eunice",
//       "surname": "Mhoka",
//       "phone": "0784982541",
//       "email": "eunice@velocityinch.tech",
//       "national_id": "62-203947M83",
//       "department": "ICT",
//       "date_of_birth": "10/10/2010"
//    },
//    {
//     "name": "Israel",
//     "surname": "Velocity",
//     "phone": "0784982543",
//     "email": "israel@velocityinch.tech",
//     "national_id": "62-203947F83",
//     "department": "HR",
//     "date_of_birth": "10/10/2011"
//   },
//   {
//     "name": "Tendai",
//     "surname": "velocity",
//     "phone": "0784982541",
//     "email": "tendai@velocityinch.tech",
//     "national_id": "62-203947M83",
//     "department": "BS",
//     "date_of_birth": "10/10/1990"
//   },
//   {
//     "name": "Tino",
//     "surname": "Pesanai",
//     "phone": "0784982547",
//     "email": "tino@velocityinch.tech",
//     "national_id": "62-203947W83",
//     "department": "HR",
//     "date_of_birth": "10/10/1992"
//   },
//   {
//     "name": "Director",
//     "surname": "Velocity",
//     "phone": "0784982549",
//     "email": "director@velocityinch.tech",
//     "national_id": "62-203947T83",
//     "department": "ICT",
//     "date_of_birth": "10/10/20201"
//   },
//   {
//     "name": "Saka",
//     "surname": "Velocity",
//     "phone": "0784982541",
//     "email": "saka@velocityinch.tech",
//     "national_id": "62-203947K83",
//     "department": "BS",
//     "date_of_birth": "10/10/1992"
//   },
//   {
//     "name": "Testing",
//     "surname": "velocity",
//     "phone": "0784982548",
//     "email": "testing@velocityinch.tech",
//     "national_id": "62-203947N83",
//     "department": "ICT",
//     "date_of_birth": "10/10/1999"
//   },
//   {
//     "name": "Joy",
//     "surname": "Velocity",
//     "phone": "0784982578",
//     "email": "joy@velocityinch.tech",
//     "national_id": "83-203947A83",
//     "department": "HR",
//     "date_of_birth": "10/10/1994"
//   },
//   {
//     "name": "Anesu",
//     "surname": "Chiodza",
//     "phone": "0784992541",
//     "email": "anesu@velocityinch.tech",
//     "national_id": "82-203947J83",
//     "department": "HR",
//     "date_of_birth": "10/10/1999"
//   },
//   {
//     "name": "Prim",
//     "surname": "Velocity",
//     "phone": "0784982541",
//     "email": "prim@velocityinch.tech",
//     "national_id": "82-203947J83",
//     "department": "ICT",
//     "date_of_birth": "10/10/1902"
//   },
//   {
//     "name": "Strive",
//     "surname": "Velocity",
//     "phone": "0784982529",
//     "email": "strive@velocityinch.tech",
//     "national_id": "92-203947A83",
//     "department": "ICT",
//     "date_of_birth": "10/10/1997"
//   },
//   {
//     "name": "Ak",
//     "surname": "Kuseka",
//     "phone": "0784982741",
//     "email": "ak@velocityinch.tech",
//     "national_id": "62-203947J83",
//     "department": "BS",
//     "date_of_birth": "10/10/1999"
//   },
//   {
//     "name": "Andrew",
//     "surname": "Michael",
//     "phone": "0784982901",
//     "email": "andrew@velocityinch.tech",
//     "national_id": "87-203947A83",
//     "department": "ICT",
//     "date_of_birth": "10/10/1996"
//   },
//   {
//     "name": "Marcia",
//     "surname": "Velocity",
//     "phone": "0784982941",
//     "email": "mea@velocityinch.tech",
//     "national_id": "82-803947A83",
//     "department": "HR",
//     "date_of_birth": "10/10/1920"
//   }
//   ];



// function Employee(){
          
// if (employeeslist && employeeslist.length > 0) {
//             return (
//             <div>
//                 <table className="table" border={1}>
//                     <thead>
//                         <tr>
//                             <th>Name</th>
//                             <th>Surname</th>
//                             <th>Phone</th>
//                             <th>Email</th>
//                             <th>National Id</th>
//                             <th>Department</th>
//                             <th>D.O.B</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {employeeslist.map(emp => (
//                             <tr key={emp.Id}>
//                                 <td>{emp.name}</td>
//                                 <td>{emp.surname}</td>
//                                 <td>{emp.phone}</td>
//                                 <td>{emp.email}</td>
//                                 <td>{emp.national_id}</td>
//                                 <td>{emp.department}</td>
//                                 <td>{emp.date_of_birth}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>)
            
//         }
//         else {
//            return(
//         <> </>
//          );
//         }
//     }


// export default Employee;


    
        