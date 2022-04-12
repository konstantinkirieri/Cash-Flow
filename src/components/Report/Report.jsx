import { IconButton } from "@mui/material";
//import Calendar from "../Calendar/Calendar"
import "./report.scss";
import MenuIcon from "@mui/icons-material/Menu";
import HistoryIcon from "@mui/icons-material/History";
import { OutputReport } from "../OutputReport/outputReport";
import { DoughnutReport } from "../OutputReport/outputReport";
import { Calendar } from "../Calendar/Calendar";

export const Report = () => {
  return (
    <div className="report">
      <div className="reportMenu">
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
          <MenuIcon className="menu" />
        </IconButton>
      </div>
      <h2 className="reportHeader">Report</h2>
      <Calendar />
      <OutputReport />
      <DoughnutReport />
    </div>
  );
};

export default Report;
