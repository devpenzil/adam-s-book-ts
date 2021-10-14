import React from 'react'
import img from '../../../assets/home-img.png'
function Homeimg() {
    return (
        <>
            <div className="w-full min-h-screen flex justify-center items-center">
                <div>
                    <img src={img} alt="home img" />
                    <div className="text-center text-2xl font-semibold">Adam's Book</div>
                </div>
            </div>
        </>
    )
}

export default Homeimg
