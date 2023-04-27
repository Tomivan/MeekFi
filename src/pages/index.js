import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BarChart from "./barChart";
import LineChart from "./lineChart";
import PieChart from "./pieChart";

const Pages = () => {
    return(
        <Router>
            <Routes>
                <Route  path="/" element={<BarChart />}/>
                <Route path="/line-chart" element={<LineChart />} />
                <Route path="/pie-chart" element={<PieChart />} />
            </Routes>
        </Router>
    )
}

export default Pages;