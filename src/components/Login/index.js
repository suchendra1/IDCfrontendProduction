import {Component} from "react"
import Cookies from 'js-cookie'
import {toast} from 'react-toastify';

import './index.css'
import './index.scss'
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

class Login extends Component{
    state={
        ID:"",
        mobile:"",
        password:"",
        error:"",
        userType:"User"
    }

    onChangeID = (event) => {
        this.setState({ID:event.target.value});
    }

    onChangeMobileNumber = event => {
        this.setState({mobile:event.target.value});
    }

    onChangePassword = event => {
        this.setState({password:event.target.value})
    }

    OnChangeuserType = event=>{
        this.setState({userType:event.target.value})
    }

    onSubmitSuccess = jwtToken => {
        const {history,onLogChange} = this.props;
        const {userType} = this.state
        Cookies.set('jwt_token', jwtToken, {expires: 30})
        Cookies.set("user_type",userType)
        this.setState({error:""})
        setTimeout(function() {}, 500);
        if(userType==="User"){
            onLogChange("User")
            history.replace("/showrecord")
        }
        else if(userType==="Doctor"){
            onLogChange("Doctor")
            history.replace("/showrecords")
        }
        else{
            onLogChange("Lab Technician")
            history.replace("/labtechrecord")
        }
    }

    onSubmitFailure = message => {
        this.setState({error:message})
    }

    onClickLogin = async event => {
        const {ID, password,mobile,userType} = this.state
        let userDetails;
        switch(userType){
            case "User":userDetails={memberid:ID,password};break;
            case "Lab Technician":userDetails={mobile,password};break;
            case "Doctor":userDetails={mobile,password};break;
        }
        let url = 'http://idcbackend-env.eba-bmwvm95d.ap-south-1.elasticbeanstalk.com/'
        switch(userType){
            case "User" : url+="userlogin";break;
            case "Lab Technician" : url+="techlogin";break;
            case "Doctor" : url += "doctorlogin";break;
        }
        const options = {
        method: 'POST',
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(userDetails),
        }
        const response = await fetch(url, options)

        if (response.ok === true) {
            toast("login success!", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
            const data = await response.json()
            this.onSubmitSuccess(data.jwt_token)
        }
        else{
            const {error} = await response.json()
            this.onSubmitFailure(error)
        }
    }


    render (){
        const {ID,mobile,password,error,userType}=this.state;
        let inputElement;
        switch (userType){
            case "User":inputElement = <input type="text" className="input" onChange={this.onChangeID} name="ID" id="ID" value={ID} placeholder="Member ID"/>;break;
            case "Doctor":;
            case "Lab Technician" : inputElement=<input type="text" className="input" onChange={this.onChangeMobileNumber} name="mobile" id="mobile" value={mobile} placeholder="Mobile Number"/>;
        }
        return(
            <div className="login-container">
                <h3 className="login-heading">Login</h3>
                <select name="userType" id="userType" onChange={this.OnChangeuserType}>
                    <option value="User">IDC Member</option>
                    <option value="Lab Technician">IDC Lab</option>
                    <option value="Doctor">IDC Doctor</option>
                </select>
                {inputElement}
                <input type="password" className="input" onChange={this.onChangePassword} name="password" id="password" value={password} placeholder="Password"/>
                <button type="button" className="submit-button bn632-hover bn20 mobile-btn" onClick={this.onClickLogin}>Login</button>
                <p className="error">{error}</p>
            </div>
        )
    }
}

export default Login