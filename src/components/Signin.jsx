import {useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'
const Signin=()=>{
    const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState("")
  const [phone, setPhone] = useState('')
  const [username, setUsername] = useState("")
  const [repass, setRepass] = useState('')
//   const [errors, setErrors] = useState("")
  const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault()
        let err = {}
        if(email.length < 3 ){
          err.email="Email is incorrect"
        }
        if(!phone){
            err.phone = "phoneno is incorrect"
          }
          if(!username){
            err.username = "Username is incorrect"
          }
          if(!password){
            err.password = "Password is incorrect"
          }
          if(!repass){
            err.repass = "Username is incorrect"
          }
        if (Object.keys(err).length > 0){
            setErrors({...err})
            return
          }
          
        // console.log(email,password)
    //     setEmail('')
    //   setPassword('')
      }
      const handleEmailChange = (e)=>{
        setEmail(e.target.value)
        setErrors({...errors,email:''})
      }
      const handlePasswordChange=(e)=>{
        setPassword(parseInt(e.target.value))
        setErrors({...errors,password:''})
    
      }
      const handlePhoneChange=(e)=>{
        setPhone(parseInt(e.target.value))
        setErrors({...errors,phone:''})
    
      }
      const handleUsernameChange=(e)=>{
        setUsername(parseInt(e.target.value))
        setErrors({...errors,username:''})
    
      }
      const handleRepassChange=(e)=>{
        setRepass(parseInt(e.target.value))
        setErrors({...errors,repass:''})
    
      }
      navigate("/Login")
      return (
      <>
     
        <form  onSubmit={handleSubmit} >
            <div className='input-containers'>
            
                <div className="container">
                <label htmlFor="e-mail">E-mail <sup>*</sup></label>
                <input type="text" id="e-mail" value={email} onChange={handleEmailChange}/>
                {errors.email && <div className='error'>{errors.email}</div>}
                </div>
                <div className="container">
                <label htmlFor="password">Password <sup>*</sup></label>
                <input type="text" id="password" value={password} onChange={handlePasswordChange} />
                {errors.password ? <div className='error'>{errors.password}</div>: null}
                </div>
                <div className="container">
                <label htmlFor="phone-no">Phone Number <sup>*</sup></label>
                <input type="text" id="phone" value={phone} onChange={handlePhoneChange}/>
                {errors.phone && <div className='error'>{errors.phone}</div>}
                </div>
                <div className="container">
                <label htmlFor="username">Username <sup>*</sup></label>
                <input type="text" id="username" value={username} onChange={handleUsernameChange} />
                {errors.username? <div className='error'>{errors.username}</div>: null}
                </div>
                <div className="container">
                <label htmlFor="repass">Re-enter Password <sup>*</sup></label>
                <input type="text" id="repass" value={repass} onChange={handleRepassChange} />
                {errors.repass? <div className='error'>{errors.repass}</div>: null}
                </div>
                    <button type="submit">Signin</button>
            </div>    
        </form>
      </>
      )
}
export default Signin