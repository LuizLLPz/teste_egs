import './styles.css';

const Checkbox = ({labelText}) => {
    return (
        <label className="form_checkbox">
            <span className="form_checkbox__label">Aceito os termos e condições</span>
            <input type="checkbox" className="form_checkbox__input" required/>
        </label>  
    );
}
export default Checkbox;