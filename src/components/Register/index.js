import {Component} from "react"
import { toast } from "react-toastify";

import './index.css'

class Register extends Component{
    state={
        memberid:"",
        mobile:"",
        name:"",
        password:"",
        confirmPassword:"",
        message:""
    }

    onChangeMemberid = (event) => {
        this.setState({ID:event.target.value});
    }

    onChangeMobile= event=>{
        this.setState({mobile:event.target.value})
        const mobile=event.target.value
        console.log(mobile.length,mobile.length!==10)
        if(mobile.length!==10 || isNaN(parseInt(mobile))){
            this.setState({message:"Please enter valid mobile number."})
        }
        else{
            this.setState({message:""})
        }
    }

    onChangeName = event => {
        this.setState({name:event.target.value})
    }

    onChangePassword = event => {
        this.setState({password:event.target.value})
    }

    onChangeConfirmPassword = event => {
        this.setState({confirmPassword:event.target.value})
    }

    onClickregister = async event => {
        const {memberid,name,mobile,password,confirmPassword,message}=this.state
        if(memberid==="")
        {
            this.setState({message:"Member Id can not be empty!"})
            return;
        }
        if(password!==confirmPassword)
        {
            return
        }
        if(message!=="")
            return;

        let url="http://idcbackend-env.eba-bmwvm95d.ap-south-1.elasticbeanstalk.com/userregister"
        const userDetails = {memberid,mobile,name,password}
        const options = {method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(userDetails)}

        const res = await fetch(url,options)
        if(res.ok === true)
        {
            const {history} = this.props
            toast.success("Registration Success!!!",{
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
            history.replace("/")
        }
        else{
            const {message} = await res.json()
            this.setState({message})
        }
    }

    
    componentWillMount = () => {
        let url="http://idcbackend-env.eba-bmwvm95d.ap-south-1.elasticbeanstalk.com/nextMemberid"
        const options = {
            method: 'GET'
        }
        fetch(url,options)
        .then((res)=>res.json())
        .then((json)=>{
            const {memberid}=json;
            this.setState({memberid})
            console.log(json)
        })
    }

    render (){
        const {memberid,mobile, password,name,confirmPassword,message} = this.state;
        const isNotMatch = password !== confirmPassword && confirmPassword !== "";
        return(
            <div className="register-container">
                <h3 className="login-heading">Register</h3>
                <input className="input" type="text" id="memberid" placeholder="memberid" value={memberid} onChange={this.onChangeMemberid} readOnly/>
                <input className="input" type="text" id="name" placeholder="Name" onChange={this.onChangeName} value={name}/>
                <input className="input" type="text" id="mobile" placeholder="Mobile" onChange={this.onChangeMobile} value={mobile}/>
                <input className="input" type="password" id="password" placeholder="Password" onChange={this.onChangePassword} value={password}/>
                <input className="input" type="password" id="confirm-password" placeholder="Confirm Password" onChange={this.onChangeConfirmPassword} value={confirmPassword}/>
                <p className="error">{isNotMatch ? "Confirm password does not match with password!" : ""}</p>
                <button type="button" className="submit-button bn632-hover bn20 mobile-btn" onClick={this.onClickregister} >Register</button>
                <p className="error">{message}</p>
            </div>
        )
    }
}

export default Register