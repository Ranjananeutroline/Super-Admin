import React from 'react'
import "./User.css"
import Table from 'react-bootstrap/Table';
import usersData from "./usersData"; 
import { LiaEditSolid } from "react-icons/lia";
import { RiDeleteBinLine } from "react-icons/ri";

const User = () => {
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
          <tr  style={{ backgroundColor: "#d6e0fa", height:"45px", fontSize:"15px", textAlign:"center" }}>
            <th >ID</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Created By</th>
            <th>Creation Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
              {usersData.map((user) => (
                <tr key={user.id} style={{  textAlign:"center", fontSize:"15px" }}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td style={{color:"#3468C0"}}>{user.email}</td>
                  <td>{user.cby}</td>
                  <td>{user.cdate}</td>
                  <td>{user.status}</td>
                  <td>
                    <div className='flex gap-[8px] justify-center'>
                      <button><LiaEditSolid style={{fontSize:"20px",color:"#3468C0"}}/></button>
                      <button><RiDeleteBinLine style={{fontSize:"18px",color:"#D24545"}}/></button>
                    </div>
                  </td>
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