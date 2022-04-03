import { BrowserRouter, Link, Routes, Route } from "react-router-dom"
// import { OutputReport } from "./components/OutputReport/outputReport"
import { Report } from "./components/Report/Report"
import "./app.scss"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        Cash Flow
      </header>

      <BrowserRouter>
        <Link to='/report'>Report</Link>

        <Routes>
          <Route path="/report" element={<Report />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <OutputReport where="income" summ="3500"/>
      <OutputReport where="expences" summ="1200"/> */}
    </div>
  );
}

export default App;
