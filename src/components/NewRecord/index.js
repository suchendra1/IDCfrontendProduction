import Cookies from "js-cookie";
import {Component} from "react"
import { toast } from "react-toastify";

import './index.css'

class NewRecord extends Component{
    state={
        mobileNo:"",
        name:"",
        date:"",
        BP:"",
        FBS:"",
        PPBS:"",
        RBS:"",
        HbA1C:"",
        Urea:"",
        Creatinine:"",
        Microalbuminuria:"",
        Complaints:"",
        file:"",
        OtherSignificantNotes:""
    }

    onChangeMobileNo = (event) => {
        this.setState({mobileNo:event.target.value});
    }

    onChangeName = (event) => {
        this.setState({name:event.target.value});
    }

    onChangeBP = (event) => {
        this.setState({BP:event.target.value});
    }

    onChangeFBS = (event) => {
        this.setState({FBS:event.target.value});
    }

    onChangePPBS = (event) => {
        this.setState({PPBS:event.target.value});
    }

    onChangeHbA1C = (event) => {
        this.setState({HbA1C:event.target.value});
    }

    onChangeUrea = (event) => {
        this.setState({Urea:event.target.value});
    }

    onChangeCreatinine = (event) => {
        this.setState({Creatinine:event.target.value});
    }

    onChangeMicroalbuminuria = (event) => {
        this.setState({Microalbuminuria:event.target.value});
    }

    onChangeComplaints = (event) => {
        this.setState({Complaints:event.target.value});
    }

    onChangeRBS = (event) => {
        this.setState({RBS:event.target.value});
    }

    onChangeOtherSignificantNotes = (event) => {
        this.setState({OtherSignificantNotes:event.target.value});
    }

    onChangeDate = event => {
        this.setState({date:event.target.value});
    }

    onChangeFile = event => {
        this.setState({file:event.target.value});
    }

    onClickSubmit = async () => {
        const {mobileNo,date,name,BP,FBS,PPBS,RBS,HbA1C,Urea,Creatinine,Microalbuminuria,Complaints,file,OtherSignificantNotes} = this.state
        const medicalDetials = {mobileNo,date,name,BP,FBS,PPBS,RBS,HbA1C,Urea,Creatinine,Microalbuminuria,Complaints,OtherSignificantNotes};
        const url = 'http://idcbackend-env.eba-bmwvm95d.ap-south-1.elasticbeanstalk.com/newuserrecord';
        const options = {
            method: 'POST',
            headers:{"Content-Type":"application/json","Authorization":"BEARER "+Cookies.get("jwt_token")},
            body: JSON.stringify(medicalDetials),
        }
        const response = await fetch(url, options)
        if (response.ok === true) {
            toast.success("Data added successfully!!!",{
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }
        else{
            toast.error("Failed to add data!",{
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }

    render (){
        const {mobileNo, name, BP, RBS, FBS, PPBS, HbA1C, Urea, Creatinine, Microalbuminuria, Complaints, OtherSignificantNotes, date, file} = this.state;
        return(
            <div className="newrecord-container">
                <h2>Please enter your readings</h2>
                <label className="label" htmlFor="mobile" >Mobile No</label>
                <input className="input" type="text" id="mobile" placeholder="Mobile No" onChange={this.onChangeMobileNo} value={mobileNo}/>
                <label className="label" htmlFor="date">Date</label>
                <input className="input" type="date" id="date" value={date} onChange={this.onChangeDate}/>
                <label className="label" htmlFor="BP" >BP</label>
                <input className="input" type="text" id="BP" placeholder="BP" onChange={this.onChangeBP} value={BP}/>
                <label className="label" htmlFor="RBS" >RBS</label>
                <input className="input" type="text" id="RBS" placeholder="RBS" onChange={this.onChangeRBS} value={RBS}/>
                <label className="label" htmlFor="FBS" >FBS</label>
                <input className="input" type="text" id="FBS" placeholder="FBS" onChange={this.onChangeFBS} value={FBS}/>
                <label className="label" htmlFor="PPBS" >PPBS</label>
                <input className="input" type="text" id="PPBS" placeholder="PPBS" onChange={this.onChangePPBS} value={PPBS}/>
                <label className="label" htmlFor="HbA1C" >HbA1C</label>
                <input className="input" type="text" id="HbA1C" placeholder="HbA1C" onChange={this.onChangeHbA1C} value={HbA1C}/>
                <label className="label" htmlFor="Urea" >Urea</label>
                <input className="input" type="text" id="urea" placeholder="Urea" onChange={this.onChangeUrea} value={Urea}/>
                <label className="label" htmlFor="Creatinine" >Creatinine</label>
                <input className="input" type="text" id="creatinine" placeholder="Creatinine" onChange={this.onChangeCreatinine} value={Creatinine}/>
                <label className="label" htmlFor="microalbuminuria" >Microalbuminuria</label>
                <input className="input" type="text" id="microalbuminuria" placeholder="Microalbuminuria" onChange={this.onChangeMicroalbuminuria} value={Microalbuminuria}/>
                <label className="label" htmlFor="file">prescription</label>
                <input className="input" type="file" id="img" name="img" accept="image/*" onChange={this.onChangeFile} value={file}/>
                <label className="label" htmlFor="Complaints" >Complaints</label>
                <input className="input" type="text" id="complaints" placeholder="Complaints" onChange={this.onChangeComplaints} value={Complaints}/>
                <label className="label" htmlFor="OtherSignificantNotes" >OtherSignificantNotes</label>
                <input className="input" type="text" id="otherSignificantNotes" placeholder="OtherSignificantNotes" onChange={this.onChangeOtherSignificantNotes} value={OtherSignificantNotes}/>
                <button type="button" className="submit-button bn632-hover bn20" onClick={this.onClickSubmit}>Submit</button>
            </div>
        )
    }
}

export default NewRecord