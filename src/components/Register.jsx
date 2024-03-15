import { useState } from "react"
import { useNavigate } from 'react-router-dom'

const Register =() =>{
    const [FirstName,setname]=useState('')
    const[LastName,setlname]=useState('')
    const [errors, setErrors] = useState("")
    const[email,setemail]=useState('')
    // const[allchecked, setAllchecked]=useState('')
    const[planningneeds,setplan]=useState('')
    const[date,setDate]=useState("none")
     
    const onDateChange =(event)=>{
        setDate(event.target.value)
    }

    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault()
        let err = {}
    if (Object.keys(err).length > 0){
        setErrors({...err})
        return
      }
      if(email.length < 3 ){
        err.email="Email is incorrect"
      }
      navigate("/home")
    }

    const handleEmailChange = (e)=>{
        setemail(e.target.value)
        setErrors({...errors,email:''})
      }

      const handlefirstname = (e) => {
        setname(e.target.value)
        setErrors({...errors,FirstName:''})
      }

      const handlelastname = (e) => {
        setlname(e.target.value)
        setErrors({...errors,LastName:''})
      }

     

      const handleplanChange= (e) => {
        setplan(e.target.value)
        setErrors({...errors,LastName:''})
      }

      function handleChange(e) {
        if (e.target.checked) {
           setAllChecked([...allchecked, e.target.value]);
        } else {
           setAllChecked(allchecked.filter((item) => item !== e.target.value));
        }
     }
      
    return(
    <>
       <form  onSubmit={handleSubmit}>
        <div className="main">
        <h2>LET'S GET THE PARTY STARTED</h2>
        </div>
        <div className="input">
        <div className="container">
            <label htmlFor="name">FirstName<sup>*</sup></label>
            <input value={FirstName} onChange={handlefirstname}/>
            {errors.FirstName && <div className='error'>{errors.FirstName}</div>}
            </div>
            <div className="container">
            <label htmlFor="name">LastName<sup>*</sup></label>
            <input value={LastName} onChange={handlelastname}/>
            {errors.LastName && <div className='error'>{errors.LastName}</div>}
            </div>
            <div className="container">
                <label htmlFor="e-mail">E-mail <sup>*</sup></label>
                <br />
                <input type="text" id="e-mail" value={email} onChange={handleEmailChange}/>
                {errors.email && <div className='error'>{errors.email}</div>}
                </div>

         <div className="container">
         <label htmlFor="checkbox">Event Type(required)<sup>*</sup></label>
            {/* <br />
            <label className="label"><input value="one" type="checkbox" onChange={handleChange}/>Birthday</label>
            <br />
            <label className="label"><input value="two" type="checkbox" onChange={handleChange}/>Wedding</label>
            <br />
            <label className="label"><input value="three" type="checkbox" onChange={handleChange}/>Coporate</label>
            <br />
            <label className="label"><input value="four" type="checkbox" onChange={handleChange}/>Family-Gathering</label>
            </div> */}
            <input type="text" />
            </div>

            <div className="container">
                 Event Date(required)<sup>*</sup>
                <br /><input type="date"  value={date} onChange={onDateChange} />
            </div>
            <div className="container">
            Planning Needs
            <input value={planningneeds}  onChange={handleplanChange} />
            </div>
            
           
          
        <div>
        <button type="submit">Plan Now</button>
        </div>
        </div>
        
        </form>
        </>
    )
}


export default Register