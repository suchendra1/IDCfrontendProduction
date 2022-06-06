import {Component} from "react"
import Cookies from "js-cookie"
import jsPDF from "jspdf";
import "jspdf-autotable";

import "./index.css"

class ShowRecord extends Component{
    state={
        medicalDetails:[],
        dataIsLoaded:false,
        showNoDataPage:false,
        memberid:""
    }

    generatePDF = medicalDetails => {
        const {memberid} = this.state;
        let keys=[];
        for (var k in medicalDetails[0])
            keys.push(k)
        const tableColumns=["Date"].concat(medicalDetails.map(eachDetail=>eachDetail.date));
        const tableRows = keys.map(eachKey=>
            {return [eachKey].concat(medicalDetails.map(eachRecord=>{return eachRecord[eachKey]}))});
        var doc = new jsPDF()
        doc.text(`memberid:${memberid}`,10,10)
        doc.autoTable(tableColumns,tableRows, {styles: {font: "rotobo"}},{startY:20})
        doc.save("123.pdf")
    }

    componentDidMount (){
        const url = 'http://idcbackend-env.eba-bmwvm95d.ap-south-1.elasticbeanstalk.com/showuserrecord'
        const options = {
        method: 'GET',
        headers:{"Content-Type":"application/json",
            "Authorization":"BEARER "+Cookies.get("jwt_token")}
        }

        fetch(url,options)
        .then((res)=>res.json())
        .then((json)=>{
            const {data}=json
            if(data===undefined)
                this.setState({
                    medicalDetails:json,
                    dataIsLoaded:true
                })
            else{
                this.setState({
                    showNoDataPage:true,
                    dataIsLoaded:true
                })
            }
        })

        const url1 = 'http://idcbackend-env.eba-bmwvm95d.ap-south-1.elasticbeanstalk.com/getusermemberid';
        const options1 = {
        method: 'POST',
        headers:{"Content-Type":"application/json",
            "Authorization":"BEARER "+Cookies.get("jwt_token")}
        }

        fetch(url1,options1)
        .then((res)=>res.json())
        .then((json)=>{
            this.setState({
                memberid:json.memberid
            })
        })
    }

