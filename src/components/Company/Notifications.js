import React from 'react'
import "./Notify.css"
import notificationsContent from './notificationsData';

const Notifications = () => {
  const getAnchorText = (type) => {
    switch (type) {
      case 'activate':
        return 'Activate Now';
      case 'renew':
        return 'Renew';
      case 'expire':
        return 'Activate/Renew';
      default:
        return 'Activate Now';
    }
  };
  
  return (
    <>
    <div>
        <h3 className='second-title'>Notifications</h3>
    </div>
    <div className='notify-div-main'>
    {notificationsContent.map(notification => (
          <div key={notification.id} className='notify-div'>
            <div className='notify-title'>
            <h4>{notification.title}</h4>
            </div>
            <div className='notify-text'>
              <p>{notification.text}</p>
              {(notification.type === 'expire' || notification.type === 'renew') && (
                <p>Expiration Date: {notification.date}</p>
              )}
              <p><a href={notification.url} className='text-[blue] hover:underline'>{getAnchorText(notification.type)}</a></p> 
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Notifications