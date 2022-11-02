import {useState} from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Home from "./views/Home";
import Users from "./views/Users";

function App() {
    const [users, setUsers] = useState(localStorage.getItem("users")
        ? JSON.parse(localStorage.getItem("users")) : []);
    
    const enviarUsuario = (user) => {
        console.log(user);
        setUsers([...users, user]);
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('users', JSON.stringify([...users, user]));
    }
    
    return (
    <div className="App">
        <Router>
            <Routes>
                <Route path="/" element={<Home enviarUsuario={(user) => enviarUsuario(user)}/>} />
                <Route path="/users" element={<Users/>} />
            </Routes>
        </Router>
      
    </div>
  );
}

export default App;