    render(){
        const {medicalDetails,dataIsLoaded,memberid,showNoDataPage} = this.state;
        let keys=[]
        for (var k in medicalDetails[0])
            keys.push(k)
        console.log(keys);
        if(!dataIsLoaded)
            return <p>Please wait!!!</p>
        else if(showNoDataPage)
            return <h2>No Records Found!</h2>
        else{
            return <div className="showrecord-container">
                <p>member id : {memberid}</p>
                <table className="showrecordtable">
                    <tbody>
                        <tr>
                            <th>
                                Date
                            </th>
                            {medicalDetails.map(eachRecord=>
                                <td>
                                    {eachRecord["date"]}
                                </td>
                            )}
                        </tr>
                        <tr>
                            <th>
                                Hemoglobin
                            </th>
                            {medicalDetails.map(eachRecord=>
                                <td>
                                    {eachRecord["hemoglobin"]}
                                </td>
                            )}
                        </tr>
                        <tr>
                            <th>
                                PCV (Packed Cell Volume)
                            </th>
                            {medicalDetails.map(eachRecord=>
                                <td>
                                    {eachRecord["PCV"]}
                                </td>
                            )}
                        </tr>
                        <tr>
                            <th>
                                RCB Count
                            </th>
                            {medicalDetails.map(eachRecord=>
                                <td>
                                    {eachRecord["RCB"]}
                                </td>
                            )}
                        </tr>
                        <tr>
                            <th>
                                MCV
                            </th>
                            {medicalDetails.map(eachRecord=>
                                <td>
                                    {eachRecord["MCV"]}
                                </td>
                            )}
                        </tr>
                        <tr>
                            <th>
                                MCHC
                            </th>
                            {medicalDetails.map(eachRecord=>
                                <td>
                                    {eachRecord["MCHC"]}
                                </td>
                            )}
                        </tr>
                        <tr>
                            <th>
                                Platelet Count
                            </th>
                            {medicalDetails.map(eachRecord=>
                                <td>
                                    {eachRecord["platelet"]}
                                </td>
                            )}
                        </tr>
                        <tr>
                            <th>
                                Total WBC Count (TLC)
                            </th>
                            {medicalDetails.map(eachRecord=>
                                <td>
                                    {eachRecord["WBC"]}
                                </td>
                            )}
                        </tr>
                        <tr>
                            <th>
                                Neutrophils
                            </th>
                            {medicalDetails.map(eachRecord=>
                                <td>
                                    {eachRecord["neutrophils"]}
                                </td>
                            )}
                        </tr>
                        <tr>
                            <th>
                                Lymphocytes
                            </th>
                            {medicalDetails.map(eachRecord=>
                                <td>
                                    {eachRecord["lymphocytes"]}
                                </td>
                            )}
                        </tr>
                        <tr>
                            <th>
                                Eosinophils
                            </th>
                            {medicalDetails.map(eachRecord=>
                                <td>
                                    {eachRecord["eosinophils"]}
                                </td>
                            )}
                        </tr>
                        <tr>
                            <th>
                                Basophils
                            </th>
                            {medicalDetails.map(eachRecord=>
                                <td>
                                    {eachRecord["basophils"]}
                                </td>
                            )}
                        </tr>
                        <tr>
                            <th>
                                Monocytes
                            </th>
                            {medicalDetails.map(eachRecord=>
                                <td>
                                    {eachRecord["monocytes"]}
                                </td>
                            )}
                        </tr>
                        <tr>
                            <th>
                                Blood Grouping and RH Typing
                            </th>
                            {medicalDetails.map(eachRecord=>
                                <td>
                                    {eachRecord["rhTyping"]}
                                </td>
                            )}
                        </tr>
                        <tr>
                            <th>
                                Glucose (Fasting) - FBS
                            </th>
                            {medicalDetails.map(eachRecord=>
                                <td>
                                    {eachRecord["FBS"]}
                                </td>
                            )}
                        </tr>
                        <tr>
                            <th>
                                Glucose (PP -1/2 Hours) - PPBS
                            </th>
                            {medicalDetails.map(eachRecord=>
                                <td>
                                    {eachRecord["PPBS"]}
                                </td>
                            )}
                        </tr>
                        <tr>
                            <th>
                                Sodium
                            </th>
                            {medicalDetails.map(eachRecord=>
                                <td>
                                    {eachRecord["sodium"]}
                                </td>
                            )}
                        </tr>
                        <tr>
                            <th>
                                Urea
                            </th>
                            {medicalDetails.map(eachRecord=>
                                <td>
                                    {eachRecord["urea"]}
                                </td>
                            )}
                        </tr>
                        <tr>
                            <th>
                                Creatinine
                            </th>
                            {medicalDetails.map(eachRecord=>
                                <td>
                                    {eachRecord["creatinine"]}
                                </td>
                            )}
                        </tr>
                        
                        <tr>
                            <th>
                                Potassiun
                            </th>
                            {medicalDetails.map(eachRecord=>
                                <td>
                                    {eachRecord["potassium"]}
                                </td>
                            )}
                        </tr>
                        
                        <tr>
                            <th>
                                Chloride
                            </th>
                            {medicalDetails.map(eachRecord=>
                                <td>
                                    {eachRecord["chloride"]}
                                </td>
                            )}
                        </tr>
                        
                        <tr>
                            <th>
                                Blood Urea Nitrogen (BUN)
                            </th>
                            {medicalDetails.map(eachRecord=>
                                <td>
                                    {eachRecord["BUN"]}
                                </td>
                            )}
                        </tr>
                        <tr>
                            <th>
                                T3 (Tridothyronine)
                            </th>
                            {medicalDetails.map(eachRecord=>
                                <td>
                                    {eachRecord["T3"]}
                                </td>
                            )}
                        </tr>
                        <tr>
                            <th>
                                T4 (Thyroxine)
                            </th>
                            {medicalDetails.map(eachRecord=>
                                <td>
                                    {eachRecord["T4"]}
                                </td>
                            )}
                        </tr>
                        <tr>
                            <th>
                                TSH (Thyroid Stimulating Harmone)
                            </th>
                            {medicalDetails.map(eachRecord=>
                                <td>
                                    {eachRecord["TSH"]}
                                </td>
                            )}
                        </tr>
                        <tr>
                            <th>
                                Total Cholesterol
                            </th>
                            {medicalDetails.map(eachRecord=>
                                <td>
                                    {eachRecord["totalCholesterol"]}
                                </td>
                            )}
                        </tr>
                        <tr>
                            <th>
                                Triglycerides (TGL)
                            </th>
                            {medicalDetails.map(eachRecord=>
                                <td>
                                    {eachRecord["triglycerides"]}
                                </td>
                            )}
                        </tr>
                        <tr>
                            <th>
                                HDL Cholesterol
                            </th>
                            {medicalDetails.map(eachRecord=>
                                <td>
                                    {eachRecord["HDL"]}
                                </td>
                            )}
                        </tr>
                        <tr>
                            <th>
                                LDL Cholesterol
                            </th>
                            {medicalDetails.map(eachRecord=>
                                <td>
                                    {eachRecord["LDL"]}
                                </td>
                            )}
                        </tr>
                        <tr>
                            <th>
                                VLDL Cholesterol
                            </th>
                            {medicalDetails.map(eachRecord=>
                                <td>
                                    {eachRecord["VLDL"]}
                                </td>
                            )}
                        </tr>
                        <tr>
                            <th>
                                Total Cholesterol / HDL Ratio
                            </th>
                            {medicalDetails.map(eachRecord=>
                                <td>
                                    {eachRecord["totalCholesterolByHDLRatio"]}
                                </td>
                            )}
                        </tr>
                        <tr>
                            <th>
                                LDL / HDL Ratio
                            </th>
                            {medicalDetails.map(eachRecord=>
                                <td>
                                    {eachRecord["LDLByHDLRatio"]}
                                </td>
                            )}
                        </tr> 
                        <tr>
                            <th>
                                Bilirubin (Total)
                            </th>
                            {medicalDetails.map(eachRecord=>
                                <td>
                                    {eachRecord["bilirubinTotal"]}
                                </td>
                            )}
                        </tr>
                        <tr>
                            <th>
                                Bilirubin (Direct)
                            </th>
                            {medicalDetails.map(eachRecord=>
                                <td>
                                    {eachRecord["bilirubinDirect"]}
                                </td>
                            )}
                        </tr>
                        <tr>
                            <th>
                                Bilirubin (Indirect)
                            </th>
                            {medicalDetails.map(eachRecord=>
                                <td>
                                    {eachRecord["bilirubinIndirect"]}
                                </td>
                            )}
                        </tr>
                        <tr>
                            <th>
                                SGOT / ASL
                            </th>
                            {medicalDetails.map(eachRecord=>
                                <td>
                                    {eachRecord["SGOTByASL"]}
                                </td>
                            )}
                        </tr>
                        <tr>
                            <th>
                                SGPT / ALT
                            </th>
                            {medicalDetails.map(eachRecord=>
                                <td>
                                    {eachRecord["SGPTByALT"]}
                                </td>
                            )}
                        </tr>
                        <tr>
                            <th>
                                Alkaline phospatase (SAP)
                            </th>
                            {medicalDetails.map(eachRecord=>
                                <td>
                                    {eachRecord["phosphatase"]}
                                </td>
                            )}
                        </tr>
                        <tr>
                            <th>
                                Total Protein
                            </th>
                            {medicalDetails.map(eachRecord=>
                                <td>
                                    {eachRecord["totalProtein"]}
                                </td>
                            )}
                        </tr>
                        <tr>
                            <th>
                                Albumin
                            </th>
                            {medicalDetails.map(eachRecord=>
                                <td>
                                    {eachRecord["albumin"]}
                                </td>
                            )}
                        </tr>
                        <tr>
                            <th>
                                Globulin
                            </th>
                            {medicalDetails.map(eachRecord=>
                                <td>
                                    {eachRecord["globulin"]}
                                </td>
                            )}
                        </tr>
                        <tr>
                            <th>
                                A/G Ratio
                            </th>
                            {medicalDetails.map(eachRecord=>
                                <td>
                                    {eachRecord["agRatio"]}
                                </td>
                            )}
                        </tr>
                        <tr>
                            <th>
                                Colour
                            </th>
                            {medicalDetails.map(eachRecord=>
                                <td>
                                    {eachRecord["colour"]}
                                </td>
                            )}
                        </tr>
                        <tr>
                            <th>
                                PH
                            </th>
                            {medicalDetails.map(eachRecord=>
                                <td>
                                    {eachRecord["PH"]}
                                </td>
                            )}
                        </tr>
                        <tr>
                            <th>
                                Specific Gravity
                            </th>
                            {medicalDetails.map(eachRecord=>
                                <td>
                                    {eachRecord["specificGravity"]}
                                </td>
                            )}
                        </tr>
                        <tr>
                            <th>
                                Protein
                            </th>
                            {medicalDetails.map(eachRecord=>
                                <td>
                                    {eachRecord["protein"]}
                                </td>
                            )}
                        </tr>
                        <tr>
                            <th>
                                Glucose
                            </th>
                            {medicalDetails.map(eachRecord=>
                                <td>
                                    {eachRecord["glucose"]}
                                </td>
                            )}
                        </tr>
                        <tr>
                            <th>
                                Ketone
                            </th>
                            {medicalDetails.map(eachRecord=>
                                <td>
                                    {eachRecord["ketone"]}
                                </td>
                            )}
                        </tr>
                        <tr>
                            <th>
                                Nitrite
                            </th>
                            {medicalDetails.map(eachRecord=>
                                <td>
                                    {eachRecord["nitrite"]}
                                </td>
                            )}
                        </tr>
                        <tr>
                            <th>
                                Bilirubin
                            </th>
                            {medicalDetails.map(eachRecord=>
                                <td>
                                    {eachRecord["bilirubin"]}
                                </td>
                            )}
                        </tr>
                        <tr>
                            <th>
                                Blood
                            </th>
                            {medicalDetails.map(eachRecord=>
                                <td>
                                    {eachRecord["blood"]}
                                </td>
                            )}
                        </tr>
                        <tr>
                            <th>
                                Urobilinogen
                            </th>
                            {medicalDetails.map(eachRecord=>
                                <td>
                                    {eachRecord["urobilinogen"]}
                                </td>
                            )}
                        </tr>
                        <tr>
                            <th>
                                Pus Cells
                            </th>
                            {medicalDetails.map(eachRecord=>
                                <td>
                                    {eachRecord["pusCells"]}
                                </td>
                            )}
                        </tr>
                        <tr>
                            <th>
                                RBCs
                            </th>
                            {medicalDetails.map(eachRecord=>
                                <td>
                                    {eachRecord["RBC"]}
                                </td>
                            )}
                        </tr>
                        <tr>
                            <th>
                                Casts
                            </th>
                            {medicalDetails.map(eachRecord=>
                                <td>
                                    {eachRecord["casts"]}
                                </td>
                            )}
                        </tr>
                        <tr>
                            <th>
                                Crystals
                            </th>
                            {medicalDetails.map(eachRecord=>
                                <td>
                                    {eachRecord["crystals"]}
                                </td>
                            )}
                        </tr>
                        <tr>
                            <th>
                                Others
                            </th>
                            {medicalDetails.map(eachRecord=>
                                <td>
                                    {eachRecord["others"]}
                                </td>
                            )}
                        </tr>
                        <tr>
                            <th>
                                Bile Salts
                            </th>
                            {medicalDetails.map(eachRecord=>
                                <td>
                                    {eachRecord["bileSalts"]}
                                </td>
                            )}
                        </tr>
                        <tr>
                            <th>
                                Bile Pigments
                            </th>
                            {medicalDetails.map(eachRecord=>
                                <td>
                                    {eachRecord["bilePigments"]}
                                </td>
                            )}
                        </tr>
                    </tbody>
                </table>
                <button onClick={() => this.generatePDF(medicalDetails)} className="generate-btn">Generate pdf</button>
            </div>
        }
    }
}

export default ShowRecord