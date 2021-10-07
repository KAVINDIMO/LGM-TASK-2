import React,{useState,useEffect, Component } from 'react';
import axios from 'axios';
import ProfTab from './components/ProfTab';


import './css/index.css';


function App (){
  const [profile,setprofile] = useState([]);
  const [loading,setloading] = useState(false);
  const [load,setload] = useState(false);



  const prof = async () => {
       try{
         const request = await axios
         .get(`https://reqres.in/api/users`)
         .then(res => {
           console.log(JSON.stringify(res.data.data))
           setprofile(res.data.data)
         });
         setTimeout(function() {
            setloading(true);
         }, 1000); 
        
       }catch(e){
         console.log(e) 
       }
  };
  
  // useEffect( () => {
  //   prof()
  // },[])

  return (
 
  
    <div className="App">
         <div className="nav">
          <img src="https://image.shutterstock.com/image-vector/rest-api-concept-modern-big-260nw-1818087782.jpg" alt="brand" />
           <span><a>Home</a></span>
          <button onClick={prof}>FETCH</button>
         </div>
  
    <div className="api">
    {
      loading ?
          profile.map(item => (
            <li key={item.id}>
             
              <ProfTab avatar={item.avatar} first_name={item.first_name} email={item.email}/>
              
            </li>
          ))
          :
          <img className="loader" src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif"/>
    }
    </div>
    </div>
  );
}

export default App;
