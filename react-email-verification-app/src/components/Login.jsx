import { useState } from "react";
import ButtonComponent from "./ButtonComponent";
import InputComponent from "./InputComponent";
import { useNavigate } from "react-router-dom";

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [error, setError] = useState("");
    const navigater = useNavigate();

    function handleChange(e) {
        const {name, value} = e.target;
        setFormData({
            ...formData, [name]: value
        });

        if(!formData.email.trim()) {
            setError("Email cannot be empty");
        } else if(!formData.password.trim()) {
            setError("Password cannot be empty");
        } else {
            setError("");
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!error.trim()) {
            try {
                const response = await fetch("http://localhost:8080/apiv2/login", {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(formData),
                });

                const message = await response.text();

                if(response.ok) {
                    console.log("Form submitted successfully: ", response);
                    navigater("/");
                } else {
                    console.log("Error on submitting form: ", response);
                    setError(message);
                }
            } catch(err) {
                console.log("Error on submitting form err: ", err);
                setError(err.text());
            }
        }
    }

    return (
        <div className="rounded-md bg-white pt-8 pb-12 px-6 shadow-2xl">
            <form onSubmit={handleSubmit}>
                <p className="text-2xl font-semibold mb-5">Login Here</p>
                <InputComponent type="text" placeholder="Enter your email" name={"email"} onChange={handleChange} />
                <br />
                <InputComponent type="password" placeholder="Enter your password" name={"password"} onChange={handleChange} />
                <br />
                <br />
                {error && <p className="text-red-500 text-xs w-80">{error}</p>}
                <ButtonComponent isPrimary={true} text="Sign In" type="submit" />
                <br />
                <p className="text-start mt-2 text-gray-500 italic text-sm">Do not have an account? </p>
                <ButtonComponent isPrimary={false} text="Register Now" href="/register" />
            </form>
        </div>
    );
}

export default Login;