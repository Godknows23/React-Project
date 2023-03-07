import React from "react";
import ReactDom from 'react-dom/client';
import './index.css';
import Employee from './App';


const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Employee />
    
  </React.StrictMode>
 );
  

 
//  function Add() {
//    state = {
//      select: "open"
//    }
 
//    handleSubmit = () => alert("Submitted")
 
//    handleStatusChange = event => {
//      this.setState({ select: event.target.value })
//    }
 
//    handleReset = event => alert("Resetted")
 
//        return (
//        <div className="confirmmodal">
//          <Confirm title="Confirm" description="Are you sure?">
//            {confirm => (
//              <form onSubmit={confirm(this.handleSubmit)}>
//                <label>
//                  Status:
//                  <select
//                    value={this.state.select}
//                    onChange={confirm(this.handleStatusChange)}
//                  >
//                    <option value="open">Open</option>
//                    <option value="close">Close</option>
//                  </select>
//                </label>
//                <p>
//                  <button type="reset" onClick={confirm(this.handleReset)}>
//                    Reset
//                  </button>
//                  <button>Submit</button>
//                </p>
//              </form>
//            )}
//          </Confirm>
//        </div>
//      )
//    }
 
 
//  const rootElement = document.getElementById("root")
//  ReactDOM.render(<Add />, rootElement)
 