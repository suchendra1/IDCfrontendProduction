import { Link } from 'react-router-dom'
import logo from "./logo.png"
import Cookies from "js-cookie"

import './index.css'

const Header = props => {
  const onClickLogout=()=>{
    const {onLogChange} = props
    Cookies.remove("jwt_token");
    Cookies.remove("user_type");
    onLogChange(undefined)
    const {history} = props;
    history.replace("/");
  }
  const {userType}=props;
  if(userType===undefined)
    return (<nav className="nav-header">
      <div className="record-container">
        <img src={logo} alt="logo" className='logo'/>
        <ul className="nav-menu-login-header">
          <Link className="nav-link" to="/">
            <li>Login</li>
          </Link>
          <Link className="nav-link" to="/register">
            <li>Register</li>
          </Link>
        </ul>
      </div>
    </nav>)
  if(userType==="User")
    return (<nav className="nav-header">
              <div className="record-container">
                <img src={logo} alt="logo" className='logo'/>
                <ul className="nav-menu-user-header">
                  <Link className="nav-link" to="/newrecord">
                    <li>New Record</li>
                  </Link>
                  <Link className="nav-link" to="/showrecord">
                    <li>Show Records</li>
                  </Link>
                  <button onClick={onClickLogout} className="logout-btn">Logout</button>
                </ul>
              </div>
            </nav>)
  if(userType==="Doctor")
  return (<nav className="nav-header">
            <div className="record-container">
              <img src={logo} alt="logo" className='logo'/>
              <ul className="nav-menu">
                <button onClick={onClickLogout} className="logout-btn">Logout</button>
              </ul>
            </div>
          </nav>)
  if(userType==="Lab Technician")
  return (<nav className="nav-header">
            <div className="record-container">
              <img src={logo} alt="logo" className='logo'/>
              <ul className="nav-menu  large-screen-menu">
                <button onClick={onClickLogout} className="logout-btn">Logout</button>
              </ul>
            </div>
          </nav>)
}

export default Header