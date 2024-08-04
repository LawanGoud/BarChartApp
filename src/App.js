import React from "react";
import MyLineChart from "./components/MyLineChart";
import MyPieChart from "./components/MyPieChart";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Sales vs Orders Charts</h1>
      <div className="chart-container">
        <div className="chart">
          <MyLineChart />
        </div>
        <div className="chart">
          <h2>Pie Chart</h2>
          <MyPieChart />
        </div>
      </div>
    </div>
  );
}

export default App;
