import {Component} from "react";

import {toast} from "react-toastify";
import Cookies from "js-cookie";

import "./index.css"

class LabtechRecord extends Component{
    state={
        memberid:"",
        memberidmessage:"",
        memberidmessageclass:"",
        date:"",
        hemoglobin:"",
        PCV : "",
        RCB : "",
        MCV : "",
        MCHC : "",
        platelet : "",
        WBC : "",
        neutrophils : "",
        lymphocytes : "",
        eosinophils:"",
        basophils:"",
        rhTyping:"",
        monocytes:"",
        FBS:"",
        PPBS:"",
        urea:"",
        creatinine:"",
        BUN:"",
        sodium:"",
        potassium:"",
        chloride:"",
        T3:"",
        T4:"",
        TSH:"",
        totalCholesterol:"",
        triglycerides:"", 
        HDL:"", 
        LDL:"", 
        VLDL:"", 
        totalCholesterolByHDLRatio:"",
        LDLByHDLRatio:"", 
        bilirubinTotal:"", 
        bilirubinDirect:"", 
        bilirubinIndirect:"", 
        SGOTByASL:"",
        SGPTByALT:"", 
        phosphatase:"", 
        totalProtein:"", 
        albumin:"", 
        globulin:"", 
        agRatio:"", 
        colour:"", 
        PH:"", 
        specificGravity:"", 
        protein:"",
        glucose:"", 
        ketone:"", 
        nitrite:"", 
        bilirubin:"", 
        blood:"", 
        urobilinogen:"", 
        pusCells:"", 
        epithelialCells:"", 
        RBC:"", 
        ECG:"",
        casts:"", 
        crystals:"",
        others:"", 
        bileSalt:"",
        bilePigments:"",
        hemogramSection:true,
        leucocyteSection:false,
        bloodsugarSection:false,
        kidneySection:false,
        tyroidSection:false,
        lungSection:false,
        lipidProfileSection:false,
        liverFunctionSection:false,
        urineSection:false,
        ECGSection:false
    }

    checkValidUser = async event => {
        const memberid = event.target.value;
        const url = "https://idcbackend-env-2.eba-bmwvm95d.ap-south-1.elasticbeanstalk.com/checkvaliduser";
        const options = {
            method: 'POST',
            headers:{"Content-Type":"application/json","Authorization":"BEARER "+Cookies.get("jwt_token")},
            body: JSON.stringify({memberid}),
        }
        const response = await fetch(url,options);
        const {message} = await response.json();
        if(response.ok){
            this.setState({memberidmessage : message, memberidmessageclass:"green"});
        }
        else{
            this.setState({memberidmessage: message,memberidmessageclass:"red"});
        }
    }

    onChangeMemberid = event => {
        this.setState({memberid:event.target.value})
    }

    onChangeHemoglobin = event => {
        this.setState({hemoglobin:event.target.value})
    }

    onChangeDate = event => {
        this.setState({date:event.target.value})
    }

    onChangePCV = event => {
        this.setState({PCV:event.target.value})
    }
    onChangeRCB = event => {
        this.setState({RCB:event.target.value})
    }

    onChangeMCV = event => {
        this.setState({MCV:event.target.value})
    }

    onChangeMCHC = event => {
        this.setState({MCHC:event.target.value})
    }

    onChangePlatelet = event => {
        this.setState({platelet:event.target.value})
    }

    onChangeWBC = event => {
        this.setState({WBC:event.target.value})
    }

    onChangeNeutrophils = event => {
        this.setState({neutrophils:event.target.value})
    }

    onChangeLymphocytes = event => {
        this.setState({lymphocytes:event.target.value})
    }

    onChangeEosinophils = event => {
        this.setState({eosinophils:event.target.value})
    }

    onChangeBasophils = event => {
        this.setState({basophils:event.target.value})
    }

    onChangeRhTyping = event => {
        this.setState({rhTyping:event.target.value})
    }

