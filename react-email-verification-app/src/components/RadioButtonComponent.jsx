import PropTypes from 'prop-types';
import { useState } from 'react';

function RadioButtonComponent(props) {
    const [selected, setSelected] = useState(true);

    return (
        <div className="px-3 py-1 rounded-md bg-gray-100 border border-gray-200 w-36 text-start mt-3">
            <label>
                <input type="radio" className="me-2 accent-purple-600" name={props.group} checked={selected} onClick={() => setSelected(true)} />
                {props.text}
            </label>
        </div>
    );
}

RadioButtonComponent.propTypes = {
    text: PropTypes.string,
    group: PropTypes.string,
}

RadioButtonComponent.defaultProps = {
    text: "",
    group: "default",
}

export default RadioButtonComponent;