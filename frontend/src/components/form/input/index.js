const Input = ({labelText, inputType, placeholder}) => {
    return (
        <div className="form_input">
            <label htmlFor="form_input__label">
                {labelText}
            </label>
            <input className="form_input__field" 
                type={inputType}
                placeholder={placeholder}
            />
        </div>
    );
}

export default Input;