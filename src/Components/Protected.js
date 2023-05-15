import axios from "axios"
import { useEffect, useRef, useState } from "react"
const Protected=(props)=>{
    let isRun=useRef(false)
    console.log("Protected",props.token);
    let [data ,setdata]=useState(null)
    
    useEffect(()=>{
        if(isRun.current) return;
        
        isRun.current=true
        
        const config={
            headers:{
                authorizaton:`Bearer ${props.token}`,
        }}
        
        console.log("config",config);
        axios.get('http://localhost:5000',config).then((resp)=>{
            console.log(resp.data);
            setdata(resp.data)
        }).catch((error)=>{
            console.log(error.message);
        });
    },[])
    return data?<>{data.map((data)=>{return <h3>{data}</h3>})}</>:<div>Protected</div>
}
export default Protected