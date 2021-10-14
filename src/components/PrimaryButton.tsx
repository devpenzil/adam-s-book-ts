import React from 'react'

function PrimaryButton(props:any) {
    return (
        <>
            <div className="mt-6 text-white">
                <button onClick={props.triggerclick} className="p-2 w-full font-semibold bg-green-appgreendark border-2 border-green-appgreendark rounded-xl outline-none text-base-white hover:opacity-60">{props.label}</button>
            </div>
        </>
    )
}

export default PrimaryButton
