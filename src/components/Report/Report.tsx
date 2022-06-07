import { IconButton } from "@mui/material"
import { Calendar } from "../Calendar/Calendar"
import './report.scss'
// import MenuIcon from '@mui/icons-material/Menu'
import HistoryIcon from '@mui/icons-material/History'
import { DoughnutReport, OutputReport } from "../OutputReport/outputReport"
// import { EnteredDataHandler } from "../EnteredData/EnteredDataHandler"
import { useNavigate } from "react-router-dom"
// import { logOut } from "../../services/firebase"
import "../Access/access.scss"
import { store } from "../store"
import { Menu } from "../Menu/dropMenu"

export const Report = () => {

  const navigate = useNavigate()
  const expences: any = []
  const income: any = []
  const getDatas: any = store.getState().items.itemsList
  /**
   * Фильтрация стора iteamList на расход/доход
   */
  getDatas.forEach((elem: { typeId: string }) => {
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