import React from 'react'
import {useHistory} from 'react-router-dom'
function DashBoard() {
    const history = useHistory()
    const logout = () => {
        localStorage.clear()
        history.push("/")
    }
    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <div className="container mx-auto">
            <div className='text-9xl '>
                Now You are in dashboard
            </div>
            <button onClick={logout} className='bg-base-red text-base-white font-bold px-6 rounded-3xl py-1'>
                Logout
            </button>
            </div>
        </div>
    )
}

export default DashBoard
