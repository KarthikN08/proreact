import { useRoutes } from "react-router-dom";
import { Airtel, Jio} from "./entry";
export default  function Karthik (){
    return useRoutes([Airtel,Jio])
}