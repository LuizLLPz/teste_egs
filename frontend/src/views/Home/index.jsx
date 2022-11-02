import { useState } from "react";
import Heading from "../../components/typography/Heading";
import Input from "../../components/form/Input";
import Checkbox from "../../components/form/Checkbox";
import FormSubmit from "../../components/form/FormSubmit";
import Anchor from "../../components/typography/Anchor";
import './styles.css';
const Home = ({enviarUsuario}) => {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [email, setEmail] = useState('');
    const [data, setData] = useState('');
    const [cpf, setCPF] = useState('');
    
    return (
        <>
        <div className="main_container">
            <div className="image_container">
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
                     className="image_container__logo"
                     alt="logo"/>
            </div>
            <div className="form_container">
                <form className="form"
                      onSubmit={(e) =>  {
                            e.preventDefault();
                              enviarUsuario(
                              {
                                  nome,
                                  sobrenome,
                                  data,
                                  email,
                                  cpf
                              });
                      }}>

                    <Heading main="TESTE" secondary="EGS SISTEMAS"></Heading>

                    <Input labelText="NOME:"
                           inputType="text"
                           placeholder="Escreva seu nome"
                           changeValue={(nome) => setNome(nome)}
                           >
                    </Input>

                    <Input labelText="SOBRENOME:"
                           inputType="text"
                           placeholder="Escreva seu sobrenome"
                           changeValue={(sobrenome) => setSobrenome(sobrenome)}>
                    </Input>

                    <Input labelText="IDADE:"
                           inputType="text"
                           placeholder="00/00/0000"
                           changeValue={(data) => setData(data)}>
                    </Input>

                    <Input labelText="EMAIL:"
                           inputType="email"
                           placeholder="Escreva seu email"
                           changeValue={(email) => setEmail(email)}>
                    </Input>

                    <Input labelText="CPF:"
                           inputType="text"
                           placeholder="Escreva seu CPF"
                           changeValue={(cpf) => setCPF(cpf)}>
                    </Input>

                    <Checkbox labelText="Aceito os termos e condições"></Checkbox>

                    <div className="center">
                        <FormSubmit>
                            ENVIAR
                        </FormSubmit>
                        <Anchor href="/users">
                            I'm already a member
                        </Anchor>
                    </div>
                </form>
            </div>
        </div>
        </>
    );
}

export default Home;