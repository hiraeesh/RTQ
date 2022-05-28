import {React} from 'react'
import { useState,useEffect } from 'react';

function App() {
   // Empty array in useState!
   const [data, setData] = useState([]);

   useEffect(() => {
     fetch("https://jsonplaceholder.typicode.com/posts")
       .then((res) => res.json())
       .then((data) => {
         setData(data);
       })
       .catch((err) => {
         console.log(err);
       });
   }, []);
 console.warn(data)
   return (
   <>
   <div>
   
       {data.map((item) => (
   
   <div style={{color:'red',margin:'60px'}}>
     
      <h1>{item.userId}</h1>
       <h2>{item.id}</h2>
       <h3>{item.title}</h3>
     
  </div>
     
     
         
       ))}
     
   </div>
   </>
   );}

export default App;