    onChangeMonocytes = event => {
        this.setState({monocytes:event.target.value})
    }

    onChangeFBS = event => {
        this.setState({FBS:event.target.value})
    }

    onChangePPBS = event => {
        this.setState({PPBS:event.target.value})
    }

    onChangeUrea = event => {
        this.setState({urea:event.target.value})
    }

    onChangeCreatinine = event => {
        this.setState({creatinine:event.target.value})
    }

    onChangeBUN = event => {
        this.setState({BUN:event.target.value})
    }

    onChangeSodium = event => {
        this.setState({sodium:event.target.value})
    }

    onChangePotassium = event => {
        this.setState({potassium:event.target.value})
    }

    onChangeChloride = event => {
        this.setState({chloride:event.target.value})
    }

    onChangeT3 = event => {
        this.setState({T3:event.target.value})
    }

    onChangeT4 = event => {
        this.setState({T4:event.target.value})
    }

    onChangeTSH = event => {
        this.setState({TSH:event.target.value})
    }

    onChangeXray = event => {
        this.setState({xray:event.target.value})
    }

    onChangeTotalCholesterol = event => {
        this.setState({totalCholesterol:event.target.value})
    }

    onChangeTriglycerides = event => {
        this.setState({triglycerides:event.target.value})
    }

    onChangeHDL = event => {
        this.setState({HDL:event.target.value})
    }

    onChangeLDL = event => {
        this.setState({LDL:event.target.value})
    }

    onChangeVLDL = event => {
        this.setState({VLDL:event.target.value})
    }

    onChangeTotalCholesterolByHDLRatio = event => {
        this.setState({totalCholesterolByHDLRatio:event.target.value})
    }

    onChangeLDLByHDLRatio = event => {
        this.setState({LDLByHDLRatio:event.target.value})
    }

    onChangeECG = event => {
        this.setState({ECG:event.target.value})
    }

    onChangeBilirubinTotal = event => {
        this.setState({bilirubinTotal:event.target.value})
    }

    onChangeBilirubinDirect = event => {
        this.setState({bilirubinDirect:event.target.value})
    }

    onChangeBilirubinIndirect = event => {
        this.setState({bilirubinIndirect:event.target.value})
    }

    onChangeSGOTByASL = event => {
        this.setState({SGOTByASL:event.target.value})
    }

    onChangeSGPTByALT = event => {
        this.setState({SGPTByALT:event.target.value})
    }

    onChangePhosphatase = event => {
        this.setState({phosphatase:event.target.value})
    }

    onChangeTotalProtein = event => {
        this.setState({totalProtein:event.target.value})
    }

    onChangeAlbumin = event => {
        this.setState({albumin:event.target.value})
    }

    onChangeGlobulin = event => {
        this.setState({globulin:event.target.value})
    }

    onChangeAgRatio = event => {
        this.setState({agRatio:event.target.value})
    }

    onChangeColour = event => {
        this.setState({colour:event.target.value})
    }

    onChangePH = event => {
        this.setState({PH:event.target.value})
    }

    onChangeSpecificGravity = event => {
        this.setState({specificGravity:event.target.value})
    }

    onChangeProtein = event => {
        this.setState({protein:event.target.value})
    }

    onChangeGlucose = event => {
        this.setState({glucose:event.target.value})
    }

    onChangeKetone = event => {
        this.setState({ketone:event.target.value})
    }

    onChangeNitrite = event => {
        this.setState({nitrite:event.target.value})
    }

    onChangeBilirubin = event => {
        this.setState({bilirubin:event.target.value})
    }

    onChangeBlood = event => {
        this.setState({blood:event.target.value})
    }

    onChangeUrobilinogen = event => {
        this.setState({urobilinogen:event.target.value})
    }

    onChangePusCells = event => {
        this.setState({pusCells:event.target.value})
    }

    onChangeEpithelialCells = event => {
        this.setState({epithelialCells:event.target.value})
    }

    onChangeRBC = event => {
        this.setState({RBC:event.target.value})
    }

