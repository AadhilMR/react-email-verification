import ButtonComponent from "./ButtonComponent";
import InputComponent from "./InputComponent";
import RadioButtonComponent from "./RadioButtonComponent";

function Register() {
    return (
        <div className="rounded-md bg-white pt-8 pb-12 px-6 shadow-2xl">
            <p className="text-2xl font-semibold mb-5">Register Now</p>
            <div className="flex gap-8">
                <InputComponent type="text-mini" placeholder="First name" />
                <InputComponent type="text-mini" placeholder="Last name" />
            </div>
            <InputComponent type="text" placeholder="Enter your email" />
            <br />
            <InputComponent type="password" placeholder="Enter your password" />
            <br />
            <div className="flex justify-center gap-8">
                <RadioButtonComponent text="Admin" group="user-group" />
                <RadioButtonComponent text="User" group="user-group" />
            </div>
            <br />
            <ButtonComponent isPrimary={true} text="Register" href="#" />
            <br />
            <p className="text-start mt-2 text-gray-500 italic text-sm">Already have an account? </p>
            <ButtonComponent isPrimary={false} text="Login Here" href="/login" />
        </div>
    );
}

export default Register;