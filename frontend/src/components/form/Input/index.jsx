import {useState} from "react";
import './styles.css';

const Input = ({labelText, inputType, placeholder, changeValue}) => {
    const [value, setValue] = useState('');
    return (
        <div className="form_input">
            <label className="form_input__label">
                {labelText}
            </label>
            <input className="form_input__field" 
                   type={inputType}
                   required
                   value={value}
                   onChange={(e) => {
                       setValue(e.target.value);
                       changeValue(e.target.value)
                   }}
                   placeholder={placeholder}
            />
        </div>
    );
}



export default Input;