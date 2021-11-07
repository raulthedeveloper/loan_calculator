import {useState, useRef} from 'react'
import { Redirect } from 'react-router';
import axios from "axios";

import {useHistory
  } from "react-router-dom";





const Form = ({page,endpoint})=> {

  
let history = useHistory();
    
    const [userId,setUserId] = useState(String)
    const [password,setPassword] = useState(String)
    const [token, setToken] = useState(String)
    const [firstName, setFirstName] = useState(String)
    const [lastName, setLastName] = useState(String)
    const [confirmPassword, setConfirmPassword] = useState(String)
    const [email, setemail] = useState(String)

    const form = useRef(null);


    const RegisterInputs = () =>{
      return <div>
        <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstname">
       First Name
      </label>
      <input onChange={e => setFirstName(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="firstname" type="text" placeholder="First Name" />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastname">
        Last Name
      </label>
      <input onChange={e => setLastName(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="lastname" type="text" placeholder="Last Name" />
    </div>
      </div>
      
      
    }
    

   const submitForm = () => {
     if(page === 'register'){
      axios.post(endpoint, {
        first_name:firstName,
        last_name:lastName,
        email: email,
        password: password
      })
      .then(function (response) {
        setToken(response.data.accessToken);
        // form.current.reset();
        
      })
      .catch(function (error) {
        console.log(error);
      });
     }
    
     else{
      axios.post(endpoint, {
        email: email,
        password: password
      })
      .then(function (response) {
        setToken(response.data.accessToken);
        form.current.reset();
        
      })
      .catch(function (error) {
        console.log(error);
      });
     }
      
        
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
                email: email,
            }
          };
          
          
          axios(options)
            .then(response => {
                setUserId(response.data)
                 
               return response
            })
            .then((response)=>{
              history.push({
              pathname: '/dashboard/{id})',
              state: {  // location state
                userData:response.data
              },
            });
            });


               
            // history.push({
            //   pathname: '/dashboard/{id})',
            //   state: {  // location state
            //     userData:"8ddf54a9-1491-4d11-b8b4-aa62d3d8826d"
            //   },
            // });
            

        }

        // if(true){
        //   return <Redirect push to={{
        //     pathname:`/dashboard/${userId}`
        //   }} />
        // }
        
        return <Redirect to="/dashboard/8ddf54a9-1491-4d11-b8b4-aa62d3d8826d" />

    }

    // return <Redirect to="/dashboard/8ddf54a9-1491-4d11-b8b4-aa62d3d8826d" />
    
    
    

    return (
    <div className="w-full max-w-md m-auto">

     
      <form ref={form} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        {
          page === "register" ? <RegisterInputs /> : null
        }
      
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
           Email
          </label>
          <input onChange={e => setemail(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input onChange={e => setPassword(e.target.value)} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
          <p className="text-red-500 text-xs italic">Please choose a password.</p>
        </div>

        {
          page === 'register' ? <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Comfirm Password
          </label>
          <input onChange={e => setConfirmPassword(e.target.value)} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
          <p className="text-red-500 text-xs italic">Please choose a password.</p>
        </div> : null
        }
        
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
    
}

export default Form
