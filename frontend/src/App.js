import Heading from './components/typography/Heading';
import Input from "./components/form/Input";
import Checkbox from "./components/form/Checkbox";
import FormSubmit from "./components/form/FormSubmit";

function App() {
    let users = localStorage.getItem('users');
    if (users != null) {
        users = JSON.parse(users);
    }
    
    const submitUser = (e) => {
        e.preventDefault()
        alert("Enviandoo");
        JSON.stringify('user');
        users.push('user');
        localStorage.setItem('users', JSON.stringify(users));
    }
    
    return (
    <div className="App">
        <div className="main_container">
            <div className="image_container">
                <img src="logo" alt="logo" />
            </div>
            <div className="form_container">
                <form className="form" 
                    onSubmit="submitUser">
                    
                    <Heading main="TESTE" secondary="EGS SISTEMAS"></Heading>
                    
                    <Input labelText="NOME:"
                        inputType="text"
                        placeholder="Escreva seu nome">
                    </Input>
                    
                    <Input labelText="SOBRENOME:"
                            inputType="text"
                            placeholder="Escreva seu sobrenome">
                    </Input>
                    
                    <Input labelText="IDADE:"
                            inputType="text"
                            placeholder="00/00/0000">
                    </Input>
                    
                    <Input labelText="EMAIL:"
                            inputType="email"
                            placeholder="Escreva seu email">
                    </Input>
                    
                    <Input labelText="CPF:"
                            inputType="text"
                            placeholder="Escreva seu CPF">
                    </Input>
                    
                    <Checkbox labelText="Aceito os termos e condições"></Checkbox>

                    <div className="center">
                        <FormSubmit>
                        ENVIAR
                        </FormSubmit>
                    </div>
                    
                </form>
            </div>
        </div>
      
    </div>
  );
}

export default App;
