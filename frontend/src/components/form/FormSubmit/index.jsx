import './styles.css';

const FormSubmit = ({children}) => {
    return (
        <button className="form_submit" type="submit">{children}</button>
    );
}

export default FormSubmit;