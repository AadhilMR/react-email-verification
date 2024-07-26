import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

function ButtonComponent(props) {
    const primaryButtonStyles = "border-none outline-none bg-purple-600 hover:bg-purple-700 active:bg-purple-600 text-white rounded-md px-3 py-1 w-80 mt-2 grid";
    const secondaryButtonStyles = "border border-purple-400 hover:border-purple-500 outline-none active:bg-gray-100 text-purple-600 rounded-md px-3 py-1 w-80 mt-2 grid";

    return (
        <button className={(props.isPrimary) ? primaryButtonStyles : secondaryButtonStyles} type={props.type}>
            {(props.href.trim() != "") ? <Link to={props.href}>{props.text}</Link> : props.text}
        </button>
    );
}

ButtonComponent.propTypes = {
    text: PropTypes.string,
    type: PropTypes.string,
    isPrimary: PropTypes.bool,
    href: PropTypes.string,
}

ButtonComponent.defaultProps = {
    text: "Click Here",
    type: "",
    isPrimary: true,
    href: "",
}

export default ButtonComponent;