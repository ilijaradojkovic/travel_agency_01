import {useRef, useState} from "react";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import "./OtpInput.css"
import Timer from "../Timer/Timer";
import {OPT_TIME} from "../util/Constants";
import axios from "axios";
import {validateOtp} from "../rest/requests";
import {useNavigate} from "react-router-dom";
export const OtpInput=({handleCloseModal,email})=>{
    const [pincode, setPincode] = useState([]);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const inputRefs = useRef([]);
    const [isTimerRunning, setIsTimerRunning] = useState(true);
    const timerRef = useRef(null);
    const modalRef = useRef(null);
    const [isSubmitAvailable,setIsSubmitAvailable]=useState(true)
    const navigate=useNavigate();



    const handleResendCode=()=>{
        if (timerRef.current) {
            timerRef.current.resetTimer();
        }
    }



    const handleInput = (event) => {
        event.preventDefault();
        let pin=pincode.join("");

        validateOtp({otpCode:pin,email:email})
            .then((response)=>{
                localStorage.setItem('access_token', response.data.accessToken);
                localStorage.setItem('refresh_token', response.data.refreshToken);
                navigate('/home');
            })
            .catch((error)=>{})

    }

    const handleTime=()=>{
        setIsTimerRunning(false);
    }

    const handlePincodeChange = (index, value) => {
        if(value.length===0){
            pincode.pop();
        }
        if (value.length === 1) {
            // Move focus to the next input field if available
            pincode.push(value)
            const nextIndex = index + 1;
            if (nextIndex < inputRefs.current.length) {
                inputRefs.current[nextIndex].focus();
            }
        }


        if(pincode.length===6){
            setIsSubmitAvailable(false)
        }
        else{
            setIsSubmitAvailable(true)

        }
        // Handle pincode change
    };
    const handleSubmit = () => {
        setLoading(true);

    };


    return (
        <div className="container">
            <div className="close-button-holder">
                <CloseRoundedIcon onClick={handleCloseModal} className="close-button"></CloseRoundedIcon>
            </div>
            <form id="form">
                <h1>TWO-FACTOR AUTHENTICATION</h1>
                <div className="form__group form__pincode">
                    <Timer  ref={timerRef} handleTimeRanOut={handleTime} initialTime={OPT_TIME} />
                    <label className="label">Enter 6-digit code from your authenticator application</label>
                    <input  ref={(el) => (inputRefs.current[0] = el)} type="tel" name="pincode-1" maxlength="1" pattern="[\d]*" tabindex="1" placeholder="·" autocomplete="off" onChange={(e) => handlePincodeChange(0, e.target.value)}/>
                    <input ref={(el) => (inputRefs.current[1] = el)} type="tel" name="pincode-2" maxlength="1" pattern="[\d]*" tabindex="2" placeholder="·" autocomplete="off" onChange={(e) => handlePincodeChange(1, e.target.value)}/>
                    <input ref={(el) => (inputRefs.current[2] = el)} type="tel" name="pincode-3" maxlength="1" pattern="[\d]*" tabindex="3" placeholder="·" autocomplete="off" onChange={(e) => handlePincodeChange(2, e.target.value)}/>
                    <input ref={(el) => (inputRefs.current[3] = el)} type="tel" name="pincode-4" maxlength="1" pattern="[\d]*" tabindex="4" placeholder="·" autocomplete="off" onChange={(e) => handlePincodeChange(3, e.target.value)}/>
                    <input ref={(el) => (inputRefs.current[4] = el)} type="tel" name="pincode-5" maxlength="1" pattern="[\d]*" tabindex="5" placeholder="·" autocomplete="off" onChange={(e) => handlePincodeChange(4, e.target.value)}/>
                    <input ref={(el) => (inputRefs.current[5] = el)} type="tel" name="pincode-6" maxlength="1" pattern="[\d]*" tabindex="6" placeholder="·" autocomplete="off" onChange={(e) => handlePincodeChange(5, e.target.value)}/>
                </div>
                <div className="form__buttons">
                    <button onClick={handleInput} className="button button--primary"  disabled={isSubmitAvailable} >Continue</button>
                </div>
                <div className="resend-code-text-holder">
                    <p className={"resend-code-text" + (!isTimerRunning? " disabled": "") }  onClick={handleResendCode}>Resend code</p>
                </div>
            </form>
        </div>
    );
}

