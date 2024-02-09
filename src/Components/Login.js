import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = ({}) => {
    const navigate = useNavigate()
    const [login, setlogin] = useState(false)

    useEffect(() => {
        if (!login) {
            navigate("/Login")
        }
    }, [])

    useEffect(() => {
        loadData()
      }, [])
    
      let loadData = () => {
        const user = JSON.parse(localStorage.getItem('loggedInUser'))
        console.log(user);
        if (user !== null) {
          setuser(user)
          setlogin(true)
        }
      }
    
      const handleLogin = () => {
        loadData()
      }
    

    const [user, setuser] = useState({
        email: '',

        password: ''
    })

    let setUserData = (e) => {
        const { name, value } = e.target
        setuser(() => ({
            ...user,
            [name]: value
        }))
    }







    const submitHanler = () => {



        if (user.email == '') {
            alert('email should not be emty')
        }
        else if (user.password == '') {
            alert('pasd should not be emty')
        }
        else {
            const userData = JSON.parse(localStorage.getItem('users'))
            if (userData === null) userData = []
            const users = [...userData]
            const result = users.find(item => {
                if (item.email === user.email) {
                    if (item.password === user.password) {
                        return true
                    }
                }
                return false
            })
            if (result) {
                let currentUser = users.filter(item => {
                    if (item.email == user.email) {
                        return item
                    }
                })
                localStorage.setItem('loggedInUser', JSON.stringify(Object.assign({}, ...currentUser)))
                handleLogin()
                navigate('/')
            } else {
                alert('email or password is wrong')
            }
        }

    }
    const color={
        textDecoration: 'none'
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
                                    <input type="email" value={user.email} name='email'  onChange={setUserData} class="form-control" id="floatingInput" placeholder="name@example.com" />
                                    <label for="floatingInput">Email address</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <input type="password" value={user.password} name='password' onChange={setUserData} class="form-control" id="floatingPassword" placeholder="Password" />
                                    <label for="floatingPassword">Password</label>
                                </div>
                                <div className='d-grid mb-3'> 
                                    <button class=' class="form-control btn btn-primary' onClick={submitHanler}>Login</button>
                                </div>
                                <div> <Link to='/SignUp' className='underlineRemove'> <p className='text-end '  >Forgot Password?</p></Link> <br /></div>
                                <div>  <Link to='/SignUp' className='underlineRemove'> <p className='text-center'>  SignUp</p></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default (Login)