    onChangeCasts = event => {
        this.setState({casts:event.target.value})
    }

    onChangeCrystals = event => {
        this.setState({crystals:event.target.value})
    }


    onChangeOthers = event => {
        this.setState({others:event.target.value})
    }

    onChangeBileSalt = event => {
        this.setState({bileSalt:event.target.value})
    }

    onChangeBilePigments = event => {
        this.setState({bilePigments:event.target.value})
    }

    onClickHemogram = event => {
        this.setState({
            hemogramSection:true,
            leucocyteSection:false,
            bloodsugarSection:false,
            kidneySection:false,
            tyroidSection:false,
            lungSection:false,
            lipidProfileSection:false,
            liverFunctionSection:false,
            urineSection:false,
            ECGSection:false
        })
    }

    onClickLeucocyte = event => {
        this.setState({
            hemogramSection:false,
            leucocyteSection:true,
            bloodsugarSection:false,
            kidneySection:false,
            tyroidSection:false,
            lungSection:false,
            lipidProfileSection:false,
            liverFunctionSection:false,
            urineSection:false,
            ECGSection:false
        })
    }

    onClickBloodSugar = event => {
        this.setState({
            hemogramSection:false,
            leucocyteSection:false,
            bloodsugarSection:true,
            kidneySection:false,
            tyroidSection:false,
            lungSection:false,
            lipidProfileSection:false,
            liverFunctionSection:false,
            urineSection:false,
            ECGSection:false
        })
    }

    onClickKidney = event => {
        this.setState({
            hemogramSection:false,
            leucocyteSection:false,
            bloodsugarSection:false,
            kidneySection:true,
            tyroidSection:false,
            lungSection:false,
            lipidProfileSection:false,
            liverFunctionSection:false,
            urineSection:false,
            ECGSection:false
        })
    }

    onClickTyroid = event => {
        this.setState({
            hemogramSection:false,
            leucocyteSection:false,
            bloodsugarSection:false,
            kidneySection:false,
            tyroidSection:true,
            lungSection:false,
            lipidProfileSection:false,
            liverFunctionSection:false,
            urineSection:false,
            ECGSection:false
        })
    }

    onClickLung = event => {
        this.setState({
            hemogramSection:false,
            leucocyteSection:false,
            bloodsugarSection:false,
            kidneySection:false,
            tyroidSection:false,
            lungSection:true,
            lipidProfileSection:false,
            liverFunctionSection:false,
            urineSection:false,
            ECGSection:false
        })
    }

    onClickLipid = event => {
        this.setState({
            hemogramSection:false,
            leucocyteSection:false,
            bloodsugarSection:false,
            kidneySection:false,
            tyroidSection:false,
            lungSection:false,
            lipidProfileSection:true,
            liverFunctionSection:false,
            urineSection:false,
            ECGSection:false
        })
    }

    onClickLiver = event => {
        this.setState({
            hemogramSection:false,
            leucocyteSection:false,
            bloodsugarSection:false,
            kidneySection:false,
            tyroidSection:false,
            lungSection:false,
            lipidProfileSection:false,
            liverFunctionSection:true,
            urineSection:false,
            ECGSection:false
        })
    }

    onClickUrine = event => {
        this.setState({
            hemogramSection:false,
            leucocyteSection:false,
            bloodsugarSection:false,
            kidneySection:false,
            tyroidSection:false,
            lungSection:false,
            lipidProfileSection:false,
            liverFunctionSection:false,
            urineSection:true,
            ECGSection:false
        })
    }

    onClickECG = event => {
        this.setState({
            hemogramSection:false,
            leucocyteSection:false,
            bloodsugarSection:false,
            kidneySection:false,
            tyroidSection:false,
            lungSection:false,
            lipidProfileSection:false,
            liverFunctionSection:false,
            urineSection:false,
            ECGSection:true
        })
    }

