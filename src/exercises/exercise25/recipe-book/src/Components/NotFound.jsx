import React from 'react';
import { useRouteError } from 'react-router';

const NotFound = () => {
    const error = useRouteError()

    console.log(error)
    return (
        <div className='min-h-screen bg-black text-white text-center items-center flex flex-col  justify-center'>
            <h1>Error</h1>
            <p className='text-pink-800'>{error.statusText}</p>
            <p>sorry this page doesn't exists</p>
        </div>
    );
}

export default NotFound;
