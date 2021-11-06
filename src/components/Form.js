import {useState, useRef} from 'react'
import { Redirect } from 'react-router';
import axios from "axios";

import {useHistory
  } from "react-router-dom";



const Form = ({page,endpoint})=> {
let history = useHistory();
    
    const [userName,setUserName] = useState(String)
    const [password,setPassword] = useState(String)
    const [token, setToken] = useState(String)
    const [userId, setUserId] = useState(String)

    const form = useRef(null);

    

   const submitForm = () => {
      
        axios.post(endpoint, {
            user_name: userName,
            password: password
          })
          .then(function (response) {
            setToken(response.data.accessToken);
            form.current.reset();
            
          })
          .catch(function (error) {
            console.log(error);
          });
        //   miguel22
        //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoicmF1bCIsImlhdCI6MTYzNTk5MDMyMywiZXhwIjoxNjM1OTkzOTIzfQ.HeW-F8iznf38GSrYqcPHR69R_4sZfaXhi-O_Bcq-g5Y"

        if(page === 'login'){
        const options = {
            url: 'http://localhost:3300/user_id',
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json;charset=UTF-8',
              'Authorization': `Bearer ${token}`

            },
            data: {
                user_name: userName,
            }
          };
          
          
          axios(options)
            .then(response => {
                setUserId(response.data)
              
            });
          
            history.push(`/dashboard/${userId}`)

        }
       


    }
    
    

    return (
        (
    <div className="w-full max-w-md m-auto">
      <form ref={form} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input onChange={e => setUserName(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input onChange={e => setPassword(e.target.value)} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
          <p className="text-red-500 text-xs italic">Please choose a password.</p>
        </div>
        <div className="flex items-center justify-between">
          <button onClick={submitForm} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Sign In
          </button>
          <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
            Forgot Password?
          </a>
        </div>
      </form>
      <p className="text-center text-gray-500 text-xs">
        &copy;2020 Acme Corp. All rights reserved.
      </p>
    </div>
        )
    )
}

export default Form
