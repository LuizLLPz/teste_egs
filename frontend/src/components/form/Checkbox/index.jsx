import './styles.css';

const Checkbox = ({labelText}) => {
    return (
        <div className="form_checkbox">
            <label className="form_checkbox__label">
                {labelText}
            </label>
            
            <input className="form_checkbox__field"
                   type="checkbox"
            />
        </div>
    );
}
export default Checkbox;