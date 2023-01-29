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

export const action = async ({ request }) => {
  const response = await request.formData();
  const email = response.get('email');
  const validEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
  if (!validEmail.test(email)) return { message: 'Invalid Email'}
  // send data to the back end
  return { message: 'signup successfull!', email }
}