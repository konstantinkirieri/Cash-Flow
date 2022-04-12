//import Calendar from "./components/Calendar/Calendar";
import { History } from "./components/History/History";
import { Report } from "./components/Report/Report";
import { ExpIcons } from "./components/Category/Category";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import "./app.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
    
      <BrowserRouter>
                <Link to='/category'>
                  Category
                </Link>
                <Link to='/report'>
                  Report
                </Link>
                <Link to='/history'>
                  History
                </Link>
              
              <Routes>
                <Route path="/category" element={<ExpIcons />} />
                <Route path="/report" element={<Report />} />
                <Route path="/history" element={<History />} />
              </Routes>
              </BrowserRouter>
      
    </div>
  );
}

export default App;
