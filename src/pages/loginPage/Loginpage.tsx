import React from 'react'
import Homeimg from './components/Homeimg'
import LoginForm from './components/LoginForm'
function Loginpage() {
    console.log(process.env)
    return (
        <>
        <div className="flex">
            <div className="w-1/2">
                <Homeimg  />
            </div>
            <div className="w-1/2">
                <LoginForm />
            </div>
        </div>
    </>
    )
}

export default Loginpage
