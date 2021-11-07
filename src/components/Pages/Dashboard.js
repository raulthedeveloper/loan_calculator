import axios from 'axios'
import {useState,useEffect} from 'react';
import { useLocation } from 'react-router';
import {Link } from "react-router-dom";




const Dashboard = (props) => {
    const [response,setResponse] = useState(String)

    const location = useLocation()


    // get url from user id from api and make post request. If fail redirect HOME

    const getData = () =>{



    
        
        const options = {
            url: `http://localhost:3300/dashboard/${location.state.userData}`,
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json;charset=UTF-8',

            },
            data: {
                
            }
          };
          
          
          axios(options)
            .then(response => {
                console.log(response.data)
                setResponse(response.data)
                
            });

            
    }

    useEffect(()=>{
        getData()
    },[])

    

    return (
        <div>
            <h1 className="text-white text-4xl text-center">I am the dashboard</h1>
            <Link className="btn"
            to={{
                pathname:"/loan_calculator/" + location.state.userData
            }}
            >Loan Calculator</Link>
        {
          response ?  response.map((e,index) =>{
                return <ul key={index + e.name} className="list-none md:list-disc bg-white border-4 border-light-blue-500">
                <li>{e.name}</li>
                <li>{e.loan}</li>
              </ul>
            })  : null
        }
        </div>
    )
}

export default Dashboard
