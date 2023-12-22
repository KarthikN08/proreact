import { useRoutes } from "react-router-dom";
import { Airtel, Jio, Otige} from "./entry";
export default  function Karthik (){
    return useRoutes([Airtel,Jio,Otige])
}