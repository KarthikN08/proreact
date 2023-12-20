import { Button, Paper } from "@mui/material"
import { Link } from "react-router-dom"

import {LabTabs} from "../pages/alllessons"

export const Airtel={
    path:'/',
    element:<div>
        <Paper>
            <center><br /><br /><br /><h1>Hello guys welcome to karthik page </h1><br />
             <h1>Please choose the below options to continue</h1><br/>
            <Button variant="outlined">
                 PROJECTS
            </Button>
             < Link to ="/pop">
                <Button variant="contained">
                    LESSONS
                </Button>
             </Link>
             </center>
         </Paper>
    </div>
}
  


export const Jio={
    path:'/pop',
    element:<>
        <h1>THIS IS THE TABS
        </h1><LabTabs />
        </>
}
