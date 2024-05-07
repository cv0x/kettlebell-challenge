import { useState } from "react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import axios from "axios";
import {toast} from "react-hot-toast"
import { useNavigate } from "react-router-dom";

export default function Register() {
    const navigate = useNavigate()
    const [data, setData] = useState({
        name: "", 
        email: "", 
        password: ""
    })

    const registerUser = async(e) => {
        e.preventDeffault();
        const { name, email, password } = data 
        try {
            const {data}= await axios.post('/register', { name, email, password })
            if (data.error) {
                toast.error(data.error)
            } else {
                setData({})
                toast.success('User created')
                navigate('/login')
            }
        } catch (error) {
            console.log(error)
            
        }    
    }
  return (

    <div className='bg-gray-200 '>
        <form onSubmit={registerUser} className="flex flex-col bg-blue-600 ">
            <label>Name </label>
            <input type="text" placeholder='Name' value={data.name} onChange={(e) => setData({...data, name: e.target.value})}/>
            <label>Email </label>
            <input type="email" placeholder='Email' value={data.email} onChange={(e) => setData({...data, email: e.target.value})}/>
            <label>Password </label>
            <input type="password" placeholder='Password' value={data.password} onChange={(e) => setData({...data, password: e.target.value})}/>
            <button type='submit'>Submin</button>
        </form>
    </div>
  )
}
