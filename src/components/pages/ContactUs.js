import {useRef} from 'react'


function ContactUs(){
const usernameRef=useRef('')
const emailRef=useRef('')
const phoneRef=useRef('')
// const message=useRef('')

const SubmitHandler =(e)=>{
    e.preventDefault()
    const data ={
        name:usernameRef.current.value,
        email:emailRef.current.value,
        phone:phoneRef.current.value,
        // message:messageRef.current.value
     }
    console.log(data)
    fetch('https://contact-ecommerce-http-default-rtdb.firebaseio.com/contactInfo.json',{
        method:'POST',
        body:JSON.stringify(data),
        headers:{
            'content-Type':'application/json'
        }
    })
    usernameRef.current.value=''
    emailRef.current.value=''
    phoneRef.current.value=''
    // messageRef.current.value=''
}

    return(
        
<div>
    <h1 className="the">The Generics</h1>
    <h1 className="contact">Contact Us</h1>
    <form className="contactUs"onSubmit={SubmitHandler} >
        <label>Enter your details</label>
        <input id="username" type="text" ref={usernameRef} name="username" placeholder="Name"/>
        <input id="email" type="text"  ref={emailRef} name="email"  placeholder="E-mail"/>
        <input id="phone" type="Number"  ref={phoneRef} name="phone" placeholder="Phone number"/>
        <input id="message" type="text" name="message" placeholder="Message"/>
    <button className="button_btn" >Submit</button>
    </form>
</div>
    )
}
export default ContactUs;