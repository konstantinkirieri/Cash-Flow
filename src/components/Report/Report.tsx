import { IconButton } from "@mui/material"
import { Calendar } from "../Calendar/Calendar"
import './report.scss'
import HistoryIcon from '@mui/icons-material/History'
import { DoughnutReport, OutputReport } from "../OutputReport/outputReport"
import { useNavigate } from "react-router-dom"
import "../Access/access.scss"
import { store } from "../store"
import { Menu } from "../Menu/dropMenu"

export const Report = () => {

  const navigate = useNavigate()
  const expences: any = []
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
    //

    if (elem.typeId !== "Income") {
      expences.push(elem)
    } else {
      income.push(elem)
    }
  })

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
      <OutputReport where="Expences" param={expences} />
      <DoughnutReport expences={expences} income={income} />
    </div>
  )
}

export default Report