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
import { selectDataCalendar } from "../store/calendar/selectors";

export const Report = () => {
  const navigate = useNavigate();
  const expenses: any = []
  const income: any = []
  const getDatas: any = useSelector(selectItemsList)
  const getCategory: any = store.getState().categories.categoriesList
  const getDataCalendar = useSelector(selectDataCalendar)
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

  /**
   * Функция принимает массив и отфильтровывает по дате
   * @returns Возвращает отфильтрованный массив
   */
  let filteredExpenses = ""
  let filteredIncomes = ""
  function filterCalendar(elem: any[], category: any): any {
    switch (getDataCalendar.type) {
      case "Day":
        const day = `${getDataCalendar.elem}.06.2022`
        const formulaDay = elem.filter((elem: any) => elem.date === day)
        return category = formulaDay
      case "Month":
        const month = getDataCalendar.elem
        const formulaMonth = elem.filter((elem: any) => elem.date.split('.')[1] === month)
        return category = formulaMonth
      case "Year":
        const year = getDataCalendar.elem.toString()
        const formulaYear = elem.filter((elem: any) => elem.date.split('.')[2] === year)
        return category = formulaYear
      default:
        return elem
    }
  }
  filteredExpenses = filterCalendar(expenses, filteredExpenses)
  filteredIncomes = filterCalendar(income, filteredIncomes)
  if (filteredIncomes.length === 0) {
    filteredIncomes = income
  }
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
      <OutputReport where="Income" param={filteredIncomes} />
      <OutputReport where="Expenses" param={filteredExpenses} />
      <DoughnutReport expenses={filteredExpenses} income={filteredIncomes} />
    </div>
  )
}

export default Report