    onClickSubmit = async event => {
        const {memberid,
            date,
        hemoglobin,
        PCV,
        RCB,
        MCV,
        MCHC,
        platelet,
        WBC,
        neutrophils ,
        lymphocytes,
        eosinophils,
        basophils,
        rhTyping,
        monocytes,
        FBS,
        PPBS,
        urea,
        creatinine,
        BUN,
        sodium,
        potassium,
        chloride,
        T3,
        T4,
        TSH,
        totalCholesterol,
        triglycerides, 
        HDL, 
        LDL, 
        VLDL, 
        totalCholesterolByHDLRatio,
        LDLByHDLRatio, 
        bilirubinTotal, 
        bilirubinDirect, 
        bilirubinIndirect, 
        SGOTByASL,
        SGPTByALT, 
        phosphatase, 
        totalProtein, 
        albumin, 
        globulin, 
        agRatio, 
        colour, 
        PH, 
        specificGravity, 
        protein,
        glucose, 
        ketone, 
        nitrite, 
        bilirubin, 
        blood, 
        urobilinogen, 
        pusCells, 
        epithelialCells, 
        ECG,
        RBC, 
        casts, 
        crystals,
        others, 
        bileSalt,
        bilePigments,
        hemogramSection,
        leucocyteSection,
        bloodsugarSection,
        ECGSection,
        urineSection,
        kidneySection,
        tyroidSection,
        lipidProfileSection,
        liverFunctionSection
        } = this.state;
        const medicalDetials = {
        memberid,
        date,
        hemoglobin,
        PCV,
        RCB,
        MCV,
        MCHC,
        platelet,
        WBC,
        neutrophils ,
        lymphocytes,
        eosinophils,
        basophils,
        rhTyping,
        monocytes,
        FBS,
        PPBS,
        urea,
        creatinine,
        BUN,
        sodium,
        potassium,
        chloride,
        T3,
        T4,
        TSH,
        totalCholesterol,
        triglycerides, 
        HDL, 
        LDL, 
        VLDL, 
        totalCholesterolByHDLRatio,
        LDLByHDLRatio, 
        bilirubinTotal, 
        bilirubinDirect, 
        bilirubinIndirect, 
        SGOTByASL,
        SGPTByALT, 
        phosphatase, 
        totalProtein, 
        albumin, 
        globulin, 
        agRatio, 
        colour, 
        PH, 
        specificGravity, 
        protein,
        glucose, 
        ketone, 
        nitrite, 
        bilirubin, 
        blood, 
        urobilinogen, 
        pusCells, 
        epithelialCells, 
        ECG,
        RBC, 
        casts, 
        crystals,
        others, 
        bileSalt,
        bilePigments,
        hemogramSection,
        leucocyteSection,
        bloodsugarSection,
        ECGSection,
        urineSection,
        kidneySection,
        tyroidSection,
        lipidProfileSection,
        liverFunctionSection
        };
        console.log(medicalDetials)
        const url = 'https://idcbackend-env-2.eba-bmwvm95d.ap-south-1.elasticbeanstalk.com/newlabtechrecord'
        const options = {
            method: 'POST',
            headers:{"Content-Type":"application/json","Authorization":"BEARER "+Cookies.get("jwt_token")},
            body: JSON.stringify(medicalDetials),
        }
        const response = await fetch(url, options)
        
        const data = await response.json()
        if (response.ok === true) {
            toast("Data added successfully!!!",{
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                })
        }
        else{
            toast("Failed to add data!",{
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                })
        }
    }

