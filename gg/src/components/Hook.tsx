import { ChangeEvent, useState } from "react"
export const Bulla:React.FC<{}>=()=>{
    let[val,setval]=useState('')
    const gulla=(e: ChangeEvent<HTMLInputElement>)=>{setval(e.target.value)}
    return <>
    <br /><input type="text" onChange={gulla}/>
    <h1>ENTERED TEXT IS DISPLAYED HERE = </h1> <h1>{val}</h1>
    </>
}

    