import { Link } from "react-router-dom"


const Header = () =>{
    return(
    <>
    <div class="head">
      <div>
        <p>Logo</p>
        </div>
          <ul>
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Events">Events</Link></li>
            <li><Link to="/Contact">Contact</Link></li>  
          </ul>
          <ul>
          <li><Link to="/Login">Login</Link></li>
          <li><Link to="/Signin">Signin</Link></li>
            {/* <li><Link to="/Register">Register</Link></li> */}
          </ul>
          </div>
         
         

    </>
    )
  }
  export default Header