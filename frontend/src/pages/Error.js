import React from 'react'
import { useRouteError } from 'react-router-dom'
import MainNavigation from '../components/MainNavigation';

const Error = () => {
    const error = useRouteError();
    let errorMsg = `Please try again`;

    if (error.status === 500) {
        errorMsg = `${error.data.errorMsg} Error Status: ${error.status}`;
    }
    if (error.status === 404) {
        errorMsg = `${error.data}, Error Status: ${error.status}`;
    }

    return (
        <>
            <MainNavigation />
            <h1>Something Went Wrong!</h1>
            <p>{errorMsg}</p>
        </>
    )
}

export default Error