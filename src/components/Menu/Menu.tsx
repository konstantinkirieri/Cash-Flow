import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { logOut } from "../../services/firebase";
import { useNavigate } from "react-router-dom";

export const Menu = () => {

    const navigate = useNavigate();
  const handleLogOutClick = async () => {
    try {
      await logOut();
    } catch (err) {
      console.log(err);
    }
    navigate("/");
  };

    return (
        <>
        <details className="dropdownSummary">
          <summary className="dropdownSummary">
            <MenuIcon className='menu' />
          </summary>
          <div className="dropdownMenu">
            <ul>
              <li className="dropdownItem" onClick={() => {
                navigate("/main")
              }}>Main</li>
              <li className="dropdownItem" onClick={() => {
                navigate("/addCategory")
              }}>Add category</li>
              <li className="dropdownItem" onClick={() => {
                navigate("/report")
              }}>Report</li>
              <li className="dropdownItem" onClick={() => {
                navigate("/history")
              }}>History</li>
              <li className="dropdownItem signout" onClick={
                handleLogOutClick}>Sign Out</li>
            </ul>
          </div>
        </details>
        </>
    )
}