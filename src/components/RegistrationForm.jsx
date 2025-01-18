import { useState } from "react"

const RegistrationForm = () =>{
    const [data,setData] = useState({
        name : "",
        email: "",
        password: "",
        confirmPassword: "",
        country: "",
        gender: "",
        aggrement: false
    })

    const handleChange = (e) =>{

        if (e.target.type === "checkbox") {
            setData((oldData)=>({...oldData, [e.target.name]: e.target.checked}));
        }else {
            setData((oldData)=>({...oldData, [e.target.name] :e.target.value}));
        }
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(data);
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Registraion Form</h2>
                <div>
                    <label>Name</label>
                    <input type="text" name="name" value={data.name} onChange={handleChange}/>
                </div>

                <div>
                    <label>Email</label>
                    <input type="text" name="email" value={data.email} onChange={handleChange}/>
                </div>

                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={data.password} onChange={handleChange}/>
                </div>

                <div>
                    <label>Confirm Password</label>
                    <input type="password" name="confirmPassword" value={data.confirmPassword} onChange={handleChange}/>
                </div>

                <div>
                    <label>Male</label>
                    <input type="radio" name="gender" value="male" onChange={handleChange}/>
                </div>
                <div>
                    <label>Female</label>
                    <input type="radio" name="gender" value="female" onChange={handleChange}/>
                </div> 
                <div>
                    <label>Others</label>
                    <input type="radio" name="gender" value="others" onChange={handleChange}/>
                </div>

                <div>
                    <label>Country</label>
                    <select name="country" value={data.country} onChange={handleChange}>
                        <option value="USA">USA</option>
                        <option value="UK">UK</option>
                        <option value="CAMEROON">CAMEROON</option>
                    </select>
                </div>
                <br />

                <div>
                        <label>Agree with our terms of Services</label>
                        <input type="checkbox" name="aggrement" checked={data.aggrement} onChange={handleChange}/>
                </div> 
                <input type="submit" value="save" />
            </form>
        </div>
    )
}

export default RegistrationForm