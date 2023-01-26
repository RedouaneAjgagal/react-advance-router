import { Form, Link, useSearchParams, useNavigation, useActionData } from 'react-router-dom';

import classes from './AuthForm.module.css';

function AuthForm() {
  const [seachParams] = useSearchParams();
  const isLogin = seachParams.get('mode') === 'login';

  const { state } = useNavigation();
  const data = useActionData();
  const isSubmitting = state === 'submitting';
  const showErrors = data?.errors ? <ul>{Object.values(data.errors).map(error => <li key={error}>{error}</li>)}</ul> : null;
  return (
    <>
      <Form method="post" className={classes.form}>
        {showErrors}
        <h1>{isLogin ? 'Log in' : 'Create a new user'}</h1>
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </p>
        <p>
          <label htmlFor="image">Password</label>
          <input id="password" type="password" name="password" required />
        </p>
        <div className={classes.actions}>
          <Link to={`?mode=${isLogin ? 'signup' : 'login'}`}>
            {isLogin ? 'Create new user' : 'Login'}
          </Link>
          <button disabled={isSubmitting}>{isSubmitting ? 'Submitting...' : 'Save'}</button>
        </div>
      </Form>
    </>
  );
}

export default AuthForm;
