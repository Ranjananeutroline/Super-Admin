import React from 'react'
import "./User.css"

const Adduser = () => {
 

  return (
    <div className='user-main'>
        <div className='user-inner'>
        <h1 className='user-title pb-3'>Users</h1>
        <button
            className="shadow-md add-user-btn"
          >
            + User
          </button>
        </div>
    </div>
  )
}

export default Adduser