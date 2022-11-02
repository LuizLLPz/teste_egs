import Navbar from "../../components/layout/Navbar";
import './styles.css'

const Users = ({users}) => {
    return (
        <div>
            <Navbar>
                <img src="" alt="logo" className="navbar__logo"/>
                <div className="navbar__links">
                    <a className="navbar__anchor">NOME</a>
                    <a className="navbar__anchor">SOBRENOME</a>
                </div>
            </Navbar>
            <div className="users_container">
                {users &&
                    <table class="tb_users" border>
                        <tr>
                            <th className="tb_users__heading">
                                NOME
                            </th>
                            <th className="tb_users__heading">
                                SOBRENOME
                            </th>
                            <th className="tb_users__heading">
                                DATA
                            </th>
                            <th className="tb_users__heading">
                                E-MAIL
                            </th>
                            <th className="tb_users__heading">
                                CPF
                            </th>
                        </tr>
                        {users.map((user) => {
                            return (
                                <tr className="tb_users__row">
                                    <td className="tb_users__data">
                                        {user.nome}
                                    </td>
                                    <td className="tb_users__data">
                                        {user.sobrenome}
                                    </td>
                                    <td className="tb_users__data">
                                        {user.data}
                                    </td>
                                    <td className="tb_users__data">
                                        {user.email}
                                    </td>
                                    <td className="tb_users__data">
                                        {user.cpf}
                                    </td>
                                </tr>
                            );
                        })
                    }
                    </table>
                }
            </div>
        </div>
    );
}

export default Users;