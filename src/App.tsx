import React from "react";
import Category from "./components/Category/Category"
import "./App.scss";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        CashFlow
      </header>
      <Category />
    </div>
  );
}

export default App;