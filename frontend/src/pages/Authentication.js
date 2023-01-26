import { json, redirect } from 'react-router-dom';
import AuthForm from '../components/AuthForm';

function Authentication() {
  return <AuthForm />;
}

export default Authentication;


export const action = async ({ request }) => {
  const seachParams = new URL(request.url).searchParams;
  const mode = seachParams.get('mode') || 'login';

  if (mode !== 'login' && mode !== 'signup') throw json({ errorMsg: 'Unsupported mode.' }, { status: 422 })

  const formValues = await request.formData();
  const data = {
    email: formValues.get('email'),
    password: formValues.get('password'),
  }
  const response = await fetch(`http://localhost:8080/${mode}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  if (response.status === 401 || response.status === 422) return response;
  if (!response.ok) throw json({ errorMsg: "Couldn't Submit Form Values" }, { status: 500 });
  return redirect('/')
}