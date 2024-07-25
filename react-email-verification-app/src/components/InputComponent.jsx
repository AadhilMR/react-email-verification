import PropTypes from 'prop-types';

function InputComponent(props) {
    const className = getClassName();
    const inputType = getInputType();

    function getClassName() {
        if(props.type == "text-mini") {
            return "w-36";
        }
        return "w-80";
    }
    
    function getInputType() {
        if(props.type == "password") {
            return "password";
        }
        return "text";
    }

    return (
        <input 
            type={inputType} 
            placeholder={props.placeholder} 
            className={"border rounded-md border-gray-200 outline-none focus:border-gray-400 bg-gray-100 px-3 py-1 mt-3 " + className} />
    );
}

InputComponent.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
}

InputComponent.defaultProps = {
    type: "text",
    placeholder: "",
}

export default InputComponent;