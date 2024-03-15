import { useNavigate } from "react-router-dom"

const Contact =(props)=>{
    let navigate=useNavigate()
    function handleClick(){
        navigate('/Register')
    }
    return(
        <>
        {/* <h1>CONTACT</h1> */}
        <div className="bg-image1"></div>
        
        {/* <img className="pro-img" src={props.img} /> */}
        <div className="for">
        <p> For general business,event and career inquiries
            <br />yo@guwonevents.com
            <br />PH: 816-723-3066
        </p>
        <div className="register">
            <p>For event inquiries,pleasae fill out the form below and <br /> one of our team members will get back to you within 48 hours.</p>
        </div>
        <div className="reg-button">
        <button onClick={handleClick}>Book now</button>
        </div>

        </div>
        


        
        </>
    )
}
export default Contact