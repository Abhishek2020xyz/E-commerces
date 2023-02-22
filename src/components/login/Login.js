import { useContext } from 'react'
import {useRef} from 'react'
import AuthContext from '../store/auth-context'
import { useNavigate } from 'react-router-dom'



function Login(){
const authCtx = useContext(AuthContext)
const history = useNavigate();
const emailIdRef=useRef('')
const passwordRef=useRef('')

const SubmitHandler =(e)=>{
    e.preventDefault()
     
        const enteredEmail = emailIdRef.current.value;
       const enteredpassword= passwordRef.current.value;
       
     
   
    fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCcDNxwm_rDXN068U1-nrHh3QKnnEGtZbY',{
        method:'POST',
        body:JSON.stringify({
            email:enteredEmail,
            password:enteredpassword,
            returnSecureToken:true
        }),
        headers:{
            'Content-Type': 'application/json'
        }
    }).then((res)=>{
        if(res.ok){
            return res.json()
        }else{
            res.json().then((data)=>{//this also return a promise
                let errormessage = 'authenication Failed'
                // if(data&&data.error&&data.error.message){
                //     errormessage = data.error.message

                // }
                throw new Error(errormessage)
            })
        }
    }).then((data)=>{
        authCtx.Login(data.idToken)
        localStorage.setItem('token',data.idToken)
        console.log(data.idToken)

        
        localStorage.setItem('token',data.idToken)
        history('/store')
    }).catch((err)=>{
        alert(err.message)
    })
   
}

    return(
        
<div>
    <h1 className="the">The Generics</h1>
    
    <form className="Login"onSubmit={SubmitHandler} >
    <h1 className="contact">Login</h1>
        <input id="emailId" type="email" ref={emailIdRef} name="emailId" placeholder="Email address   "/>
        <input id="password" type="text" ref={passwordRef} name="password" placeholder="password"/>

        
      
    <button className="btn btn-primary" style={{margin:'20px'}} >Login</button>
   
    <button className="btn btn-dark">Create new account</button>
    </form>
    
</div>
    )
}
export default Login;