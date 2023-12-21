import  a1 from "../img/1.jpeg"
import a2  from "../img/2.jpeg"
import a3 from "../img/3.jpeg"

export const Danny:React.FC=()=>
{
   let  leo=[a1,a2,a3]
   return<>


   <h1>hello welcome to my page using img tag </h1>
   <img    height={'600px'} src={a1}  />
   <img height={'600px'} src={a2}  />
   <img height={'600px'}   src={a3}  />
   <br />


    <h1>this is another way by calling function</h1>
   <Byfuction/>
   {Byfuction()}
   <br />

   <h1>using maped function </h1>

   {leo.map(()=>{
    return <Byfuction/>
   })}

   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   </>
}
 var Byfuction=()=>{
    return <>
    {/* calling image by their default img tag */}
    <img src={a3} height={'700px'} />
    </>
 }