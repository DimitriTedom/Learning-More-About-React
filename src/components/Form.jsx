import { useState } from "react";
import React from "react";
const Form = () =>{
    const [course,setCourse] = useState("");
    const [desc,setDesc] = useState("");
    const [country,setCountry] = useState("");
    const [agreement,setAgreement] = useState(false);
    const handleChange = (e) =>{
        if (e.target.name === "course") {
            setCourse(e.target.value);
        }else if (e.target.name === "desc") {
            setDesc(e.target.value);
        }else if (e.target.name === "country"){
            setCountry(e.target.value);
        }else if (e.targert.name === "agreement") {
         setAgreement(e.target.value);
        }
    };
console.log(agreement);
    return (
        <div>
            <form>
                <input name="course" value={course} onChange={handleChange} className="border"/>
                <textarea name="desc" value={desc} onChange={handleChange} className="border"></textarea>

                <br />
                <select name="country" value={country} onChange={handleChange}>
                    <option value="USA">USA</option>
                    <option value="CANADA">CANADA</option>
                    <option value="GERMANY">GERMANY</option>
                </select>

                <br />
                <label>Agree with our terms of Services</label>
                <input type="checkbox" name="agreement" value={agreement} onChange={handleChange}/>
            </form>
        </div>
    );
}

export default Form