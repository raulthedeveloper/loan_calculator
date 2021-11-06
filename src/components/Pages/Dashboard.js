import axios from 'axios'
import React from 'react';
import { useParams } from 'react-router';




const Dashboard = () => {

    let id =useParams().id
    // get url from user id from api and make post request. If fail redirect HOME

    const getData = () =>{
        
        
        const options = {
            url: `http://localhost:3300/dashboard/${id}`,
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
              
            });
    }

    return (
        <div>
            <h1>I am the dashboard</h1>
            <button className="btn" onClick={getData}>test</button>
        </div>
    )
}

export default Dashboard