    render () {
        const {memberid,
            memberidmessage,
            memberidmessageclass,
            date,
            hemoglobin,
            PCV,
            RCB,
            MCV,
            MCHC,
            platelet,
            WBC,
            neutrophils ,
            lymphocytes,
            eosinophils,
            basophils,
            rhTyping,
            monocytes,
            FBS,
            PPBS,
            urea,
            creatinine,
            BUN,
            sodium,
            potassium,
            chloride,
            T3,
            T4,
            TSH,
            totalCholesterol,
            triglycerides, 
            HDL, 
            LDL, 
            VLDL, 
            totalCholesterolByHDLRatio,
            LDLByHDLRatio, 
            bilirubinTotal, 
            bilirubinDirect, 
            bilirubinIndirect, 
            SGOTByASL,
            SGPTByALT, 
            phosphatase, 
            totalProtein, 
            albumin, 
            globulin, 
            agRatio, 
            colour, 
            PH, 
            specificGravity, 
            protein,
            glucose, 
            ketone, 
            nitrite, 
            bilirubin, 
            blood, 
            urobilinogen, 
            pusCells, 
            epithelialCells, 
            ECG,
            RBC, 
            casts, 
            crystals,
            others, 
            bileSalt,
            bilePigments,
            hemogramSection,
            leucocyteSection,
            bloodsugarSection,
            ECGSection,
            urineSection,
            kidneySection,
            tyroidSection,
            lipidProfileSection,
            liverFunctionSection} = this.state;
        return (
            <div className="lab-tech-container">
                <div className="patient-detail">
                    <input type="text" className=" lab-tech-input" placeholder="Patient Member ID" onChange={this.onChangeMemberid} onBlur={this.checkValidUser} value={memberid}/>
                    <p className={`${memberidmessageclass}`}>{memberidmessage}</p>
                    <input type="date" className=" lab-tech-input" onChange={this.onChangeDate} value={date}/>
                </div>
                <button type="button" onClick={this.onClickHemogram} className="form-section-btn">Complete Hemogram</button>
                {hemogramSection && <div className="form-section">
                    <input type="text" className=" lab-tech-input" placeholder="Hemoglobin" onChange={this.onChangeHemoglobin} value={hemoglobin}/>
                    <input type="text" className=" lab-tech-input" placeholder="PCV" onChange={this.onChangePCV} value={PCV}/>
                    <input type="text" className=" lab-tech-input" placeholder="RCB Count" onChange={this.onChangeRCB} value={RCB}/>
                    <input type="text" className=" lab-tech-input" placeholder="MCV" onChange={this.onChangeMCV} value={MCV}/>
                    <input type="text" className=" lab-tech-input" placeholder="MCHC" onChange={this.onChangeMCHC} value={MCHC}/>
                    <input type="text" className=" lab-tech-input" placeholder="Platelet Count" onChange={this.onChangePlatelet} value={platelet}/>
                    <input type="text" className=" lab-tech-input" placeholder="Total WBC Count (TLC)" onChange={this.onChangeWBC} value={WBC}/>
                </div>}
                <button type="button" onClick={this.onClickLeucocyte} className="form-section-btn">Differential Leucocyte Count</button>
                {leucocyteSection && <div className="form-section">
                    <input type="text" className=" lab-tech-input" placeholder="Neutrophils" onChange={this.onChangeNeutrophils} value={neutrophils}/>
                    <input type="text" className=" lab-tech-input" placeholder="Lymphocytes" onChange={this.onChangeLymphocytes} value={lymphocytes}/>
                    <input type="text" className=" lab-tech-input" placeholder="Eosinophils" onChange={this.onChangeEosinophils} value={eosinophils}/>
                    <input type="text" className=" lab-tech-input" placeholder="Basophils" onChange={this.onChangeBasophils} value={basophils}/>
                    <input type="text" className=" lab-tech-input" placeholder="MCHC" onChange={this.onChangeMonocytes} value={monocytes}/>
                    <input type="text" className=" lab-tech-input" placeholder="Blood Grouping and RH Typing" onChange={this.onChangeRhTyping} value={rhTyping}/>
                </div>}
                <button type="button" onClick={this.onClickBloodSugar} className="form-section-btn">Blood Sugar</button>
                {bloodsugarSection && <div className="form-section">
                    <input type="text" className=" lab-tech-input" placeholder="Glucose (Fasting) - FBS" onChange={this.onChangeFBS} value={FBS}/>
                    <input type="text" className=" lab-tech-input" placeholder="Glucose (PP - 1/2 Hours) - PPBS" onChange={this.onChangePPBS} value={PPBS}/>
                </div>}
                <button type="button" onClick={this.onClickKidney} className="form-section-btn">Kidney</button>
                {kidneySection && <div className="form-section">
                    <input type="text" className=" lab-tech-input" placeholder="Urea" onChange={this.onChangeUrea} value={urea}/>
                    <input type="text" className=" lab-tech-input" placeholder="Creatinine" onChange={this.onChangeCreatinine} value={creatinine}/>
                    <input type="text" className=" lab-tech-input" placeholder="Blood Urea Nitrogen" onChange={this.onChangeBUN} value={BUN}/>
                    <input type="text" className=" lab-tech-input" placeholder="Sodium NA" onChange={this.onChangeSodium} value={sodium}/>
                    <input type="text" className=" lab-tech-input" placeholder="Potassium K" onChange={this.onChangePotassium} value={potassium}/>
                    <input type="text" className=" lab-tech-input" placeholder="Chloride CL" onChange={this.onChangeChloride} value={chloride}/>
                </div>}
                <button type="button" onClick={this.onClickTyroid} className="form-section-btn">Thyroid Function Test</button>
                {tyroidSection && <div className="form-section">
                    <input type="text" className=" lab-tech-input" placeholder="T3 Triidothyronine" onChange={this.onChangeT3} value={T3}/>
                    <input type="text" className=" lab-tech-input" placeholder="T4 Thyroxine" onChange={this.onChangeT4} value={T4}/>
                    <input type="text" className=" lab-tech-input" placeholder="TSH Thyroid Stimulating Harmone" onChange={this.onChangeTSH} value={TSH}/>
                </div>}
                <button type="button" onClick={this.onClickECG} className="form-section-btn">E.C.G</button>
                {ECGSection && <div className="form-section">
                    <input className=" lab-tech-input" type="file" id="img" name="img" accept="image/*" onChange={this.onChangeFile} value={ECG}/>
                </div>}
                <button type="button" onClick={this.onClickLipid} className="form-section-btn">Lipid Profile</button>
                {lipidProfileSection && <div className="form-section">
                    <input type="text" className=" lab-tech-input" placeholder="Total Cholesterol" onChange={this.onChangeTotalCholesterol} value={totalCholesterol}/>
                    <input type="text" className=" lab-tech-input" placeholder="Triglycerides (TGL)" onChange={this.onChangeTriglycerides} value={triglycerides}/>
                    <input type="text" className=" lab-tech-input" placeholder="HDL Cholesterol" onChange={this.onChangeHDL} value={HDL}/>
                    <input type="text" className=" lab-tech-input" placeholder="LDL Cholesterol" onChange={this.onChangeLDL} value={LDL}/>
                    <input type="text" className=" lab-tech-input" placeholder="VLDL Cholesterol" onChange={this.onChangeVLDL} value={VLDL}/>
                    <input type="text" className=" lab-tech-input" placeholder="Total Cholesterol / HDL Ratio" onChange={this.onChangeTotalCholesterolByHDLRatio} value={totalCholesterolByHDLRatio}/>
                    <input type="text" className=" lab-tech-input" placeholder="LDL / HDL Ratio" onChange={this.onChangeLDLByHDLRatio} value={LDLByHDLRatio}/>
                </div>}
                <button type="button" onClick={this.onClickLiver} className="form-section-btn">Liver Function Test</button>
                {liverFunctionSection && <div className="form-section">
                    <input type="text" className=" lab-tech-input" placeholder="Bilirubin (Total)" onChange={this.onChangeBilirubinTotal} value={bilirubinTotal}/>
                    <input type="text" className=" lab-tech-input" placeholder="Bilirubin (Direct)" onChange={this.onChangeBilirubinDirect} value={bilirubinDirect}/>
                    <input type="text" className=" lab-tech-input" placeholder="Bilirubin (In Direct)" onChange={this.onChangeBilirubinIndirect} value={bilirubinIndirect}/>
                    <input type="text" className=" lab-tech-input" placeholder="SGOT / ASL" onChange={this.onChangeSGOTByASL} value={SGOTByASL}/>
                    <input type="text" className=" lab-tech-input" placeholder="SGPT / ALT" onChange={this.onChangeSGPTByALT} value={SGPTByALT}/>
                    <input type="text" className=" lab-tech-input" placeholder="Alkaline Phosphatase" onChange={this.onChangePhosphatase} value={phosphatase}/>
                    <input type="text" className=" lab-tech-input" placeholder="Total Protein" onChange={this.onChangeTotalProtein} value={totalProtein}/>
                    <input type="text" className=" lab-tech-input" placeholder="Albumin" onChange={this.onChangeAlbumin} value={albumin}/>
                    <input type="text" className=" lab-tech-input" placeholder="Globulin" onChange={this.onChangeGlobulin} value={globulin}/>
                    <input type="text" className=" lab-tech-input" placeholder="A/G Ratio" onChange={this.onChangeAgRatio} value={agRatio}/>
                </div>}
                <button type="button" onClick={this.onClickUrine} className="form-section-btn">Urine Complete Analysis</button>
                {urineSection && <div className="form-section">
                    <input type="text" className=" lab-tech-input" placeholder="Colour" onChange={this.onChangeColour} value={colour}/>
                    <input type="text" className=" lab-tech-input" placeholder="PH" onChange={this.onChangePH} value={PH}/>
                    <input type="text" className=" lab-tech-input" placeholder="Specific Gravity" onChange={this.onChangeSpecificGravity} value={specificGravity}/>
                    <input type="text" className=" lab-tech-input" placeholder="Protein" onChange={this.onChangeProtein} value={protein}/>
                    <input type="text" className=" lab-tech-input" placeholder="Glucose" onChange={this.onChangeGlucose} value={glucose}/>
                    <input type="text" className=" lab-tech-input" placeholder="Ketone" onChange={this.onChangeKetone} value={ketone}/>
                    <input type="text" className=" lab-tech-input" placeholder="Nitrite" onChange={this.onChangeNitrite} value={nitrite}/>
                    <input type="text" className=" lab-tech-input" placeholder="Bilirubin" onChange={this.onChangeBilirubin} value={bilirubin}/>
                    <input type="text" className=" lab-tech-input" placeholder="blood" onChange={this.onChangeBlood} value={blood}/>
                    <input type="text" className=" lab-tech-input" placeholder="Urobilinitrogen" onChange={this.onChangeUrobilinogen} value={urobilinogen}/>
                    <input type="text" className=" lab-tech-input" placeholder="Pus Cells" onChange={this.onChangePusCells} value={pusCells}/>
                    <input type="text" className=" lab-tech-input" placeholder="Epithelial Cells" onChange={this.onChangeEpithelialCells} value={epithelialCells}/>
                    <input type="text" className=" lab-tech-input" placeholder="RBCs" onChange={this.onChangeRBC} value={RBC}/>
                    <input type="text" className=" lab-tech-input" placeholder="Casts" onChange={this.onChangeCasts} value={casts}/>
                    <input type="text" className=" lab-tech-input" placeholder="Crystals" onChange={this.onChangeCrystals} value={crystals}/>
                    <input type="text" className=" lab-tech-input" placeholder="Others" onChange={this.onChangeOthers} value={others}/>
                    <input type="text" className=" lab-tech-input" placeholder="Bile Salts" onChange={this.onChangeBileSalt} value={bileSalt}/>
                    <input type="text" className=" lab-tech-input" placeholder="Bile Pigments" onChange={this.onChangeBilePigments} value={bilePigments}/>
                </div>}
                <button type="submit" onClick={this.onClickSubmit} className="submit-btn">Submit</button>
            </div>
        )
    }
}

export default LabtechRecord;