import { Component } from "react";
import { Modal,Button } from 'rsuite';

import Cookies from "js-cookie";

import 'rsuite/dist/rsuite.min.css'
import MedicalDetailsTable from "../MedicalDetailsTable";

class showRecords extends Component{
    state={
        patientMemberID:"",
        modelOpen:false,
        medicalDetails:{}
    }

    onChangePatientMemberID = event => {
        this.setState({patientMemberID:event.target.value})
    }

    handleClose = event => {
        this.setState({modelOpen:false})
    }

    onClickGetDetails = async () =>{
        const {patientMemberID} = this.state;
        const url = `https://idcbackend-env-2.eba-bmwvm95d.ap-south-1.elasticbeanstalk.com/showuserrecord/${patientMemberID}`
        const options = {
        method: 'GET',
        headers:{"Content-Type":"application/json",
            "Authorization":"BEARER "+Cookies.get("jwt_token")},
            params:{memberid:patientMemberID}
        }

        fetch(url,options)
        .then((res)=>res.json())
        .then((json)=>{
            this.setState({
                medicalDetails:json,
                modelOpen:true
            })
        })
    }

    render(){
        const {modelOpen,medicalDetails,patientMemberID} = this.state;
        let keys=[]
        for (var k in medicalDetails[0])
            keys.push(k)
        const deleteValues=["xray","id","memberid","others","othersignificantnotes","complains"]
        for(k in deleteValues){
            delete keys[k]
        }
        return (
            <div className="doctor-container">
                <div className="patient-search-container">
                    <input type="text" placeholder="Enter patient Memeber ID" value={patientMemberID} onChange={this.onChangePatientMemberID}/>
                    <button type="button" onClick={this.onClickGetDetails} className="patient-search-btn">Get Details</button>
                </div>
                <Modal overflow={true} open={modelOpen}>
                    <Modal.Body>
                        <MedicalDetailsTable medicalDetails={medicalDetails} memberid={patientMemberID}/>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleClose} appearance="primary">
                            Ok
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default showRecords;