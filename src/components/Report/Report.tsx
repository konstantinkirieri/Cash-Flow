import { IconButton } from "@mui/material";
import Calendar from "../Calendar/Calendar"
import './report.scss';
import MenuIcon from '@mui/icons-material/Menu';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';

export const Report = () => {
    return (
        <div className="report">
            <div className="reportMenu">
            <IconButton>
                <HistoryToggleOffIcon className="reportMenuBtn"/>
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
            <h2>Report</h2>
            <Calendar />
        </div>
    )
}

export default Report;