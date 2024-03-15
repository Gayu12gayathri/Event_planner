import { useState } from "react"
import { useNavigate } from "react-router-dom"
const Login =() =>{
    const[email,setemail]= useState('')
    const[password,setpassword]= useState('')
    const[error,seterror]=useState('')

    let navigate=useNavigate()
    function handleClick(){
        navigate('/Signin')
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        let err = {}
        // setEmail(e.target.value
    
        if(!email ){
          err.email="Email is incorrect"
        }
        if(!password){
            err.password = "Password is incorrect"
          }
       
        if (Object.keys(err).length > 0){
            seterror({...err})
            return
          }
        console.log(email,password)
        setemail('')
      setpassword('')
      }
      
      const handleEmailChange = (e)=>{
        setemail(e.target.value)
        seterror({...error,email:''})
      }
      const handlePasswordChange=(e)=>{
        setpassword(parseInt(e.target.value))
        seterror({...error,password:''})
      }

    

    return(
        <>
        <form  onSubmit={handleSubmit} >
      <div className="input-container">
        <div className="input1">
        <b>Email:</b><input value={email} placeholder="Enter your Email here" onChange={handleEmailChange}/>
        {error.email && <div className='error'>{error.email}</div>}
        </div>
        <br />
        <div className="input1">
        <b>Password:</b><input value={password} placeholder="Enter your password here" onChange={handlePasswordChange}></input>
        {error.password ? <div className='error'>{error.password}</div>: null}
        
        </div>
        {/* <div className="input1">
            <label><input type="checkbox" />Remember me</label>
        </div> */}
        <button type="submit">LogIn</button>
        <button onClick={handleClick}>SignIn</button>
        </div>
        {/* <div className="reg-button">
        <button onClick={handleClick}>SignIn</button>
        </div> */}
        
        </form>
        </>
    )
}

export default Login