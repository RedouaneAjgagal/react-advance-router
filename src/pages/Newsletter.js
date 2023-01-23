import React from 'react';
import NewsletterSignup from '../components/NewsletterSignup';

const Newsletter = () => {
  return (
    <div>
        <h1>Join Our Newsletter!</h1>
        <NewsletterSignup />
    </div>
  )
}

export default Newsletter

export const action = async ( {request} ) => {
    const response = await request.formData();
    const email = response.get('email');
    // send data to the back end
    return {message: 'signup successfull!', email}
}