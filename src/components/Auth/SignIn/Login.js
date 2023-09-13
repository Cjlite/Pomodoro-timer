import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import InputControl from "../../InputControl/InputControl";
import { auth } from "../../FirebaseAuth";
import "./Login.css"

function Login() {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        email: "",
        pass: "",
    });
    const [errorMsg, setErrorMsg] = useState("");
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

    const handleSubmission = () => {
        if (!values.email || !values.pass) {
            setErrorMsg("Fill all fields");
            return;
        }
        setErrorMsg("");

        setSubmitButtonDisabled(true);
        signInWithEmailAndPassword(auth, values.email, values.pass)
            .then(async (res) => {
                setSubmitButtonDisabled(false);

                navigate("/home");
            })
            .catch((err) => {
                setSubmitButtonDisabled(false);
                setErrorMsg(err.message);
            });
    };
    return (
        <div className="container">
            <div className="innerBox">
                <h1 className="heading">Login</h1>

                <InputControl
                    label="Email"
                    onChange={(event) =>
                        setValues((prev) => ({ ...prev, email: event.target.value }))
                    }
                    placeholder="Enter email address"
                />
                <InputControl
                    label="Password"
                    onChange={(event) =>
                        setValues((prev) => ({ ...prev, pass: event.target.value }))
                    }
                    placeholder="Enter Password"
                />

                <div className="footer">
                    <b className="error">{errorMsg}</b>
                    <button disabled={submitButtonDisabled} onClick={handleSubmission}>
                        Login
                    </button>
                    <p>
                        If you are not Sign up ?{" "}
                        <span>
                            <Link to="/signup">Sign up</Link>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;
