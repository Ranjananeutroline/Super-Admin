const notificationsContent = [
    { 
        id: 1,
        title: 'Activate Your Account',
        text: 'Welcome to [Company Name]! We are thrilled to have you on board. Before you can access all the amazing features, please activate your account by clicking the link below:',
        url: 'https://example.com/activate',
        type: 'activate'
     },
    { 
        id: 2, 
        title: 'Renewal',
        text: 'We hope you have been enjoying your experience with [Company Name]. We wanted to remind you that your Service is set to expire soon. To continue enjoying uninterrupted access to our services, please renew your Service before it expires.',
        date:'05/30/2023',
        url: 'https://example.com/renewal',
        type: 'renew'
     },
    { 
        id: 3, 
        title: 'Expiration',
        text: 'This is a friendly reminder that your Service with [Company Name] is set to expire soon. Please take the necessary actions to renew or extend your Service to avoid any interruptions.',
        date:'05/30/2023',
        url: 'https://example.com/expiration',
        type: 'expire'
     }
  ];
  
  export default notificationsContent;