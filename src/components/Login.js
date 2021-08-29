import React,{ useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login = () => {
    const [input, setInput] = useState({"name": "", "password": ""});
    const history = useHistory();

    const formSubmit = (event) => {
        event.preventDefault();
        history.push("/home",{ "name": input["name"]});
    }

    const onInput = (event) => {
        let val = event.target.value;
        if(val.length === 0 && event.target.nextSibling.classList.value.includes("input-label")){
            event.target.nextSibling.classList.remove("input-label");
        }else if(event.target.nextSibling.classList !== "input-label"){
            event.target.nextSibling.classList.add("input-label");
        }

        if(event.target.name === "user"){
            setInput({...input,"name": val});
        }else if(event.target.name === "pass"){
            setInput({...input,"password": val});
        }
    }

    return(
        <div className="row no-gutters">
            <div className="col-md-6 no-gutters">
                <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=753&q=80" alt="Content" />
            </div>
            <div className="col-md-6 no-gutters">
                <div className="rightside d-flex justify-content-center align-items-center">
                    <div className="login-form">
                        <form action="#" className="custom-form" onSubmit={formSubmit}>
                            <h3 className="text-center">Welcome back!</h3>
                            <p className="text-center">Please login to your account.</p>
                            <div className="form-group">
                                <input type="text" className="form-control" name="user" value={input["name"]} id="user" onChange={onInput} required/>
                                <label htmlFor="user" className="animated-label">Username</label>
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" name="pass" value={input["password"]} id="pass" onChange={onInput} required/>
                                <label htmlFor="pass" className="animated-label">Password</label>
                            </div>
                            <div className="form-group form-check">
                                <div>
                                    <input type="checkbox" className="form-check-input" id="check"/>
                                    <label className="form-check-label" htmlFor="check">Remember Me</label>
                                </div>
                                <a href="/">Forgot Password</a>
                            </div>
                            <div className="submit">
                                <button type="submit" className="btn submit">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>	
    
    )
};

export default Login;