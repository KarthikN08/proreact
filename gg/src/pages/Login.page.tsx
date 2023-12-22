import { Button, Grid, TextField } from "@mui/material";
import { useState } from "react";
import{Navigate,Link, useNavigate} from "react-router-dom"


export const Door:React.FC<{}>=()=>{
    let[email,setEmail]=useState<any>()
    let[password,setPassword]=useState<any>()
    let navigate=useNavigate()
    function handlechange(){
        alert("your email is "+email+ "your password is" + password)
        navigate('/PROJECTS/mane')
    }
    return<>

        <Grid container direction="column" justifyContent="center" alignItems="center">
            <h1>welcome to login page</h1>
        <TextField id="outlined-basic" label="Email" variant="outlined" onChange={(e)=>{setEmail(e.target.value)}} />
        <br /><br />
        <TextField id="outlined-basic" label="Password" variant="outlined" onChange={(e)=>{setPassword(e.target.value)}} />
        
        
        <Button color="secondary" onClick={handlechange}>Login</Button>
        
        <Link to= {"/PROJECTS/ Register"}>
        <Button color="secondary">Register</Button>
        </Link>

        </Grid>
  
    
    </>


}

































































