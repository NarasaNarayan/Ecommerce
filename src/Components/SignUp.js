import React, { useState } from 'react'

function SignUp() {

const [name,setname]=useState('')
const [email,setemail]=useState('')
const [password,setpassword]=useState('')



const submitHandler=(e)=>{
    e.preventDefault();
    if(name==''){
        alert('please enter the user name ')
    }
else if(email==''){
    alert('please enter the emalil');
}
else if(password==''){
    alert('please enter the passwod')
}
else{
    localStorage.setItem('name',name)
    localStorage.setItem('email',email)
    localStorage.setItem('password',password)

}
}

  return (
    <div>
    <form onSubmit={submitHandler}>
  <input type='text'  value={name} onChange={(e)=>setname(e.target.value)}/>
  <input type='text'  value={email} onChange={(e)=>setemail(e.target.value)}/>
 
  <input type='password'   value={password} onChange={(e)=>setpassword(e.target.value)}/>
 <input type='submit' value='submit'/>
</form>

    </div>
  )
}

export default SignUp