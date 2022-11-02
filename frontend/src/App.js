import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Home from "./views/Home";
import Users from "./views/Users";
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
        localStorage.setItem('user', JSON.stringify('user'));
        localStorage.setItem('users', JSON.stringify(users));
    }
    
    return (
    <div className="App">
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/users" element={<Users users={users} />} />
            </Routes>
        </Router>
      
    </div>
  );
}

export default App;
