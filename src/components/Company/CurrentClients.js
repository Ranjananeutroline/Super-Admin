import React from 'react'
import "./Company.css"
import Table from 'react-bootstrap/Table';


const CurrentClients = () => {

  

  const tableStyle = {
    borderRadius: '8px',
    overflow: 'hidden', // Ensure the rounded corners are applied
  };

  

  return (
    <div className='company-second'>
        <div>
            <h2 className='text-[22px] text-[#5B76FC] mt-2'>Current Clients</h2>

            <div className="mt-2">
            <Table responsive="md" style={tableStyle}>
        <thead>
          <tr  style={{ backgroundColor: "#d6e0fa", height:"45px", fontSize:"15px", textAlign:"center" }}>
            <th className='font-medium'>SN</th>
            <th className='font-medium'>Company Name</th>
            <th className='font-medium'>Company ID</th>
            <th className='font-medium'>Account Number</th>
            <th className='font-medium'>EIN/PAN Number</th>
            <th className='font-medium'>Status</th>
            <th className='font-medium'>Start Date</th>
            <th className='font-medium'>End Date</th>
            <th></th> 
          </tr>
        </thead>
        <tbody>
                    <tr
                        style={{
                          textAlign: 'center',
                          fontSize: '15px',
                        }}
                      >
                      <td>1</td>
                      <td>Neutroline</td>
                      <td>12312</td>
                      <td>1230232</td>
                      <td>8686</td>
                      <td>active</td>
                      <td>30/08/2021</td>
                      <td>05/05/2040</td>
                    </tr>
                  
                
                   
             
              
            </tbody>
      </Table>
            </div>
        </div>
    </div>
  )
}

export default CurrentClients