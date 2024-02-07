import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'


function Signup() {
    const [name,setName]=useState()
    const [email,setEmail]=useState()
    const [password,setpassword]=useState()

    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:3001/register', {name, email, password})
        .then(result=>{
            console.log(result)
        })
        .catch(err=>{
            console.log(err)
        })
    }
    
  return (
    <div className='d-flex justify-content-center align-item-center bg-secondary vh-100 '>
        <div className='bg-white p-3 m-5 rounded w-25 '>
            <h2>Registration</h2>
            <form className='mt-5'onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor="name">
                        <strong>Name</strong>
                    </label>
                    <input type="text" placeholder='Enter Name' autoComplete='off' name='name' className='form-control rounded-0' onChange={(e)=>setName(e.target.value)} />
                </div>

                <div className='mb-3'>
                    <label htmlFor="email">
                        <strong>Email</strong>
                    </label>
                    <input type="email" placeholder='Enter Email' autoComplete='off' name='email' className='form-control rounded-0' onChange={(e)=>setEmail(e.target.value)}/>
                </div>

                <div className='mb-3'>
                    <label htmlFor="password">
                        <strong>Password</strong>
                    </label>
                    <input type="text" placeholder='Enter Password' autoComplete='off' name='password' className='form-control rounded-0' onChange={(e)=>setpassword(e.target.value)}/>
                </div>
                <button className='btn btn-success w-100 rounded-0 mb-4'>Register</button>
                </form>
                <p>Already Have an Account</p>
                <Link to='/login' className='btn btn-default border w-100 g-light rounded-0 mb-0'>Login</Link>
        </div>
    </div>
  )
}

export default Signup