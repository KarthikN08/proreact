import { Button, Grid, TextField } from "@mui/material";
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

 export const Register:React.FC<{}>=()=>{
    let[name,setName]=useState<any>()
    let[email,setEmail]=useState<any>()
    let[password,setPassword]=useState<any>()
    let navigate=useNavigate()
    let pinku=()=>{
        alert("your name is"+name+ "your email is" +email+ "your pasword is"+ password);
        navigate('/PROJECTS/mane')
    }
    return<>
         <Grid container direction="column" justifyContent="center" alignItems="center">
        <h1>REGISTRATION PAGE PAGE</h1>
        <TextField id="outlined-basic" label="Name" variant="outlined" onChange={(e)=>{setName(e.target.value)}}/>
        <br />
        <TextField id="outlined-basic" label="EMAIL" variant="outlined"  onChange={(e)=>{setEmail(e.target.value)}} />
        <br />
        <TextField id="outlined-basic" label="PASSWORD" variant="outlined" onChange={(e)=>{setPassword(e.target.value)}}/>
        <br />





            <Button color="secondary" onClick={pinku}>Login</Button>

            <Link to="/PROJECTS/register">
            <Button color="secondary">Register</Button>
            </Link>


         </Grid>
 
    </>

 }