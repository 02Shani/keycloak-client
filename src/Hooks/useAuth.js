import { useRef, useState } from "react"
import Keycloak from 'keycloak-js';
import { useEffect } from 'react';

const client=new Keycloak({
  url:'http://localhost:8080',
  realm:'myname',
  clientId:'clientid'
})

const useAuth=()=>{
    const run =useRef(false)
    let [isLogin,setLogin]=useState(false)
    let [token, setToken]=useState(null)
    useEffect(()=>{
      if(run.current) return;
        run.current=true
        client.init({onLoad:"login-required"}).then((resp) => {
          console.log(resp);
          setLogin(resp)
          setToken(client.token)
        })
        
      },[])
      
    return [isLogin,token];
}

export default useAuth
