import React  from "react";
import './styles.css';

const PhoneNumberInput = ({ setParams=()=>{}, params, flex}) => {
    return (
    <div className={flex ? "flex" : "column_flex"}>
        <form>
            <div className="form_value">
                <div className="form_centre">
                    <input className="input_container" 
                        placeholder="Enter Phone Number" 
                        type="tel"
                        value={params?.input} 
                        maxlength="10"
                        onChange={(e)=>{setParams((prev)=>({...prev,input:e?.target?.value}))}}
                    />
                    {params?.input ?  
                        params?.input?.length !== 10 ?
                            <span>
                                <button type="button" className="cross_btn">
                                    <svg width="14" height="15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.498.498.356 1.72l5.41 5.786L.41 13.233l1.17 1.25 5.355-5.728 5.41 5.786 1.142-1.22-5.41-5.787 5.492-5.873-1.17-1.25-5.491 5.873L1.498.498Z" fill="#fff"></path>
                                    </svg>
                                </button>
                            </span> :  
                            <span>
                                <button type="button" className="cross_btn">
                                    <svg width="20" height="14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.668.332a1.132 1.132 0 0 1 0 1.6L8.504 13.098a1.887 1.887 0 0 1-2.668 0L.332 7.593a1.132 1.132 0 0 1 1.6-1.601l5.238 5.237L18.067.332a1.132 1.132 0 0 1 1.601 0Z" fill="#79E691"></path>
                                    </svg>
                                </button>
                            </span>
                    : <span/>}
                </div>

                <button 
                    type="submit" 
                    className="btn_container" 
                    disabled={!params?.checkbox} 
                    style={{cursor:!params?.checkbox && 'not-allowed'}}>
                    <span>Apply Now</span>
                </button>
            </div>
        </form>
        
        <div className="checkbox_container">
            <input 
                type="checkbox" 
                checked={params?.checkbox} 
                className="checkbox" 
                onClick={()=>{setParams((prev)=>({...prev,checkbox:!params?.checkbox}))}}
            />

            <label className="label">You agree to be contacted by Uni Cards over Call, SMS, Email or WhatsApp to guide you through your application.</label>
        </div>
    </div>
)
}

export default PhoneNumberInput