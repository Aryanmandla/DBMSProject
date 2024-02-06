import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import CardButton from '../Components/CardButton'
import '../Css/Component.css';
const HomeScreen = () => {
    return (
        <div className='home-screen'>
            <div className='navbar'>
                <h1 className='welcome-text'>Welcome Admin</h1>
                <button className='button-loginout' onClick={() => console.log('Log In Clicked!')}>Log In</button>
                <button className='button-loginout' onClick={() => console.log('Log Out Clicked!')}>Log Out</button>
            </div>

            <div className='center-component'>
                <div className='card-layout'>
                    <Link to='/register-fir'>
                        <CardButton className='button-link' text='Register FIR' />
                    </Link>
                    <Link to='update-fir'>
                        <CardButton className='button-link' text='Update FIR' onClick={() => console.log('Update FIR Clicked!')} />
                    </Link>
                    <Link to='delete-fir'>
                        <CardButton className='button-link' text='Delete FIR' onClick={() => console.log('Delete FIR Clicked')} />
                    </Link>
                    <Link to='delete-criminal-record'>
                        <CardButton className='button-link' text='Delete Criminal Record' onClick={() => console.log('Delete Criminal Record Clicked!')} />
                    </Link>
                    <Link to='update-criminal-record'>
                        <CardButton className='button-link' text='Update Criminal Record' onClick={() => console.log('Update Criminal Record Clicked!')} />
                    </Link>
                    <Link to='add-criminal'>
                        <CardButton className='button-link' text='Add Criminal' onClick={() => console.log('Add Criminal Clicked!')} />
                    </Link>
                    <Link to='retrieve-criminal-record'>
                        <CardButton className='button-link' text='Retrieve Criminal Record' onClick={() => console.log('Retrieve Criminal Record Clicked!')} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HomeScreen