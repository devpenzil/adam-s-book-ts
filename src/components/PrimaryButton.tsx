import React from 'react'

const PrimaryButton:React.FC<{triggerclick:()=> void, label:string, }> = ({triggerclick,label}) => {
    return (
        <>
            <div className="mt-6 text-white">
                <button onClick={triggerclick} className="p-2 w-full font-semibold bg-green-appgreendark border-2 border-green-appgreendark rounded-xl outline-none text-base-white hover:opacity-60">{label}</button>
            </div>
        </>
    )
}

export default PrimaryButton
