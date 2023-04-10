import { Dropdown } from 'antd';
import {  useNavigate } from "react-router-dom";
import { Role, UserInfo, Username } from './styles';
import IMG from '../../../assets/images/LOGO.png'
const AuthUser = () => {
    const navigate = useNavigate();
    
    const logout = () => {
        localStorage.removeItem('token')
        navigate(`/`)
    }
    const items = [
        {
          label: (
              <div>
                <a onClick={logout}>
                    Log out
                </a>
              </div>
          ),
          key: '0',
        }
      ];


    return(
        <Dropdown
        menu={{
          items,
        }}
      >
        <a onClick={(e) => e.preventDefault()}>
            <UserInfo>
              <img src={IMG}/>
              <div>
                <Role>Admin</Role>
                <Username>Lôi_DEV</Username>
              </div>
            </UserInfo>
        </a>
      </Dropdown>
    );
}

export default AuthUser;