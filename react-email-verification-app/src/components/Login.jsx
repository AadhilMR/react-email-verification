import { useState } from "react";
import ButtonComponent from "./ButtonComponent";
import InputComponent from "./InputComponent";

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [error, setError] = useState("");

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

    return (
        <div className="rounded-md bg-white pt-8 pb-12 px-6 shadow-2xl">
            <p className="text-2xl font-semibold mb-5">Login Here</p>
            <InputComponent type="text" placeholder="Enter your email" name={"email"} onChange={handleChange} />
            <br />
            <InputComponent type="password" placeholder="Enter your password" name={"password"} onChange={handleChange} />
            <br />
            <br />
            {error && <p className="text-red-500 text-xs w-80">{error}</p>}
            <ButtonComponent isPrimary={true} text="Sign In" href="#" />
            <br />
            <p className="text-start mt-2 text-gray-500 italic text-sm">Do not have an account? </p>
            <ButtonComponent isPrimary={false} text="Register Now" href="/register" />
        </div>
    );
}

export default Login;