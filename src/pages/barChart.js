import React from "react";
import Sidebar from "../components/sidenav/sidenav.component";
import BarChartComponent from "../components/bar-chart/bar-chart.component";

const BarChart = () => {
    return(
        <div className="page">
            <Sidebar />
            <BarChartComponent />
        </div>
    )
}

export default BarChart;