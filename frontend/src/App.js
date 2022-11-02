import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Home from "./views/Home";
import Users from "./views/Users";

function App() {
    let users = localStorage.getItem('users');
    if (users != null) {
        users = JSON.parse(users);
    }
    
    const submitUser = (e) => {
        e.preventDefault()
        alert("Enviando");
        JSON.stringify('user');
        users.push('user');
        localStorage.setItem('user', JSON.stringify('user'));
        localStorage.setItem('users', JSON.stringify(users));
    }
    
    return (
    <div className="App">
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/users" element={<Users  
                users={[{nome: "Luiz", sobrenome: "Felipe", idade: "08/10/2001",
                        email: "l123@gmail.com", cpf: "123.456.789-10"},
                    {nome: "Luiz", sobrenome: "Felipe", idade: "08/10/2001",
                        email: "l123@gmail.com", cpf: "123.456.789-10"},
                    {nome: "Luiz", sobrenome: "Felipe", idade: "08/10/2001",
                        email: "l123@gmail.com", cpf: "123.456.789-10"},
                    {nome: "Luiz", sobrenome: "Felipe", idade: "08/10/2001",
                        email: "l123@gmail.com", cpf: "123.456.789-10"},
                ]}
                />} />
            </Routes>
        </Router>
      
    </div>
  );
}

export default App;
