import { IconButton } from "@mui/material";
import { Calendar } from "../Calendar/Calendar";
import './report.scss';
import HistoryIcon from '@mui/icons-material/History';
import { DoughnutReport, OutputReport } from "../OutputReport/outputReport";
import { useNavigate } from "react-router-dom";
import { store } from "../store";
import React from "react";
import { Menu } from "../Menu/Menu";
import { useSelector } from "react-redux";
import { selectItemsList } from "../store/history/selectors";

export const Report = () => {
  const expenses: any = []
  const income: any = []
  const getDatas: any = useSelector(selectItemsList)
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
  console.log(income)
  console.log(expenses)
  return (
    <div className="report">
      <div className="reportMenu">
        <IconButton onClick={() => {
          navigate("/history")
        }}>
          <HistoryIcon className="reportMenuBtn" />
        </IconButton>
        <Menu />
      </div>
      <h2 className="reportHeader">Report</h2>
      <Calendar />
      <OutputReport where="Income" param={income} />
      <OutputReport where="Expenses" param={expenses} />
      <DoughnutReport expenses={expenses.filter((elem: any) => elem.date === "21.06.2022")} income={income} />
    </div>
  )
}

export default Report