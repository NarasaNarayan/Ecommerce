import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SignUp = ({ login, handleLogin }) => {
    const navigate = useNavigate()
    const [user, setuser] = useState({
        email: '',
        username: '',
        password: ''
    })

    useEffect(() => {
        if(login) navigate("/Home")
      }, [login])

    let setUserData = (e) => {
        const { name, value } = e.target
        setuser(() => ({
            ...user,
            [name]: value
        }))
    }


    const submitHanler = () => {
        if (user.username == '') {
            alert('name should not be emty')
        }
        else if (user.email == '') {
            alert('eamil should not be emty')
        }
        else if (user.password == '') {
            alert('pasd should not be emty')
        } else {
            let usersLocal = JSON.parse(localStorage.getItem('users'))
                if (usersLocal === null) usersLocal = []
                const users = [...usersLocal]
            const result = users.find(item =>{
                if (item.email == user.email) {
                    alert("user already registered please login")
                    return true
                }
                return false
            })
            if(!result){
            users.push(user)
            localStorage.setItem('users',JSON.stringify(users))
            alert('user registered')
            navigate('/Login')
            }
        }
    }
    return (
        <div>

            <div class="container ">
                <div class="row">
                    <div class="col-12 col-sm 12 col-md-6 col-lg-6 m-auto ">
                        <div class="card">
                            <div class="card-body">
                                <h1 className='text-center'>Login Form</h1>
                                <div class="form-floating mb-3">
                                    <input type="text" class="form-control"  name='username' value={user.username} onChange={setUserData} id="floatingInput" placeholder="Lakshminarayan" />
                                    <label for="floatingInput">Your Name</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <input type="email" class="form-control"  name='email' value={user.email} onChange={setUserData} id="floatingInput" placeholder="name@example.com" />
                                    <label for="floatingInput">Email address</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <input type="password" class="form-control" name='password' value={user.password} onChange={setUserData} id="floatingPassword" placeholder="Password" />
                                    <label for="floatingPassword">Password</label>
                                </div>
                                <div className='d-grid mb-3'>
                                    <button class=' class="form-control btn btn-primary' onClick={submitHanler}>SignUp</button>
                                </div>
                                <p className='text-center'>Already an account?</p>
                                <div>  <Link to='/Login'> <p className='text-center ' style={{  textDecoration: 'none' }}>  Login</p></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default (SignUp)