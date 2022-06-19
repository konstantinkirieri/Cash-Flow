import { IconButton } from "@mui/material"
import { Calendar } from "../Calendar/Calendar"
import './report.scss'
import MenuIcon from '@mui/icons-material/Menu'
import HistoryIcon from '@mui/icons-material/History'
import { DoughnutReport, OutputReport } from "../OutputReport/outputReport"
import { useNavigate } from "react-router-dom"
import { logOut } from "../../services/firebase"
//import "../Switcher/switch.scss"
import { store } from "../store"
import React from "react"

export const Report = () => {
  const expenses: any = []
  const income: any = []
  const getDatas: any = store.getState().items.itemsList
  const getCategory: any = store.getState().categories.categoriesList
  /**
   * Фильтрация стора iteamList на расход/доход
   */
  getDatas.forEach((elem: { typeId: string }) => {
    /**
     * Костыль, пока не поправим в базе данных зависимости
     * @param elem Элемент массива из Стора iteamsList
     */
    function categoryHandler(elem: any) {
      for (let i = 0; i < getCategory.length; i++) {
        if (elem.img === getCategory[i].img) {
          elem.categoryId = getCategory[i].id
        }
      }
    }
    categoryHandler(elem)
    /**
     * Фильтруем по доходу и расходу
     */
    if (elem.typeId !== "Income") {
      expenses.push(elem)
    } else {
      income.push(elem)
    }
  })
  const navigate = useNavigate();
  const handleLogOutClick = async () => {
    try {
      await logOut();
    } catch (err) {
      console.log(err);
    }
    navigate("/")
  }

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
      <OutputReport where="Expenses" param={expenses} />
      <DoughnutReport expenses={expenses} income={income} />
    </div>
  )
}

export default Report