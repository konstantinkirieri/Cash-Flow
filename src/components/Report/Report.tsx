import { IconButton } from "@mui/material"
import { Calendar } from "../Calendar/Calendar"
import './report.scss'
import MenuIcon from '@mui/icons-material/Menu'
import HistoryIcon from '@mui/icons-material/History'
import { DoughnutReport, OutputReport } from "../OutputReport/outputReport"
import { EnteredDataHandler } from "../EnteredData/EnteredDataHandler"
import { useNavigate } from "react-router-dom"
import { logOut } from "../../services/firebase"
//import "../Switcher/switch.scss"
import { store } from "../store"
import React from "react"

export const Report = () => {
  const income = [{ inputValue: 16500 }]
  const expences: any = store.getState().items.itemsList
  const navigate = useNavigate();
  const handleLogOutClick = async () => {
    try {
      await logOut();
    } catch (err) {
      console.log(err);
    }
    navigate("/")
  };

  return (
    <div className="report">
      <div className="reportMenu">
        <IconButton onClick={() => {
          navigate("/history")
        }}>
          <HistoryIcon className="reportMenuBtn" />
        </IconButton>
        <details className="dropdownSummary">
          <summary className="dropdownSummary">
            <MenuIcon className='menu' />
          </summary>
          <div className="dropdownMenu">
            <ul>
              <li className="dropdownItem" onClick={() => {
                navigate("/switcher")
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
      <h2 className="reportHeader">Report</h2>
      <Calendar />
      <OutputReport where="Income" param={income} />
      <OutputReport where="Expences" param={expences} />
      <DoughnutReport expences={expences} income={income} />
    </div>
  )
}

export interface NewData {
  idTrans: number,
  categoryId: number,
  dateTrans: Date,
  enteredData: number,
}
const enteredData: NewData = {
  idTrans: 1,
  categoryId: 1,
  dateTrans: new Date(),
  enteredData: 15400,
}
EnteredDataHandler(enteredData)
export default Report