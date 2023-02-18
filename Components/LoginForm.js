import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
// import { redirect, useNavigate } from 'react-router-dom';
import { useRouter } from 'next/router'

export default function LoginForm() {
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const { register, handleSubmit } = useForm();
    let router= useRouter()
    const onSubmit = (data) => {
        localStorage.setItem('user',JSON.stringify(data));
        console.log(data);
        router.push('/dashboard')
    }
  return (
    <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-1 flex-col justify-evenly"
        >
<div className="divFlex  loginMain">
        

        <div className="leftBox"><img src="images/2.jpg" alt="Logo"/></div>
        <div className="rightBox">  
        <div className="user divFlex">
        <img src="images/user.png" alt="User" />
        </div>      
        <div className="divWrap">
            <input type="text"  placeholder="Enter your name"  {...register("username")} />
        </div>
        <div className="divWrap">
            <input type="password"  {...register("password")} placeholder="Enter password" />
        </div>
        <div className="divWrap">
        <input type="checkbox" className="remem"/> Remember Me <span><a href="">Forgot Password</a></span>
        </div>
        <div className="divWrap">
            <input type="submit"  className="btn" value="submit" />
        </div>
        </div>
        
    </div>
    </form>
  )
}
