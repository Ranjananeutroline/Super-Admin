import React from 'react'
import "./User.css"
import Table from 'react-bootstrap/Table';
import { LiaEditSolid } from "react-icons/lia";
import { RiDeleteBinLine } from "react-icons/ri";

const User = ({users}) => {
  const tableStyle = {
    borderRadius: '8px',
    overflow: 'hidden', // Ensure the rounded corners are applied
  };

  return (
    <div className='user-second'>
        <div>
            <h2 className='text-[22px] text-[#5B76FC] mt-2'>All Users</h2>

            <div className="mt-2">
            <Table responsive="md" style={tableStyle}>
        <thead>
          <tr  style={{ backgroundColor: "#EAC8FB", height:"45px", fontSize:"12px", textAlign:"center" }}>
            <th >ID</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Creation Date</th>
            <th>Company</th>
            <th>Appointment</th>
            <th>Status</th>
            
          </tr>
        </thead>
        <tbody>
              {users && users.map((user) => (
                <tr 
                // key={user.id} 
                style={{  textAlign:"center", fontSize:"12px" }}>
                  {/* <td>{user.id}</td> */}
                  <td>{user.username}</td>
                  <td style={{color:"#3468C0"}}>{user.email}</td>
                  {/* <td>{user.phone}</td>
                  <td>{user.cdate}</td>
                  <td>{user.company}</td>
                  <td>{user.appointment}</td>
                  <td >{user.status}</td> */}
                </tr>
              ))}
            </tbody>
      </Table>
            </div>
        </div>
    </div>
  )
}

export default User