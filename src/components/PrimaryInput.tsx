import React from 'react'
interface input{
    label:string,
    triggerchange:(e:any)=> void,
    bg?:string,
    type:string,
    value?:string
}
const PrimaryInput:React.FC<input> = ({label,triggerchange,bg,value,type}) => {
    return (
        <>
            <div className="mt-6">
                <div className="font-semibold">{label}</div>
                <input onChange={triggerchange} style={{backgroundColor:`${bg}`}} value={value} className="p-2 w-full font-semibold bg-green-appgreen border-2 border-green-appgreendark rounded-xl outline-none" type={type}  />
            </div>
        </>
    )
}

export default PrimaryInput
