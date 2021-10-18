import React from 'react'

const Heading:React.FC<{label:string}> = ({label}) => {
    return (
        <>
            <div className="text-center text-5xl font-semibold">{label}</div>
        </>
    )
}

export default Heading
