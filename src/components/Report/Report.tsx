import { IconButton } from "@mui/material";
import { Calendar } from "../Calendar/Calendar"
import './report.scss';
import MenuIcon from '@mui/icons-material/Menu';
import HistoryIcon from '@mui/icons-material/History';
import { OutputReport, DoughnutReport } from "../OutputReport/outputReport"
import { itemsList } from "../../components/History/History"
import React from "react";
import { EnteredDataHandler } from "../EnteredData/EnteredDataHandler";
import { useNavigate } from "react-router-dom";

const income = [{amount: 16500}]
const expences = itemsList

export const Report = () => {
  const navigate = useNavigate()
    return (
        <div className="report">
            <div className="reportMenu" onClick={() => {
                navigate("/history")
            }}>
            <IconButton>
                <HistoryIcon className="reportMenuBtn" />
            </IconButton>
            <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon className='menu' />
          </IconButton>
            </div>
            <h2 className="reportHeader">Report</h2>
            <Calendar />
            <OutputReport where="income" param={income} />
            <OutputReport where="expences" param={expences} />
            <DoughnutReport expences={expences} income={income}/>
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
export default Report;