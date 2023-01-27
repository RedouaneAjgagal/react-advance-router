import React, { useEffect } from 'react'
import { Outlet, useSubmit } from 'react-router-dom'
import MainNavigation from '../components/MainNavigation'
import { getToken } from '../util/Auth'
import { checkExpiration } from '../util/Auth'

const Root = () => {
  const submit = useSubmit();
  const token = getToken();
  const experationTime = checkExpiration();

  useEffect(() => {
    if (!token) return;

    if (token === 'EXPIRED') {
      submit(null, { action: '/logout', method: 'post' });
      return;
    }

    const checkExperationTime = setTimeout(() => {
      submit(null, { method: 'post', action: '/logout' })
    }, experationTime);
    return () => clearTimeout(checkExperationTime);
  }, [token, submit, experationTime]);

  return (
    <>
      <MainNavigation />
      <main style={{ display: 'flex', justifyContent: 'center' }}>
        <Outlet />
      </main>
    </>
  )
}

export default Root;