import DigitalClock from "./DigitalClock";

function Header() {
    return (
        <div className="rounded-md bg-white py-4 px-6 shadow-2xl">
            <div className="row">
                <div className="columns-2">
                    <h1 className="text-2xl text-start">Welcome user!</h1>
                    <h1 className="text-2xl text-end">
                        <DigitalClock/>
                    </h1>
                </div>
            </div>
        </div>
    );
}

export default Header;