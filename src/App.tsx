//import Calendar from "./components/Calendar/Calendar";
import { History } from "./components/History/History";
import { Report } from "./components/Report/Report";
import { BrowserRouter, Link, Routes, Route, useParams } from "react-router-dom";
import "./app.scss";

function App() {
  const test = useParams();
  console.log(test);
  
  return (
    <div className="App">
      <header className="App-header">
      </header>
    
      <BrowserRouter>
                <Link to='/report'>
                  Report
                </Link>
                <Link to='/history'>
                  History
                </Link>
              
              <Routes>
                <Route path="/report" element={<Report />} />
                <Route path="/history" element={<History />} />
              </Routes>
              </BrowserRouter>
      
      <Category />
    </div>
  );
}

export default App;