import logo from "../../Images/knowledge.png"
import "./Header.css"
import { Link } from "react-router-dom";
function Header(){
    return(
        <div className="header">
            <nav className="nav">
                <Link to="/"><img src={logo} alt="logo"  id="logo"/></Link>
                <h1 id="logo-title" > Share Your Knowledge</h1>
                <Link to="/share"><button className="shareBtn">Share now</button></Link>
               </nav>
                   </div>

    )
}
export default Header;