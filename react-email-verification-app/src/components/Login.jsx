import ButtonComponent from "./ButtonComponent";
import InputComponent from "./InputComponent";

function Login() {
    return (
        <div className="rounded-md bg-white pt-8 pb-12 px-6 shadow-2xl">
            <p className="text-2xl font-semibold mb-5">Login Here</p>
            <InputComponent type="text" placeholder="Enter your email" />
            <br />
            <InputComponent type="password" placeholder="Enter your password" />
            <br />
            <br />
            <ButtonComponent isPrimary={true} text="Sign In" href="#" />
            <br />
            <p className="text-start mt-2 text-gray-500 italic text-sm">Do not have an account? </p>
            <ButtonComponent isPrimary={false} text="Register Now" href="/register" />
        </div>
    );
}

export default Login;