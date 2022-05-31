import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import { logOut } from '../../services/firebase';

export const Menu = () => {
    const navigate = useNavigate();
    const handleLogOutClick = async () => {
        try {
          await logOut();
        } catch (err) {
          console.log(err);
        }
        navigate("/")
      }
    
    return       <div className='historyMenu'>
    <details className="dropdownSummary">
      <summary className="dropdownSummary">
        <MenuIcon className='menu' />
      </summary>
      <div className="dropdownMenu">
        <ul>
          <li className="dropdownItem" onClick={() => {
            navigate("/access")
          }}>Main</li>
          <li className="dropdownItem" onClick={() => {
            navigate("/addcategory")
          }}>Add category</li>
          <li className="dropdownItem signout" onClick={
            handleLogOutClick}>Sign Out</li>
        </ul>
      </div>
    </details>
  </div>
}