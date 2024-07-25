import { useState } from "react";
import ButtonComponent from "./ButtonComponent";
import InputComponent from "./InputComponent";
import RadioButtonComponent from "./RadioButtonComponent";

function Register() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        userRole: '',
    });

    const [error, setError] = useState("");

    const validatePassword = (password) => {
        const hasLowerCase = /[a-z]/.test(password);
        const hasUpperCase = /[A-Z]/.test(password);
        const hasNumber = /\d/.test(password);
        const hasSymbol = /[@#$%^&*()\-_/<>.,]/.test(password);

        const validCount = [hasLowerCase, hasUpperCase, hasNumber, hasSymbol].filter(Boolean).length;

        return validCount >= 3;
    }

    function handleChange(e) {
        const {name, value} = e.target;
        setFormData({
            ...formData, [name]: value
        });

        if(!formData.firstName.trim()) {
            setError("First name cannot be empty.");
        } else if(!formData.lastName.trim()) {
            setError("Last name cannot be empty.");
        } else if(!formData.email.trim()) {
            setError("Email cannot be empty");
        } else if(!/\S+@\S+\.\S+/.test(formData.email)) {
            setError("Email is invalid.");
        } else if(!formData.password.trim()) {
            setError("Password cannot be empty");
        } else if(formData.password.length < 8 || formData.password.length > 20) {
            setError("Password must be between 8-20 characters.");
        } else if(!validatePassword(formData.password)) {
            setError("Password must include at least three of the following: lowercase letters, uppercase letters, numbers, and symbols.");
        } else {
            setError("");
        }
    }

    return (
        <div className="rounded-md bg-white pt-8 pb-12 px-6 shadow-2xl">
            <form>
                <p className="text-2xl font-semibold mb-5">Register Now</p>
                <div className="flex gap-8">
                    <InputComponent type="text-mini" placeholder="First name" name={"firstName"} onChange={handleChange} />
                    <InputComponent type="text-mini" placeholder="Last name" name={"lastName"} onChange={handleChange} />
                </div>
                <InputComponent type="text" placeholder="Enter your email" name={"email"} onChange={handleChange} />
                <br />
                <InputComponent type="password" placeholder="Enter your password" name={"password"} onChange={handleChange} />
                <br />
                <div className="flex justify-center gap-8">
                    <RadioButtonComponent text="Admin" group="user-group" />
                    <RadioButtonComponent text="User" group="user-group" />
                </div>
                <br />
                {error && <p className="text-red-500 text-xs w-80">{error}</p>}
                <ButtonComponent isPrimary={true} text="Register" href="#" />
                <br />
                <p className="text-start mt-2 text-gray-500 italic text-sm">Already have an account? </p>
                <ButtonComponent isPrimary={false} text="Login Here" href="/login" />
            </form>
        </div>
    );
}

export default Register;